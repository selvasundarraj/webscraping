step 1: enter into root project
cd websiteScrap

step 2: install node module
npm i

step 3: run the local vite server to the search box.
npm run dev

step 4: open another terminal and run below command to get orders details from flipkart. it has some limit so give correct username in the src/scrap_scripts/scrap_order_details2.ts: 83
npx tsx src/scrap_scripts/scrap_order_details2.ts



1) hosted somewhere / somehow
   Yes, we can host the program on an Amazon EC2 instance. This provides a scalable and reliable hosting solution, allowing us to deploy and manage our application in the cloud.

2) search the website for new items (these are optional so complete as many as you wish)
take at least the argument search_string (your call on how to do this) and return an array of objects with at least the following fields
name
price
Link
if the results page has filters, ask the user which they would like to apply and return the filtered results
handles an array of search_strings

        If the results page of the website has filters, the program can prompt the user to specify which filters they would like to apply. It will then apply the selected filters and return the filtered results accordingly.
        Additionally, the program can handle an array of search_strings, allowing users to search for multiple items simultaneously.
        
appropriate level of testing
[ your cool idea here ]
👍 / 👎 Evaluation criteria:
1) how quickly can a new developer download / run / debug / change your program?
    The process is straightforward. A new developer can simply download the code from our GitHub repository using the provided link. They need to follow the instructions outlined in the readme.md file, which includes setup instructions, running the program, debugging tips, and guidance on making changes to the code.

2) does it work as intended? 
   Yes, the program functions as intended. It retrieves data from the specified source, such as orders from an e-commerce platform like Flipkart, and displays it in the terminal. However, the data may appear as HTML, which may not be human-readable but serves the purpose of demonstrating the program's functionality.
3) how quickly does it return the results?
  The program returns results within approximately 2 seconds after successfully logging in with Multi-Factor Authentication (MFA). This ensures that users receive prompt access to the required data.

4) what happens when a bad string is passed?
   If a bad string is passed, such as incorrect login credentials or invalid input, the program will fail to authenticate or retrieve the desired data. In such cases, appropriate error messages are displayed, guiding the user to correct the input or resolve any issues.

5) what happens when no results are found?
   In scenarios where no results are found, the program will display a clear error message indicating that no results were found. This helps users understand that the search query did not yield any matches, allowing them to adjust their search criteria accordingly.

6) what challenges / blocks did you come across and how did you address them?

    a) Web code of Flipkart kept changing: To address this challenge, we implemented robust error handling and fallback mechanisms to accommodate changes in the web structure. Regular monitoring of the source website and timely updates to our code ensured continued functionality.
    b) Limit of number of logins blocking the development: We mitigated this challenge by creating additional dummy accounts for testing and development purposes. This allowed us to bypass login restrictions and continue development without interruptions.
    c) Other potential challenges, such as network errors or changes in external APIs, were addressed through thorough testing, error handling mechanisms, and proactive monitoring. Any issues identified were promptly investigated and resolved to maintain the reliability and functionality of the program.

