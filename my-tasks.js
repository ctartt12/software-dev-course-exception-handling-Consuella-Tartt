const readlineSync = require('readline-sync');

// Initial Code with Bugs (modified to use readline-sync)
let animals = [];
let fees = [];
function addAnimal(name, fee) {    
                                     // Try Catch used to block the crash when a invaild name is entered
   try {
     if (!name || fee < 0) {
        throw new Error("Invalid animal name or adoption fee!");
    }
    animals.push(name);
    fees.push(fee);
   } catch (error) {
    console.log('invaild enrty please enter new pets name!');
   }
}

function listAllAnimals(){
    console.log("dog name Jeff", "cat name Jingles", "bird name pirate");
}


function getAdoptionFee(animalName) {                           //Try Catch used to block the crash and let user know their input is invaild
  try {
      let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
  } catch (error) {
    console.log( "please add name to records");
  }
}


// Main program
console.log("Welcome to the Pet Shelter System");
while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', 'list', or 'exit': ").toLowerCase();
    if (action === "exit") {
        console.log("Goodbye!");
        break;
    }
    if (action === "add") {
        let animal = readlineSync.question("Enter the animal's name: ");
        let fee = Number(readlineSync.question("Enter the adoption fee: "));
        addAnimal(animal, fee);
        console.log(`${animal} added with a fee of $${fee}.`);

    } else if (action === "fee") {
        let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
        console.log(`${animal}'s adoption fee is $${getAdoptionFee(animal)}.`);

    } else if (action === "list") {
         listAllAnimals()
    } else{console.log('please select option');} 
}

