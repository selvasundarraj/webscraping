import { chromium, Browser, Page } from "playwright";

const authFile = "playwright/.auth/user.json";

async function loginAndStoreSession(
  username: string,
  url: string
): Promise<string> {
  // Launch browser
  const browser = await chromium.launchPersistentContext("", {
    args: ["--remote-debugging-port=9222"],
    headless: false,
    userAgent: "Some Overriden User Agent",
  });

  // Create a new page
  const page: Page = await browser.newPage();

  try {
    // Navigate to the login page
    await page.goto(url);

    // flipcart
    const classname = "r4vIwl";
    const inputElement = await page.$(`.${classname}`);

    if (inputElement) {
      // Fill the input field with the specified text
      await inputElement.fill(username);
      console.log(
        `Filled input with classname '${classname}' with text: '${username}'`
      );
    } else {
      console.error(`Input with classname '${classname}' not found`);
    }

    // Click the login button
    await page.click(".QqFHMw");

    // Wait for navigation or other actions as needed
    await page.waitForURL("https://www.flipkart.com/");

    // Store the session (cookies)
    const cookies = await page.context().cookies();

    // Convert cookies to JSON and return as a string
    const cookiesJson = JSON.stringify(cookies);

    await page.context().storageState({ path: authFile });

    // Create a page.
    const page2: Page = await browser.newPage();

    // Navigate explicitly, similar to entering a URL in the browser.
    await page2.goto(
      "https://www.flipkart.com/account/orders?link=home_orders"
    );

    // await page.getByText('Account').click();

    // await page.getByText('Orders').click();
    const classname2 = "column.sKUelf";
    const element = await page2.$(`.${classname2}`);
    let html = "";

    if (element) {
      // Get the HTML code of the element
      html = await element.innerHTML();
      console.log(`HTML code of element with classname '${classname2}':`);
      console.log(html);
    } else {
      console.error(`Element with classname '${classname2}' not found`);
    }

    return html.toString();
  } finally {
    // Close the browser
    // await browser.close();
  }
}

// Example usage
const username = "3423333343"; // enter 10 digint mobile number or email
const url = "https://www.flipkart.com/account/login";

loginAndStoreSession(username, url)
  .then((ordersHtml) => {
    console.log("Session stored successfully and ORDERs");
    console.log(ordersHtml);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
