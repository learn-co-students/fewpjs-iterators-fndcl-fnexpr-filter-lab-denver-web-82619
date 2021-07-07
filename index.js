function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => firstLetters(driver).includes(string))
}

function firstLetters(name) {
    const [foo, bar] = name.split("")
    return [foo+bar]
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
}