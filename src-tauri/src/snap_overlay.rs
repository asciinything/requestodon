use tauri::{AppHandle, Manager};
use raw_window_handle::{HasWindowHandle, RawWindowHandle};
use std::sync::Once;
use windows_sys::Win32::Foundation::{HWND, LPARAM, LRESULT, WPARAM};
use windows_sys::Win32::UI::WindowsAndMessaging::{
    CallWindowProcW,
    SetWindowLongPtrW,
    GWLP_WNDPROC,
    WM_NCHITTEST,
    HTMAXBUTTON,
    HTCLIENT
};

static mut ORIGINAL_WND_PROC: Option<unsafe extern "system" fn(HWND, u32, WPARAM, LPARAM) -> LRESULT> = None;
static INIT: Once = Once::new();

pub fn init_snap_overlay(app: &AppHandle) {
    if let Some(window) = app.get_webview_window("main") {
        if let Ok(handle) = window.window_handle() {
            if let RawWindowHandle::Win32(handle) = handle.as_raw() {
                let hwnd = handle.hwnd.get() as HWND;
                unsafe {
                    let new_wnd_proc = subclass_proc as unsafe extern "system" fn(HWND, u32, WPARAM, LPARAM) -> LRESULT;
                    let old_wnd_proc = SetWindowLongPtrW(hwnd, GWLP_WNDPROC, new_wnd_proc as isize);
                    INIT.call_once(|| {
                        ORIGINAL_WND_PROC = Some(std::mem::transmute(old_wnd_proc));
                    });
                }
            }
        }
    }
}

unsafe extern "system" fn subclass_proc(
    hwnd: HWND,
    msg: u32,
    wparam: WPARAM,
    lparam: LPARAM,
) -> LRESULT {
    if let Some(original_wnd_proc) = ORIGINAL_WND_PROC {
        let result = CallWindowProcW(Some(original_wnd_proc), hwnd, msg, wparam, lparam);
        if msg == WM_NCHITTEST && result == HTCLIENT as isize {
            return HTMAXBUTTON as isize;
        }
        return result;
    }

    0
}