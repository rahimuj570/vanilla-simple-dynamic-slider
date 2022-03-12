// ===== Global Var and Func ======
const getElem = (idClass) => document.getElementById(idClass);
let i = 0;
let arr;

// ======= Add More Handler ========
getElem("addBtn").addEventListener("click", () => {
  const inputContainer = getElem("input-container");
  const input = document.createElement("div");
  input.classList.add("input");
  input.innerHTML = `
  <input class="input-url" placeholder="URL of ${++i} number Image" type="text" />
  <button onclick="clearInput(event)" id="clear-btn" title="Clear">X</button><i onclick="deleteInput(event)" id="delete-btn" title="Delete" class="fa-solid fa-trash-can"></i>`;
  // input.setAttribute("placeholder", `URL of ${++i} number image`);
  inputContainer.appendChild(input);
});

// ======= Ready Handler ========
getElem("readyBtn").addEventListener("click", () => {
  let errorId = 0;
  arr = [];
  const inputs = document.getElementsByClassName("input-url");
  for (const input of inputs) {
    errorId++;
    if (input.value) {
      arr.push(`${input.value}`);
      location = "slider.html";
    } else {
      alert(`Please Input URl of ${errorId} Number Image or Remove It.`);
    }
  }
  setLocal(arr);
});

// ======= Clear Input Handler ======
const clearInput = (event) => {
  event.target.parentNode.firstElementChild.value = "";
};

// ======= Clear Input Handler ======
const deleteInput = (event) => {
  console.log(event.target.parentNode.remove());
};

// ======== Set Local Storage =====
const setLocal = (data) => {
  const stringify = JSON.stringify(data);
  return localStorage.setItem("slider", stringify);
};

// ======== get Local Storage =====
const getLocal = () => localStorage.getItem("slider");
