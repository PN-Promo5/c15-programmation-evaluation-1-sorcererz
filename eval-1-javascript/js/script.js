
/* ------------FUNCTION 1------------ */

let function1Screen1 = document.createElement("div");
let form1 = document.createElement("form");

let firstNameContainer = document.createElement("p");
let lastNameContainer = document.createElement("p");

let firstNameLabel = document.createElement("label");
firstNameLabel.textContent = "Quel est votre prénom ?";
let firstNameInput = document.createElement("input");
firstNameInput.type = "text";

let lastNameLabel = document.createElement("label");
lastNameLabel.textContent = "Quel est votre nom ?";
let lastNameInput = document.createElement("input");
lastNameInput.type = "text";

let submitForm1 = document.createElement("input");
submitForm1.type = "button";
submitForm1.value = "Ok";

let msgError = document.createElement("p");
msgError.textContent = "Veuillez remplir les deux champs";
msgError.style.color = "red";
msgError.style.display = "none";

let function1Screen2 = document.createElement("div");
function1Screen2.style.display = "none";

let welcomeMsg = document.createElement("p");

document.body.appendChild(function1Screen1);
function1Screen1.appendChild(form1);
form1.appendChild(firstNameContainer);
form1.appendChild(lastNameContainer);
firstNameContainer.appendChild(firstNameLabel);
firstNameContainer.appendChild(firstNameInput);
lastNameContainer.appendChild(lastNameLabel);
lastNameContainer.appendChild(lastNameInput);
form1.appendChild(submitForm1);
form1.appendChild(msgError);
document.body.appendChild(function1Screen2);
function1Screen2.appendChild(welcomeMsg);

// --function starts when ok is pressed-- //
submitForm1.addEventListener("click",continueForm,false);
function continueForm() {
  if (lastNameInput.value == (null || "") || firstNameInput.value == (null || "")){
    msgError.style.display = "block";
  }else {
    function1Screen1.style.display = "none";
    function1Screen2.style.display = "block";
    welcomeMsg.textContent ="Bonjour " +firstNameInput.value+" "+lastNameInput.value+" !";
  }
};



/* ------------FUNCTION 2------------ */

let function2 = document.createElement("div");
let form2 = document.createElement("form");

let monthlyBrutRow = document.createElement("p");
let monthlyNetRow = document.createElement("p");
let annualBrutRow = document.createElement("p");
let annualNetRow = document.createElement("p");

let monthlyBrutLabel = document.createElement("label");
monthlyBrutLabel.textContent = "Salaire mensuel brut";
let monthlyNetLabel = document.createElement("label")
monthlyNetLabel.textContent = "Salaire mensuel net";
let annualBrutLabel = document.createElement("label");
annualBrutLabel.textContent = "Salaire annuel brut";
let annualNetLabel = document.createElement("label")
annualNetLabel.textContent = "Salaire annuel net";

let monthlyBrutInput = document.createElement("input");
monthlyBrutInput.type = "number"

let monthlyNetInput = document.createElement("input")
monthlyNetInput.type = "number"

let annualBrutInput = document.createElement("input");
annualBrutInput.type = "number"

let annualNetInput = document.createElement("input")
annualNetInput.type = "number"

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(function2);
function2.appendChild(form2);
form2.appendChild(monthlyBrutRow);
form2.appendChild(monthlyNetRow);
form2.appendChild(annualBrutRow);
form2.appendChild(annualNetRow);
monthlyBrutRow.appendChild(monthlyBrutLabel);
monthlyBrutRow.appendChild(monthlyBrutInput);
monthlyNetRow.appendChild(monthlyNetLabel);
monthlyNetRow.appendChild(monthlyNetInput);
annualBrutRow.appendChild(annualBrutLabel);
annualBrutRow.appendChild(annualBrutInput);
annualNetRow.appendChild(annualNetLabel);
annualNetRow.appendChild(annualNetInput);


monthlyBrutInput.addEventListener("change",salaryCalculation,false);
monthlyNetInput.addEventListener("change",salaryCalculation,false);
function salaryCalculation(){
  if ((monthlyBrutInput.value = monthlyNetInput.value*1.298) == false){
    monthlyBrutInput.value = monthlyNetInput.value*1.298;
  }
//  monthlyNetInput.value = monthlyBrutInput.value/1.298;
};


/* ------------FUNCTION 3------------ */

let numbers = [1,2,3,4,5,6,7,8,9,10];

function EvenArrayNumbers(array) {
  let i = 0;
  let number;
  let arrayEvenVal = [];
  while (i < array.length) {
    number = array[i];
    i++;
    if (number % 2 === 0) {
      arrayEvenVal.push(number);
    }
  }
  return arrayEvenVal;
}

EvenArrayNumbers(numbers);
