const getElem = (idClass) => document.getElementById(idClass);
let i = 0;
let arr = [];

// ======= Add More Handler ========
getElem("addBtn").addEventListener("click", () => {
  const inputContainer = getElem("inputs");
  const input = document.createElement("input");
  input.classList.add("input-url");
  //   input.setAttribute("id", `id-${i++}`);
  inputContainer.appendChild(input);
});

// ======= Ready Handler ========
getElem("readyBtn").addEventListener("click", () => {
  arr = [];
  const inputs = document.getElementsByClassName("input-url");
  for (const input of inputs) {
    arr.push(`${input.value}`);
  }
  console.log(arr);
});
