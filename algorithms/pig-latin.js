function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex)
    console.log(myConsonants !== null ?
    str.replace(consonantRegex, "")
    .concat(myConsonants)
    .concat("ay")
    :
    str.concat("way"))
    
 }
 
 translatePigLatin("california");