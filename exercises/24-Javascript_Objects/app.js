var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
    significantOther: person2   //Object, yes, the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};
var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

var family = {
    lastName: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


family.members[0].luckyNumbers[3] = 33;

function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  anArray.push(person3);
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  for(let i = 0; i < anArray.length; i++){
    let member = anArray[i];
    //let member = family.members[i];
    for(let x = 0; x < member.luckyNumbers.length; x++){
        sumOfAllLuckyNumbers += member.luckyNumbers[x];
    }
     
  };
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
