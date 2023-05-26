const arr = [];
const btnElement = document.querySelector(".btn");
const nameElement = document.querySelector(".name");
const emailElement = document.querySelector(".email");
const telElement = document.querySelector(".tell");
const addesslElement = document.querySelector(".addess");
const agelElement = document.querySelector(".age");
const tableBody = document.querySelector("tbody");

btnElement.addEventListener("click", function () {
  let upName = nameElement.value;
  let upEmail = emailElement.value;
  let upTell = telElement.value;
  let upAddess = addesslElement.value;
  let upAge = "";
  if (agelElement.checked == true) {
    console.log(agelElement);
    upAge = agelElement.value;
  } else {
    upAge = "Nữ";
  }

  //   console.log({ upName, upEmail, upTell, upAddess, upSex });
  let Ojb = {
    name: upName,
    email: upEmail,
    tell: upTell,
    address: upAddess,
    age: upAge,
  };
  arr.push(Ojb);
  console.log(arr);

  tableBody.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${i + 1}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].tell}</td>
    <td>${arr[i].address}</td>
    <td>${arr[i].age}</td>
    <td>
      <button>Edit</button>
      <button>Delete</button>
    </td>
    <td></td>
  `;
    tableBody.appendChild(newRow);
  }

  nameElement.value = "";
  emailElement.value = "";
  telElement.value = "";
  addesslElement.value = "";
});
