// Variable para capturar el boton
const btn01 = document.getElementById("btnCalculate");
btn01.addEventListener("click", calculateGrades);

const usernameField = document.getElementById("txt01");
const grade01Field = document.getElementById("txt02");
const grade02Field = document.getElementById("txt03");
const grade03Field = document.getElementById("txt04");

const txtMessageField = document.getElementById("txtS");



function calculateGrades(){
  console.log("Boton clickeado!");
  let username = usernameField.value;
  let grade01 = grade01Field.value;
  let grade02 = grade02Field.value;
  let grade03 = grade03Field.value;

  let average = Number(grade01)+Number(grade02)+Number(grade03);
  average = average/3;

  console.log(`Welcome ${username}`);
  console.log(`Your final grade is ${average}`);

  txtMessageField.textContent = `Welcome ${username} \nYour final grade is ${average}`;

}