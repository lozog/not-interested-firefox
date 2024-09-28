// browser compatibility
const storage =
    typeof browser !== "undefined" ? browser.storage : chrome.storage;

document.getElementById("save").addEventListener("click", () => {
    const isDebuggingEnabled = document.getElementById("debug-mode").checked;
    const shouldHideNahButton =
        document.getElementById("hide-nah-button").checked;
    const shouldHideChannelButton = document.getElementById(
        "hide-channel-button"
    ).checked;

    // Save the checkbox value in storage
    storage.sync.set(
        { isDebuggingEnabled, shouldHideNahButton, shouldHideChannelButton },
        () => {
            document.getElementById("status").innerHTML = "Settings saved!";
            setTimeout(() => {
                document.getElementById("status").innerHTML = "";
            }, 5000);
        }
    );
});

document.addEventListener("DOMContentLoaded", () => {
    storage.sync.get("isDebuggingEnabled", (data) => {
        document.getElementById("debug-mode").checked =
            data.isDebuggingEnabled || false;
    });

    storage.sync.get("shouldHideNahButton", (data) => {
        document.getElementById("hide-nah-button").checked =
            data.shouldHideNahButton || false;
    });

    storage.sync.get("shouldHideChannelButton", (data) => {
        document.getElementById("hide-channel-button").checked =
            data.shouldHideChannelButton || false;
    });
});
