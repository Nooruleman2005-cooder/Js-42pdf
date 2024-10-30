//    // Assignment NO # 21-25
//  Q no : 1
// var firstName = prompt("Enter Your First Name!").toUpperCase();
// var lastName = prompt("Enter Your Last Name!").toUpperCase();
// var fullName = firstName + " " + lastName;
// alert(fullName + " " + "HAVE A NICE DAY!");
//  Q no : 2
// var userInput = prompt("Enter Your Favourite Mobile Phone Model!");
// document.write("<h1>" + "My Favourite Phone Is : " + userInput + "</h1>");
// document.write("<h1>" + "Lenght Of String : " + userInput.length + "</h1>");
//  Q no : 3
// var str = "Pakistani";
// var index =str.indexOf('n');
// document.write("<h1>" + "String : " + str + "</h1>");
// document.write("<h1>" + "Index Of 'n' : "+ index + "</h1>" );
//  Q no : 4
// var str = "Hello World";
// var lastIndex = str.lastIndexOf('l');
// document.write("<h1>" + "String : " + str + "</h1>");
// document.write("<h1>" + "LastIndex Of 'l' : "+ lastIndex + "</h1>"); 
//  Q no : 5
// var str = "Pakistani";
// document.write("<h1>" + "String : " + str + "</h1>");
// document.write ("<h1>" + "Character at index 3 : " + str[3] + "</h1>")
//  Q no : 6
// var firstName = prompt("Enter Your First Name!").toUpperCase();
// var lastName = prompt("Enter Your Last Name!").toUpperCase();
// var fullName = firstName.concat(lastName);
// alert(fullName + " " + "HAVE A NICE DAY!");
//  Q no : 7
// var city = "Hyderabad";
// document.write("<h1>" + "City : " + city + "</h1>");
// document.write("<h1>" + "After Replacement : " + city.replace("Hyder","Islam") + "</h1>")
//  Q no : 8
// var mess = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<h1>" + "Message : " + mess + "</h1>");
// document.write("<h1>" + "After Replacement : " + mess.replace( /and/gi , "&") + "</h1>");
//  Q no : 9
// var value = '472';
// document.write("<h1>" + "Value : " + value + "</h1>");
// document.write("<h1>" + "Type : " + typeof value + "</h1>");
// value = Number(value);
// document.write("<h1>" + "Value : " + value + "</h1>");
// document.write("<h1>" + "Type : " + typeof value + "</h1>");
//  Q no : 10
// var userInput = prompt("Enter Your Favourite Fruit!");
// document.write("<h1>" + "User Input : " + userInput + "</h1>");
// document.write("<h1>" + "Upper Case : " + userInput.toUpperCase() + "</h1>");
//  Q no : 11
// var userInput = prompt("Enter Your Favourite Lanuage!");
// document.write("<h1>" + "User Input : " + userInput + "</h1>");
// userInput = userInput.toLowerCase();
// var words = userInput.split(" ");
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// var titleCaseInput = words.join(" ");
// document.write("<h1>" + "Title Case : " + titleCaseInput + "</h1>");
//  Q no : 12
// var num = 35.36;
// document.write("<h1>" + "Number : " + num + "</h1>");
// num = num.toFixed();
// document.write("<h1>" + "Result : " + num+36 + "</h1>");
//  Q no : 13;
// var userInput =prompt("Enter Your Username!");
// document.write("<h1>" + "Username: " + userInput + "</h1>");
// var specialChar = false;
// for(var i = 0; i < userInput.length; i++ ){
//     var charCode = userInput.charCodeAt(i);
//     if((!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && !(charCode >= 48 && charCode <= 57)) ){
//         specialChar =true;
//         break;
// }
// }
// if (specialChar) {
//     alert("Invalid username! Special characters are not allowed.");
// }
// else{
//     document.write("<h1>" + "Welcome, " + userInput + " You Are Sign In! " + "</h1>");
// }
//  Q no : 14
// var bakery = ["cakes","cookies","pasteries","chips","paties"];
// var userInput = prompt("Welcome To Noor Bakery. What Do You Want!").toLowerCase()
// var foundItem = false;
// var index;
// userInput = userInput.toLowerCase();
// for (var i = 0; i < bakery.length; i++) {
//     if (bakery[i].toLowerCase() === userInput) {
//         foundItem = true;
//         index=i;
//         break;
//     }
// }
//     if(foundItem){ 
//         document.write("<h1>" + bakery[i].charAt(0).toUpperCase()  + bakery[i].slice(1)  + " is avalibale at index " + index + " in our bakery." + "</h1>")
//     }
//     else{
//         document.write("<h1>" + "We are sorry. " + userInput.charAt(0).toUpperCase()  + userInput.slice(1)  + " is not avalibale in our bakery." + "</h1>")
//     }
//  Q no : 15
// var passWord = prompt("Enter Your Password!");
// var validPass = true;
// if(passWord.length !== 6){
//     alert("Password must be exactly 6 characters long.");
//     validPass = false;
// }
// var firstCharCode = passWord.charCodeAt(0);
// if (!(firstCharCode >= 65 && firstCharCode <= 90) && !(firstCharCode >= 97 && firstCharCode <= 122)){
//       alert("The first character must be an alphabet.")
//     validPass = false;
// }
// for(var i = 0; i < passWord.length; i++ ){
//     var charCode = passWord.charCodeAt(i);
//     if((!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && !(charCode >= 48 && charCode <= 57)) ){
//         alert("Password can only contain alphabets and numbers.");
//         validPass = false;
//         break;
//     }
// }
// if (validPass) {
//     document.write("<h1>Password is valid!</h1>");
// } else {
//     document.write("<h1>Invalid password.</h1>");
// }
//  Q no : 16
// var university = "University Of Teachnology" ;
// var arr = university.split("");
// var vertical = arr.join("<br>");
// document.write("<h1>" + university + "<br>" + "</h1>")
// document.write("<h1>" + vertical + "</h1>");
//  Q no : 17
// var userInput = prompt("Enter Your City!").toUpperCase();
// document.write("<h1>" + "Userinput: " + userInput + "</h1>")
// var lastIndex = userInput.charAt(userInput.length-1);
// document.write("<h1>" + "Last Character Of Input: " + lastIndex + "</h1>");
//  Q no : 18
// var text = "The quick brown fox jumps over the lazy dog.";
// var word = "the";
// var sent = text.toLowerCase();
// var index = -1;
// var count = 0;
// document.write("<h1>" + "Text: " + text + "</h1>"); 
// for(var i = 0; i < sent.length; i++){
//     index = sent.indexOf(word, index + 1);
//     if (index === -1) break;
//     count++;
// }
// document.write("<h1>" + "There are " + count + " occurance(s) of word 'the'." + "</h1>");
//     // Assignment NO # 26-30
//  Q no : 1
// var user = prompt("Enter the positive integer!");
// document.write("<h1>" + "Number: " + user + "</h1>");
// document.write("<h1>" + "Round Off Value: " + Math.round(user) + "</h1>");
// document.write("<h1>" + "Floor Value: " + Math.floor(user) + "</h1>");
// document.write("<h1>" + "Ceil Value: " + Math.ceil(user) + "</h1>");
//  Q no : 2
// var user = prompt("Enter the negative integer!");
// document.write("<h1>" + "Number: " + user + "</h1>");
// document.write("<h1>" + "Round Off Value: " + Math.round(user) + "</h1>");
// document.write("<h1>" + "Floor Value: " + Math.floor(user) + "</h1>");
// document.write("<h1>" + "Ceil Value: " + Math.ceil(user) + "</h1>");
//  Q no : 3
// var num = +prompt("Enter the number!");
// document.write("<h1>" + "The absolute value of " + num + " is " + Math.abs(num) + "</h1>");
//  Q no : 4
// var randomNum = Math.random() * 10 ;
// document.write("<h1>" + "Random dice value: " + Math.floor(randomNum)  + "</h1>");
//  Q no : 5
// var randomNum = Math.floor(Math.random() * 10) +1 ;
// if (randomNum % 2 === 0){
// document.write("<h1>" + "Number: " + randomNum + "</br>" +"Random coin value: " + "Head" + "</h1>");
// }
// else{
//     document.write("<h1>" + "Number: " + randomNum + "</br>" + "Random coin value: " + "Tail" + "</h1>");
// }
//  Q no : 6
// var randomNum = Math.random() *100;
// document.write("<h1>" + "Random number between 1 and 100 : " + Math.floor(randomNum) + "</h1>");
// q no : 7
// var userWeight = prompt("Enter your weight in kilograms!");
// userWeight = parseFloat(userWeight);
// document.write("<h1>" + "The weight of user is : " + parseFloat(userWeight) +  " kilograms " + "</h1>");
//  Q no : 8
// var randomNum = Math.random() * 10;
// var correctNum = Math.floor(randomNum) + 1;
// var userNum = + prompt("Guess the number between 1 and 10!");
// if(userNum === correctNum){
//     alert("Congratulations! You Won.")
// }
// else if (userNum === correctNum + 1 || userNum === correctNum-1){
//     alert("Almost there! the correct number is : " + correctNum)
// }
// else{
//     alert("You lose! the correct number is : " + correctNum )
// }
//    ///// Assignment NO # 31-34    
//  Q no : 1
// var currentDate = new Date();
// document.write("<h1>" +currentDate + "</h1>");
//  Q no : 2
// var month = ["January", "Febuary" , "March", "April", "May", "June","July ","August", "September", "October", "November" ,"December"]
// var currentDate = new Date();
// var monthIndex = currentDate.getMonth();
// document.write("<h1>" + "Current Month : " + month[monthIndex] + "</h1>");    
//  Q no : 3
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date();
// var dayIndex = currentDate.getDay();
// alert("Today is " + day[dayIndex]);    
//  Q no : 4
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date();
// var dayIndex = currentDate.getDay();
// var days = day[dayIndex];
// if(dayIndex === 0 || dayIndex === 6){
//     alert("Its fun day!")
// }
// else{
//     alert("Its busy day!")
// }
//  Q no : 5
// var currentDate = new Date();
// var date = currentDate.getDate();
// if(date < 16 ){
//     alert("First fifteen days of the month!")
// }
// else{
//    alert("Last days of the month!")
// }
//  Q no : 6
// var currentDate = new Date();
// document.write("<h1>" + "Current Date : " +currentDate + "</h1>");
// var allmiliSeconds = currentDate.getTime();
// document.write("<h1>" + "Elapsed miliseconds since Jan. 1,1970 : " + allmiliSeconds + "</h1>");
// var allMinutes = allmiliSeconds/1000/60;
// document.write("<h1>" + "Elapsed minutes since Jan. 1,1970 : " + allMinutes + "</h1>");
//  Q no : 7
// var currentDate = new Date();
// var hours = currentDate.getHours();
// if(hours <= 12){
// alert("Its AM")
// }
// else{
//     alert("Its PM")
// }
// Q no : 8 
// var currentDate = new Date();
// document.write("<h1>" + "Current Date : " +currentDate + "</h1>");
// var laterDate = new Date("31,Octobar,2024")
// document.write("<h1>" + "Later Date : " +laterDate + "</h1>");
//  Q no : 9
// var today = new Date();
// var past = new Date("18,june,2015");
// var miliSecToday = today.getTime();
// var miliSecPastDate = past.getTime();
// var difference = miliSecToday - miliSecPastDate;
// var dayDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
// alert(dayDifference + " days have passed since 1st Ramadan, 2015");
//  Q no : 10
// var currentDate = new Date();
// var pastYear = new Date("2015");
// var miliSecToday = currentDate.getTime();
// var miliSecPastDate = pastYear.getTime();
// var timeDifference = miliSecToday - miliSecPastDate;
// var secondsPassed =Math.floor(timeDifference / 1000);
// document.write("<h1>" + "On reference date : " +currentDate + " " + secondsPassed +" second had passed since beginning of 2015. " +"</h1>");
//  Q no : 11
// var currentDate = new Date();
// var hourAgo = new Date(currentDate.getTime()-1000*60*60);
// document.write("<h1>" + "Current Date : " +currentDate + " 1 hour ago," + hourAgo +"</h1>");
//  Q no : 12
// var currentDate = new Date();
// var hunYearAgo = new Date();
// hunYearAgo.setFullYear(currentDate.getFullYear() -100);
// document.write("<h1>" + "Current Date : " +currentDate + " 100 year ago, it was " + hunYearAgo +"</h1>");
//  Q no : 13
// var age = +prompt("Enter you age!");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("<h1>Your age is: " + age + "</h1>");
// document.write("<h1>Your birth year is: " + birthYear + "</h1>");
//  Q no : 14
// var custName = "ABC Customer";
// var nMonth = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "July", "Aug","Sep","Oct", "Nov", "Dec"]
// var currDate = new Date();
// var currMonth = currDate.getMonth();
// var nUnit = 500;
// var pChar = 20;
// var nAmount = pChar*nUnit;
// var lChar = 500;
// var gAmount = lChar+nAmount
// document.write("<h1>" + "K-Electric Bill :-" +  "</br>" + "Customer Name : " +custName + "</br>" + "Month : " + nMonth[currMonth] + "</br>" + "Number Of Unites : " + nUnit + "</br>" + "Charges Per Unites : " + pChar + "</br>" +"Net Amount Payable (with in due date) : " + nAmount + "</br>" + "Late Payment Charges : " + lChar + "</br>" +"Gross Amount Payable (after due date) :" + gAmount + "</h1>") 
//  // Assignment NO # 35-38
//  Q no : 1
// function currDate(Date){
//     console.log("Current Date : " + Date)
// } 
// currDate(new Date());
//  Q no : 2
// function greet(firstName,lastName){
//     console.log("HELLO" + " " +firstName + " " + lastName)
// }
// greet(prompt("Enter Your First Name!").toUpperCase() , prompt("Enter Your Last Name!").toUpperCase());
//  Q no : 3
// function num(fNum, lNum){
//   return fNum+lNum
// }
// var sum = num(+prompt("Enter the first number!"),+prompt("Enter the last number!"));
// console.log("The sum of these number : " + sum);
//   Q no : 4
// function calculate(num1,operator,num2) {
//     if (isNaN(num1)){
//         num1= 0
//     }
//     if (isNaN(num2)){
//         num1= 0
//     }
//     var num;
//     switch (operator) {
//         case '+':
//             num = num1 + num2;
//             alert("Addition Succecfully!");
//             break;
//         case '-':
//             num = num1 - num2;
//             alert("Subtraction Succecfully!");
//             break;
//         case '*':
//             num = num1 * num2;
//             alert("Multiplication Succecfully!");
//             break;
//         case '/':
//             num = num1 / num2;
//             alert("Diviition Succecfully!");
//             break;
//         default:
//              alert('Invalid Prompt!');
//              num = 0;
//     }
//     return num;
// }
// var userInput = parseFloat(prompt("Enter the start number!"));
// var userInput1 = prompt("Enter an operator!");
// var userInput2 = parseFloat(prompt("Enter the last number!"));
// num = calculate(userInput,userInput1,userInput2);
// document.write("<h1>" + "Calcultor : " + userInput + " " + userInput1 + " " + userInput2 + " = " + num + "</h1>");
//  Q no : 5
// function square(num){
//     return num*num
// }
// var userInput = parseFloat(prompt("Enter the number do you want to square!"));
// num = square(userInput);
// document.write("<h1>" + "Square of " + userInput + " : " + num + "</h1>");
//  Q no : 6
// function factorial(num){
//     if(isNaN(userInput)){
//         userInput = 0
//     }
//     if(num<0){
//         return "Factorial is not defined for negative numbers.";
//     }
//     if(num === 0){
//         return 1;
//     }
//     var number = 1;
//     for(var i = 1 ; i <= num ; i++ ){
//         number = number*i;
//     }
//     return number;
// }
// var userInput = parseFloat(prompt("Enter the number to find its factorial!"));
//  number = factorial(userInput);
// document.write("<h1>" + "Factorial of " + userInput + " : " + number + "</h1>");
//  Q no : 7
// function counting(starting,ending){
//     for(var i = starting; i <= ending; i += 10){
//         for(var j = i; j < i + 10; j++ ){
//             document.write( " " + j + " ");
//         }
//         document.write("</br>");
//         }
// }
// var starting = +prompt("Enter The Start No!");
// var ending = +prompt("Enter The End No!");
// counting(starting,ending);
//  Q no : 8
// function calculateHypotenuse(){
//     var base = +prompt("Enter Base value ...")
//     var perpendicular = +prompt("Enter Perpendicular value ...")
    
//         function calculateSquare(num) {
    
//             return num + num
//         }
    
//     var hypotenuseSquare = calculateSquare(base) * calculateSquare(perpendicular)
//     return hypotenuse = calculateSquare(hypotenuseSquare)
// }
//     var result = calculateHypotenuse()
//     document.write("<h1>" + "The result is : " + result + "</h1>")
//  Q no : 9
// function area(width,height){
//     return width*height;
// }
// var calculate = area( 200,300);
// document.write("<h1>"+ "The Area of these : " + calculate + "</h1>")
//  Qno : 10
// function palindrom(word){
//     var lowerCase = word.toLowerCase();
//     var reversedWord = lowerCase.split('').reverse().join('');
//     if(lowerCase===reversedWord){
//         return "This is palindrome!."
//     }
//     else{
//         return "This is not palindrome!"
//     }
// }
// var Userinput = prompt("Enter a palindrome word!");
// var result = palindrom(Userinput);
// document.write("<h1>" + "Word : " + Userinput + "<br>" + "Result : " + result + "</h1>")
//  Q no : 11
// function sent(String){
//     var words = String.split(" ");
//     for(var i = 0 ; i < words.length ; i++){
//         words[i]= words[i].charAt(0).toUpperCase() + words[i].slice(1)
//     }
//     return words.join(" ");
// }
// var user = prompt("Enter a sentence!").toLowerCase();
// var result = sent(user);
// document.write("<h1>" + " User : " + user + "<br>" + "Result : " + result);
//  Q no : 12
// function sent(String){
//     var words = String.split(" "); 
//     var longestWord = "";
//     for(i = 0 ; i < words.length; i++){
//         if (words[i].length  > longestWord.length ){
//          longestWord=words[i];
//         }
//     }
//     return longestWord;
// }
// var result = sent("Web Developement Toturial").toUpperCase();
// document.write("<h1>" + "Result : " + result);
//  Q no : 13
// function sent(String,Letter){
//     var count = 0;
//     var upperString = String.toUpperCase();
//     var upperLetter = Letter.toUpperCase();
//     for(i = 0; i < upperString.length; i++){
//         if(upperString[i]===upperLetter){
//             count++;
//         }
//     }
//     document.write("<h1>" + "Sample Argement: " + String + " , " + Letter+ "</h1>");
//     document.write("<h1>" + "Letter " + Letter + " , " +" occure " +count + " times." + "</h1>");
// }
// var user = prompt("Enter the letter in this yo find the occurrense!'JsResources.Com'")
// sent("JsResources.Com",user);
//  Q no : 14
// function calculate(circumfernce,area){
//     var cir = 2*3.142*user;
//     var are = (3.142)*(user*user);
//     document.write("<h1>" + "Circumfernce of circle : " + cir + "<br>" +  "Area of circle : " + are + "</h1>")
// }
// var user = +prompt("Enter a value of radius!");
// var result = calculate(user);
//  // Assignment NO # 38-42
//  Q no : 1
// function power(a,b){
//     var result = 1;
//     for(var i = 0; i<b;i++){
//         result *= a;
//     }
//     return result;
// }
// var user = prompt("Enter the value of a!");
// var user1 = prompt("Enter the value of b!")
// var output = power(user,user1);
// document.write("<h1>" + "The value of a is : " + user + "<br>" + "The value of b is : " + user1 + "<br>" + "The calculated values are : " + output + "</h1>") ;
//  Q no : 2
// function leapYear(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         return "Its a leap year!";
//     }
//     else{
//         return "Its not a leap year!" ;
//     } 
// }
// var user = +prompt("Enter a year do you want to check ita a leap year or not!")
// var result = leapYear(user);
// document.write("<h1>" + "The user input is : " + user + "<br>" + "The result is : " + result + "</h1>");
//  Q no : 3
// function length(){
//     var a = +prompt("Enter a value of a!");
//     var b = +prompt("Enter a value of b!");
//     var c = +prompt("Enter a value of c!");
//     function valueOfS(a,b,c){
//         return (a+b+c)/2; 
//     }
//     var s = valueOfS(a,b,c);
//     var area = s*((s-a)*(s-b)*(s-c));
//      return area; 
// }
// var result = length();
// document.write("<h1>" + "The area of traingle is : " + result + "</h1>" );
//  Q no : 4
// function maRks() {
//     var eng = parseFloat(prompt("Enter the number of English subject!"));
//     var urdu = parseFloat(prompt("Enter the number of Urdu subject!"));
//     var math = parseFloat(prompt("Enter the number of Math subject!"));
//     return [eng, urdu, math];
// }
// function average(marks) {
//     var sum = marks[0] + marks[1] + marks[2];
//     return sum / 3;
// }
// function percentage(marks, totalMarksPerSub) {
//     var sum = marks[0] + marks[1] + marks[2];
//     var totalMarks = totalMarksPerSub * 3;
//     return (sum / totalMarks) * 100;
// }
// var marks = maRks();
// var ave = average(marks);
// var per = percentage(marks, 100);
// document.write("<h1>Average Marks: " + ave.toFixed(2) + "</h1>");
// document.write("<h1>Percentage: " + per.toFixed(2) + "%</h1>");
//  Q no : 5
// function indexOf(){
//     var sent = "My favourite car color is black and it is very beautiful.";
//     document.write("<h1>" + "Sentence : " + sent + "</h1>");
//     document.write("<h1>" + "The indexOf 'is' : " + sent.indexOf("is")+ "</h1>");
// }
// indexOf();
//  Q no : 6
// function sent(){
//     var sent = "My favourite car color is black and it is very beautiful.";
//     var delVowel = sent.replace(/[aeiouAEIOU]/g,"");
//     document.write("<h1>" + "Sentence : " + sent + "</h1>");
//     document.write("<h1>" + "Result : " + delVowel + "</h1>");
// }
// sent();
//  Q no : 7
// function sent(){
//     var sent = "Please resd this application and give me gratuity."
//     document.write("<h1>" + "Sentence : " + sent + "</h1>");
//     for(var i = 0 ; i< sent.length; i ++){
//         var vowel = sent[i].toLowerCase();
    
//     switch (vowel){
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             document.write("Vowel '" + sent[i] + "' found at position: " + i + "<br>");
//             break;
//     }
// }
// }
// sent();
// function sent() {
//     var sent = "Please read this application and give me gratuity.";
//     document.write("<h1>Sentence: " + sent + "</h1>");
//     var vowelCount = [0, 0, 0, 0, 0];
//     for (var i = 0; i < sent.length; i++) {
//         var char = sent[i].toLowerCase();
//         switch (char) {
//             case "a":
//                 vowelCount[0]++;
//                 break;
//             case "e":
//                 vowelCount[1]++;
//                 break;
//             case "i":
//                 vowelCount[2]++;
//                 break;
//             case "o":
//                 vowelCount[3]++;
//                 break;
//             case "u":
//                 vowelCount[4]++;
//                 break;
//         }
// }
//     document.write("<h1>" + "Vowel Occurrences: " + "<br>"+ "A : " + vowelCount[0] + "<br>"+ "E : " + vowelCount[1] + "<br>"+ "I : " + vowelCount[2]+ "<br>"+ "O : " + vowelCount[3] + "<br>" +"U : " + vowelCount[4] + "<br>"+ "</h1>");

// }

// sent();
//  Q no : 8
// function kmToMeters(km) {
//     return km * 1000;
// }
// function kmToFeet(km) {
//     return km * 3280.84;
// }
// function kmToInches(km) {
//     return km * 39370.1;
// }
// function kmToCentimeters(km) {
//     return km * 100000;
// }
// function convertDistance() {
//     var km = prompt("Enter distance in km:");
//     var meters = kmToMeters(km);
//     var feet = kmToFeet(km);
//     var inches = kmToInches(km);
//     var centimeters = kmToCentimeters(km);

//     document.write("<h1>" + " Km is equal to : " + km + "<br>" + "Meters : " + meters  + "<br>"+ "Feet : " + feet + "<br>" + "Inches : " + inches + "<br>" + "Centimeter : " + centimeters + "</h1>");
// }
// convertDistance();
//  Q no : 9
// function pay(hoursWorked) {
//     var  overtimeRate = 12.00;
//     var  standardHours = 40;
    
//     if (hoursWorked <= standardHours) {
//       return 0;
//     } else {
//       var overtimeHours = hoursWorked - standardHours;
//       return overtimeHours * overtimeRate;
//     }
//   }
  
//   function EmployeePay() {
//     var  hoursWorked = prompt("Enter hours worked:");
//     var  overtimePay = pay(hoursWorked);
    
//     document.write("<h1>" + "Userinput : " + hoursWorked + "<br>" + "Overtime pay: Rs." + overtimePay + "</h1>");
//   }
//   EmployeePay();
//  Q no : 10
// function breakdownAmount(amount) {
//     var hundreds = 0;
//     var fifties = 0;
//     var tens = 0;
//     while (amount > 0) {
//         if (amount >= 100) {
//             hundreds++;
//             amount -= 100;
//         } else if (amount >= 50) {
//             fifties++;
//             amount -= 50; 
//         } else if (amount >= 10) {
//             tens++;
//             amount -= 10;
//         } else {
//             break;
//         }
// }
// document.write("<h1>" + "Breakdown of Amount : " + userInput + "<br>" + "Hundreds: " + hundreds + "<br>" +"Fifties: " + fifties + "<br>"+ "Tens: " + tens + "<br>" +"</h1>");
// }
// var userInput = prompt("Enter an amount:");
// var amount = parseInt(userInput, 10);
// breakdownAmount(amount);
