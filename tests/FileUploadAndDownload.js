"use strict";
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
    into,
    attach,
    below,
    fileField,
    expect,
    sleep
} = require('taiko'),
path = require('path'), 
fs = require('fs'), 
assert = require('assert')



// afterSuite(async () => {
//     await closeBrowser();
// });

step("Navigate to fileUpload page", async function () {
    try {
        await highlight($(`//*[@id='menuform:j_idt41']`));
        await click($(`//*[@id='menuform:j_idt41']`));
        await click($(`//*[@id='menuform:m_file']`));
    } catch (error) {
        console.error(error);
    }
 })

 step("Upload the file using basic fileupload", async function () {
    try {
        const filePath = path.resolve('//Users//satheshkumarmurugan//Sathesh//Project//Test//Data//testfile.pdf');
        await attach(filePath, fileField({name: 'j_idt88:j_idt89_input'})); 
    } catch (error) {
        console.error(error);
    }
 })


 step("Download file using Basic Download", async function () {
    try {
        await click('Download'); 
        const downloadPath = path.resolve('//Users//satheshkumarmurugan//Downloads'); 
        const fileName = 'TestLeaf Logo.png';
        const filePath = path.join(downloadPath, fileName);

        await waitForFile(filePath, 5000);

         if (fs.existsSync(filePath)) {
            console.log('File downloaded successfully!');
        } else {
            console.log('File not found!');
        }


    } catch (error) {
        console.error(error);
    }
 })

 function waitForFile(filePath, timeout) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        const interval = 100; // Check every 100ms
        const check = () => {
            if (fs.existsSync(filePath)) {
                resolve();
            } else if (Date.now() - start > timeout) {
                reject(new Error('File download timed out'));
            } else {
                setTimeout(check, interval);
            }
        };
        check();
    });
}





 