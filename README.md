# Number Word Swaps - Website

## Description
Built an Responsive Angular website using Material UI, Bootstrap, Nswag to implement a Dynamic Fizz Buzz problem with some end to end tests using Cypress.

## Tech Stack
- Angular 15
- NSwag
- Material UI
- Bootstrap
- Cypress

## IDE
- Visual Studio Code
- Chrome Dev Tools
- Cypress App

## Commands

1. Run npm install

> npm i

2. Start the app

> ng serve

(or)

> npm run start

3. Run NSwag openapi2tsclient to generate Typescript code for .Net 6 API Calls and C# models defined in the Number Word Swaps - Api project.

> nswag openapi2tsclient /input:https://localhost:7152/swagger/v1/swagger.json /output:generated/NumWordSwapModels.ts /typeScriptTemplate Axios


## Cypress End to End Tests
![alt text](/images/cypress-e2e-tests-ran-successfully.png)

## Demo Screenshots
Step 1 - Entered 200 in the Max Number Input Field

![alt text](/images/Step%201%20-%20Entered%20200.png)

Step 2 - Added 3 Multiple with 'Fizz' Swap Word

![alt text](/images/Step%202%20-%20Entered%20Fizz%20for%203.png)

Step 3 - Added 5 Multiple with 'Buzz' Swap Word

![alt text](/images/Step%203%20-%20Entered%20Buzz%20for%205.png)

Step 4 - Entered 12 Multiple with word 'Akhila' and 8 Multiple with word 'Developer'

![alt text](/images/Step%204%20-%20Entered%20Akhila%20for%2012%20And%20Developer%20for%208.png)


Step 5 - Checked Merge swap words in a numerical sorted order to merge 'Fizz Developer Akhila' (Sorted by multiple order) for number 24 instead of 'Fizz Akhila Developer' (Given order)
![alt text](/images/Step%205%20-%20Selected%20Sorted%20Order%20Checkbox.png)

Step 6 - Updated 'Fizz' Swap word with 'Cool' and saved it

![alt text](/images/Step%206%20-%20Updated%20Fizz%20with%20Cool%20for%203.png)

Step 7 - Updated '5' multiple with '6' and 'Buzz' word with 'Bro'

![alt text](/images/Step%207%20-%20Updated%205%20multiple%20with%206%20and%20Buzz%20with%20Bro%20at%20a%20time%20and%20save%20.png)

Step 8 - Saved 7th step

![alt text](/images/Step%208%20-%20After%20saving.png)

Step 9 - Deleting the First two mulitples and swap words 

![alt text](/images/Step%209%20-%20Delete%20first%20two%20multiples.png)

Step 10 - Updated 12 multiple with 6 for 'Akhila' Swap word (Just as a closing shot)

![alt text](/images/Step%2010%20-%20Updated%2012%20with%206%20for%20Akhila%20swap%20word.png)

## Mobile View Screenshots

![alt text](/images/Iphone12Pro-view%201.png)

![alt text](/images/Iphone12Pro-view%202.png)

## Tablet View Screenshots

![alt text](/images/Ipad%20View.png)

![alt text](/images/Surface%20Pro%20View.png)

## Input Form Control Validations

Multiple Already exists validation error

![alt text](images/Multiple%20already%20exists%20-%20validation.png)

Other Boundary condition validations for Max number and Multiple entries

![alt text](/images/Maxnumber%20-%20validation%20of%20minimum%20number.png)

![alt text](/images/Maxnumber%20-%20validation%20of%20maximum%20number.png)

![alt text](/images/Add%20Multiple%20-%20validation%20of%20minimum%20number.png)

![alt text](/images/Add%20Multiple%20-%20validation%20of%20maximum%20number.png)

![alt text](/images/Edit%20Multiple%20-%20validation%20of%20minimum%20number.png)

![alt text](/images/Add%20Multiple%20-%20validation%20of%20maximum%20number.png)