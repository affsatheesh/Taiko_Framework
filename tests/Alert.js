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
    confirm
} = require('taiko');


// afterSuite(async () => {
//     await closeBrowser();
// });


step("Navigate to Alert page", async function () {
    try {
        await highlight($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:j_idt37']`));
        await click($(`//*[@id='menuform:m_overlay']`));
    } catch (error) {
        console.error(error);
    }
 })

 
 step("click on ok Alert", async function () {
    try {
        alert('I am simple alert.', async () => await accept());
        await highlight($(`//*[text()=' Alert (Simple Dialog)']//following::button[1]`));
        await click($(`//*[text()=' Alert (Simple Dialog)']//following::button[1]`));
    } catch (error) {
        console.error(error);
    }
 })

 step("click on prompt Alert", async function () {
    try {
        prompt('Type your name and click OK', async () => await accept('Sathesh'))
        await highlight($(`//*[text()=' Alert (Prompt Dialog)']//following::button[1]`));
        await click($(`//*[text()=' Alert (Prompt Dialog)']//following::button[1]`));
    } catch (error) {
        console.error(error);
    }
 })

 step("click on Confirm Alert", async function () {
    try {
        confirm('Did you call me?', async () => await dismiss())
        await highlight($(`//*[text()=' Alert (Confirm Dialog)']//following::button[1]`));
        await click($(`//*[text()=' Alert (Confirm Dialog)']//following::button[1]`));
    } catch (error) {
        console.error(error);
    }
 })


 