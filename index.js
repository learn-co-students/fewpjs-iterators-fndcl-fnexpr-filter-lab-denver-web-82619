// Code your solution here
function findMatching(drivers, string){
    let newString = string.toLowerCase()
    let list = drivers.filter(driver => {  
        return driver.toLowerCase() === newString
    })
    return list
}

function fuzzyMatch(drivers, string){
    let fuzzy = drivers.filter(driver => {
        return driver.startsWith(string)
    })
    return fuzzy
}

function matchName(drivers, string){
    let match = drivers.filter(driver => {
        return driver.name === string
    })
    return match
}

