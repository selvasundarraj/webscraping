step 1: enter into root project
cd websiteScrap

step 2: install node module
npm i

step 3: run the local vite server to the search box.
npm run dev

step 4: open another terminal and run below command to get orders details from flipkart. it has some limit so give correct username in the src/scrap_scripts/scrap_order_details2.ts: 83
npx tsx src/scrap_scripts/scrap_order_details2.ts
