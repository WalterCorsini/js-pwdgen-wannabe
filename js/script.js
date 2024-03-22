// ask name and save in variable
const userName = prompt("Qual'è il tuo Nome?"); //string
// control string to console
console.log(userName, typeof userName);

// ask surname and save in variable
const userSurname = prompt("Qual'è il tuo Cognome?"); //string
// control string to console
console.log(userSurname, typeof userSurname);

// ask color and save in variable
const userColor = prompt("Qual'è il tuo colore preferito?"); //string
// control string to console
console.log(userColor, typeof userColor);

// generate random number betwenn 0-100
const userNumber =  Math.floor(Math.random()*100)+1; //number
// control string to console
console.log(userNumber, typeof userNumber);

// create message
const text="Questa è la tua password!"
console.log(text, typeof text);

// show message
document.getElementById("title").innerHTML=text;

// create password
const userPsw =userName + userSurname + userColor + userNumber; //string

//show password
document.getElementById("password").innerHTML=userPsw;