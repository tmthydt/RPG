"use strict";

let userName = undefined;
let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;
let userDamage = 0;
let grantDamage = 0;

let game = prompt("Shall we play a game with thee Almighty Grant?");
if (game === "yes") {
  let userName = prompt("Choose your name");
  while (grantWins < 1 && userWins < 3){
    if (userHealth > 0 && grantHealth > 0) {
    let userDamage = Math.floor(Math.random() * 2 + 1);
    let grantDamage = Math.floor(Math.random() * 2 + 1);
    userHealth = userHealth - userDamage;
    grantHealth = grantHealth - grantDamage;
    console.log(`${userName} is at ${userHealth} HP.`)
    console.log(`Thee Almighty Grant has ${grantHealth}HP.`);
    if (grantHealth <= 0) {
        userWins++;
        console.log(`${userWins} won for ${userName}.`)
        grantHealth = 10;
    }   if (userHealth <= 0) {
        console.log(`Game Over, ${userName}`);
        break;
    }   if (userWins === 3) {
        console.log(`${userName} is the Champ!`);
    }
        
   }
  }
  }
