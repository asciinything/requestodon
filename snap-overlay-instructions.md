# Implementing the Snap Overlay Feature

This document provides instructions on how to implement the snap overlay feature in a Tauri application without using the `tauri-plugin-decorum` plugin. The snap overlay is a Windows-specific feature that allows users to arrange windows into a grid.

## Frontend Implementation

The frontend implementation involves creating the title bar controls and adding a `mouseenter` event listener to the maximize button to trigger the snap overlay.

### 1. Create the Title Bar Controls

First, you need to create the title bar controls in your application's frontend. You can use HTML, CSS, and JavaScript to create the buttons. Here's an example of how to create the buttons using JavaScript:

```javascript
const createButton = (id) => {
    const btn = document.createElement("button");

    btn.id = "decorum-tb-" + id;
    btn.style.width = "58px";
    btn.style.height = "32px";
    btn.style.border = "none";
    btn.style.padding = "0px";
    btn.style.outline = "none";
    btn.style.display = "flex";
    btn.style.fontSize = "10px";
    btn.style.fontWeight = "300";
    btn.style.cursor = "default";
    btn.style.boxShadow = "none";
    btn.style.borderRadius = "0px";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.transition = "background 0.1s";
    btn.style.backgroundColor = "transparent";
    btn.style.textRendering = "optimizeLegibility";
    btn.style.fontFamily = "'Segoe Fluent Icons', 'Segoe MDL2 Assets'";

    // ...
};
```

### 2. Add Event Listeners to the Maximize Button

Next, you need to add `mouseenter` and `mouseleave` event listeners to the maximize button. The `mouseenter` event listener will start a timer to show the snap overlay, and the `mouseleave` event listener will clear the timer.

```javascript
let timer;
const show_snap_overlay = () => {
    win.setFocus().then(() =>
        invoke("plugin:decorum|show_snap_overlay")
    );
};

// ...

btn.addEventListener("mouseleave", () =>
    clearTimeout(timer)
);
btn.addEventListener("mouseenter", () => {
    timer = setTimeout(show_snap_overlay, 620);
});
```

## Backend Implementation

The backend implementation involves creating a `show_snap_overlay` command in Rust and using the `enigo` crate to simulate the `Win + Z` key combination.

### 1. Add the `enigo` Crate to Your Dependencies

First, you need to add the `enigo` crate to your `Cargo.toml` file:

```toml
[dependencies]
enigo = "0.0.14"
```

### 2. Create the `show_snap_overlay` Command

Next, you need to create the `show_snap_overlay` command in your Rust code. This command will use the `enigo` crate to simulate the `Win + Z` key combination.

```rust
use tauri;

#[tauri::command]
pub async fn show_snap_overlay() {
    #[cfg(target_os = "windows")]
    {
        use enigo::{Enigo, Key, KeyboardControllable};

        // press win + z using enigo
        let mut enigo = Enigo::new();
        enigo.key_down(Key::Meta);
        enigo.key_click(Key::Layout('z'));
        enigo.key_up(Key::Meta);

        // Wait 50 ms
        std::thread::sleep(std::time::Duration::from_millis(50));

        // Press Alt to hide the ugly numbers
        enigo.key_click(Key::Alt);
    }
}
```

### 3. Register the Command

Finally, you need to register the `show_snap_overlay` command in your `main.rs` file:

```rust
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![show_snap_overlay])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```
