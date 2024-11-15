let witchPosition = 0
let griffonPosition = 50
const grimPosition = 51

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}
  console.log("la sorcière lance une première fois le dé, elle avance de : " + rollDice() + " cases.");



function pickChanceCard() {
    const choice = Math.random() < 0.5; 
    if (choice) {
        console.log("La sorcière lance un sort et fait reculer le griffon de 3 cases !");
        griffonPosition -= 3;
    } else {
        console.log("La sorcière s'enfuit et avance d'une case !");
        witchPosition += 1;
    }
}



function startGame() {
    while (witchPosition < grimPosition && griffonPosition > 0) {   
        let sorciere = rollDice();
        witchPosition += sorciere;
        console.log(`La sorcière avance de ${sorciere}. Position actuelle: ${witchPosition}`);

       
        if (witchPosition >= griffonPosition) {
            console.log("La sorcière a croisé le griffon !");
            pickChanceCard(); 
            break; 
        }

     
        let griffon = rollDice();
        griffonPosition -= griffon;
        console.log(`Le griffon avance de ${griffon}. Position actuelle: ${griffonPosition}`);

        
        if (griffonPosition <= witchPosition) {
            console.log("Le griffon a croisé la sorcière !");
            let witchScore = rollDice();
            console.log(`La sorcière lance le dé et obtient: ${witchScore}`);
            if (witchScore > 3) {
                console.log("La sorcière tire une carte Chance !");
            } else {
                witchPosition -= 2;
                console.log("La sorcière recule de 2 cases. Position actuelle: " + witchPosition);
            }
            break;
        }
    }

    
