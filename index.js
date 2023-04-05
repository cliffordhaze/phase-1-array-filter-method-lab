// Code your solution here

//const drivers = [`Bobby`, `Sammy`, `Sally`, `Annette`, `Sarah`, `Bobby`]

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
}

//const result = words.filter(word => word.length > 6);

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string))
}

//const startsWithN = countries.filter((country) => country.startsWith("N"));
//console.log(startsWithN);

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}

//driver is an object = { name: `Nicole`, hometown: `NJ`}
//driver.name is calling name from driver object
//string is a string = `Nicole`

