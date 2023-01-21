const convertBtn = document.getElementById("convert-btn");
const mainBtm = document.querySelector(".main-bottom");

convertBtn.addEventListener("click", function () {
  let inputVal = document.getElementById("input-val").value;
  if (isNaN(inputVal)) {
    alert("Must be a number");
  } else {
    mainBtm.innerHTML = "";
    convertLength(inputVal);
    convertVol(inputVal);
    convertWeigth(inputVal);
  }
});

function convertLength(inputVal) {
  let feetCalc = inputVal * 3.281;
  let meterCalc = inputVal / 3.281;

  mainBtm.innerHTML += `<card class="cards">
  <h4>Length: (Meter/feet)</h4>
  <p>${inputVal} meters = ${feetCalc.toFixed(
    3
  )} feet | ${inputVal} feet = ${meterCalc.toFixed(3)} meters</p></card>`;
}

function convertVol(inputVal) {
  let litCalc = inputVal / 0.264;
  let galCalc = inputVal * 0.264;

  mainBtm.innerHTML += `<card class="cards">
  <h4>Volume: (Liters/Gallons)</h4>
  <p>${inputVal} liters = ${galCalc.toFixed(
    3
  )} galons | ${inputVal} gallons = ${litCalc.toFixed(3)} liters</p></card>`;
}

function convertWeigth(inputVal) {
  let kiloCalc = inputVal / 2.204;
  let poundCalc = inputVal * 2.204;

  mainBtm.innerHTML += `<card class="cards">
  <h4>Mass: (Kilos/Pounds)</h4>
  <p>${inputVal} kilos = ${poundCalc.toFixed(
    3
  )} pounds | ${inputVal} pound = ${kiloCalc.toFixed(3)} kilos</p></card>`;
}
