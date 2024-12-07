"use strict";
const path = require('path');
const {
    openBrowser,         // Opens a new browser instance.
    closeBrowser,        // Closes the current browser instance.
    goto,                // Navigates to a specified URL.
    click,               // Clicks on an element (button, link, etc.).
    highlight,           // Highlights an element on the page (useful for debugging).
    $,                   // Selects an element using a CSS or XPath selector.
    waitFor,             // Waits for an element to appear on the page.
    hover,               // Hovers over an element on the page.
    press,               // Simulates a keypress event (e.g., Enter, Tab, etc.).
    write,               // Writes text into an input field.
    text,                // Selects an element containing specific text.
    inputField,          // Selects an input field element.
    button,              // Selects a button element.
    link,                // Selects a link element.
    image,               // Selects an image element.
    scrollTo,            // Scrolls to a specific element on the page.
    setViewPort,         // Sets the browser window's width and height.
    evaluate,            // Evaluates custom JavaScript on the page.
    accept,              // Accepts an alert, prompt, or confirm dialog.
    dismiss,             // Dismisses an alert or confirm dialog.
    reload,              // Reloads the current page.
    goBack,              // Navigates back to the previous page.
    goForward,           // Navigates forward in the browser history.
    intercept,           // Intercepts and modifies network requests or responses.
    screenshot,          // Takes a screenshot of the page or a specific element.
    clearCookies,        // Clears all browser cookies.
    setCookie,           // Sets a cookie in the browser.
    deleteCookies,       // Deletes specific or all cookies in the browser.
    title,               // Retrieves the title of the current page.
    closeTab,            // Closes a specific tab or window.
    isVisible,           // Checks if a specific element is visible.
    isEnabled,           // Checks if an element is enabled.
    isChecked,           // Checks if a checkbox is checked.
    scrollRight,         // Scrolls the page to the right.
    scrollLeft,          // Scrolls the page to the left.
    scrollUp,            // Scrolls the page up.
    scrollDown,           // Scrolls the page down.
    clear,
    checkBox,
    check,
    alert,
    prompt,
    confirm,
    switchTo,
    currentURL,
    dragAndDrop,
    into
} = require('taiko');


// afterSuite(async () => {
//     await closeBrowser();
// });

let originalTitle;
let Title;
step("Navigate to Windows page", async function () {
    try {
        await highlight($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:m_window']`));
        originalTitle = await currentURL();
        Title =  await title();
        console.log(Title);
    } catch (error) {
        console.error(error);
    }
 })

 step("Navigate to Windows page only", async function () {
    try {
        await highlight($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:j_idt37']`));
        
        await click($(`//*[@id='menuform:m_window']`));
    } catch (error) {
        console.error(error);
    }
 })


 step("Back to old window", async function () {
    try {
        console.log(originalTitle)
        let regexTitle = new RegExp(Title);
        await switchTo(regexTitle);
        await highlight($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:m_window']`));
    } catch (error) {
        console.error(error);
    }
 })

 step("Navigate to Windows page only", async function () {
    try {
        await highlight($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:j_idt37']`));
        
        await click($(`//*[@id='menuform:m_window']`));
    } catch (error) {
        console.error(error);
    }
 })
 step("Open New window", async function () {
    try {
        await click("Open");
        await switchTo(/Dashboard/);
    } catch (error) {
        console.error(error);
    }
 })



 