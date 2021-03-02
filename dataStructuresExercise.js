// Data Structures Exercise

// 1a
const jedi = [];

// 1b
jedi[jedi.length] = "Luke";
// console.log(jedi);

// 1c
jedi.push("Obi-Wan Kenobi");
// console.log(jedi);

// 1d
jedi.unshift("Yoda");
// console.log(jedi);

// 1e
console.log(jedi.slice(1,2));

// 1f
jedi.pop();
// console.log(jedi);

// 1g
jedi.shift();
// console.log(jedi);

// 2a
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

// 2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// 2d
console.log(starWarsVillians.slice(0, 2));

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

// 3b
console.log(droids["astromech"]);

// 3c
console.log(droids.protocol);

// 3d
droids["assassin"] = "IG-11";
console.log(droids);

// BONUS

// 4
console.log(starWarsVillians);

// 5
console.log(starWarsVillians.slice(-4,-3));

// 6a