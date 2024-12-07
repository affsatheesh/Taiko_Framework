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
    clear
} = require('taiko');


// afterSuite(async () => {
//     await closeBrowser();
// });

step("Open leafground Application Page",async function () {
    await openBrowser({headless: false})
    await goto("https://www.leafground.com/input.xhtml");
})


step("Open Google Page",async function () {
    await openBrowser({headless: false})
    await goto("https://google.co.in");
})

step("Navigate to buttons page", async function () {
    try {
        await highlight($(`//*[@id='menuform:j_idt38']`));
        await click($(`//*[@id='menuform:j_idt38']`));
        await click($(`//*[@id='menuform:m_button']`));
    } catch (error) {
        console.error(error);
    }
 })

 step("click on Normal Button", async function () {
    try {
        await click($(`//*[@id='j_idt88:j_idt90']`));
        waitFor("10000")
    } catch (error) {
        console.error(error);
    }
 })

 step("Hover the mouse in button" , async function () {
    try {
        await hover($(`//*[@id='j_idt88:j_idt100']`));
        waitFor("10000")
    } catch (error) {
        console.error(error);
    }
 })
 