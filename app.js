
//list of past positions - name, title, desc of what did. Use function displayPosition that takes the 3 params formatted like example
//list of skills (with some BAM:)  using function displaySkill with input params for skill and boolean cool that prints BAM: before cool skills

let name = "kim gawlowicz";
let uName = name.toUpperCase();
console.log("Name: " + uName);
console.log("Career: Programmer ");
console.log("Description: I like computers (usually) ");

console.log("\nMy Interests: ");
let myInterests = ["Reading", "Cooking", "Listening to Music"]
for (let i = 0; i < myInterests.length; ++i){
    console.log("* " + myInterests[i]);
}

// console.log("\nMy Previous Experience: ");
// var ol = prvExp("Marvel", "Lead Actress", "Played Black Widow");
// console.log("* " + ol);
// var ol = prvExp("Google", "Assistant to Al Gore", "Helped discover the internet");
// console.log("* " + ol);
// let ol = prvExp("Regions", "Automation Engineer", "Performed automated software testing");
// console.log("* " + ol);

// function prvExp (incompany, inTitle, inDesc){
//     let outputLine = inTitle + " for " + incompany + " - " + inDesc; 
//     return outputLine
//  }

function prvExp (inCompany, inTitle, inDesc){
    let outputLine = inTitle + " for " + inCompany + " - " + inDesc ; 
    console.log("* " + outputLine);
 }

 console.log("\nMy Previous Experience: ");
 prvExp("Marvel", "Lead Actress", "Played Black Widow");
 prvExp("Google", "Assistant to Al Gore", "Helped discover the internet");
 prvExp("Regions", "Automation Engineer", "Performed automated software testing");

 console.log("\nMy Skills: ");
 displaySkill("UFT",false);
 displaySkill("Scolding children",true);
 

function displaySkill (inSkill,isCool){
    let prefix = ""
    if (isCool === true){
        prefix = "BAM: "
    }
    console.log(prefix + inSkill); 
}
 