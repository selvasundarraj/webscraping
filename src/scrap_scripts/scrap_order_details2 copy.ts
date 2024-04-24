import { chromium, Browser, Page } from 'playwright';

const authFile = 'playwright/.auth/user.json';

async function loginAndStoreSession(username: string, url: string): Promise<string> {
    // Launch browser
    const browser: Browser = await chromium.launch({
        // Adjust options as needed
        headless: false, // Set to false for visual debugging
    });

    // Create a new page
    const page: Page = await browser.newPage();

    try {
        // Navigate to the login page
        await page.goto(url);
        
        // flipcart
        const classname ='r4vIwl'
        const inputElement = await page.$(`.${classname}`);

        if (inputElement) {
          // Fill the input field with the specified text
          await inputElement.fill(username);
          console.log(`Filled input with classname '${classname}' with text: '${username}'`);
        } else {
          console.error(`Input with classname '${classname}' not found`);
        }
      
      

        // Click the login button
        await page.click('.QqFHMw');

        // Wait for navigation or other actions as needed
        await page.waitForURL('https://www.flipkart.com/');

        // Store the session (cookies)
        const cookies = await page.context().cookies();

        // Convert cookies to JSON and return as a string
        const cookiesJson = JSON.stringify(cookies);
        await page.context().storageState({ path: authFile });


        await page.getByText('My Account').click();

        await page.getByText('Orders').click();

        const OrderElements = await page.$$(".column.sKUelf");
        
        console.log(OrderElements,"OrderElements")

        

        

        return cookiesJson;
    } finally {
        // Close the browser
        // await browser.close();
    }
}



async function getOrderDetails(url:string): Promise<string> { 
    // # Import the sync_playwright function from the sync_api module of Playwright.
// from playwright.sync_api import sync_playwright

// # Start a new session with Playwright using the sync_playwright function.
// with sync_playwright() as playwright:
//     # Connect to an existing instance of Chrome using the connect_over_cdp method.
//     browser = playwright.chromium.connect_over_cdp("http://localhost:9222")

//     # Retrieve the first context of the browser.
//     default_context = browser.contexts[0]

//     # Retrieve the first page in the context.
//     page = default_context.pages[0]

    // Launch browser
    const browser2 = await chromium.connectOverCDP('http://localhost:9222');


    // Create a new page
    const page: Page = await browser2.newPage();

    try {
        // Navigate to the login page
        await page.goto(url);
        
        // assume loggedIn session
        await page.getByText('My Account').click();

        await page.getByText('Orders').click();

        const OrderElements = await page.$$(".column.sKUelf");
        
        console.log(OrderElements,"OrderElements")

        return (OrderElements).toString()

    } finally {
        // Close the browser
        // await browser.close();
    }
}




// Example usage
const username = 'selvasundar5592@gmail.com';
const url = 'https://www.flipkart.com/account/login';

// loginAndStoreSession(username, url)
//     .then(cookiesJson => {
//         console.log('Session stored successfully:');
//         console.log(cookiesJson);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

getOrderDetails(url)