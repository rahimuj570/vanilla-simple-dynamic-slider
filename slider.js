// ===== Global Var and Func ======
const getElem = (idClass) => document.getElementById(idClass);
let i = 0;
let arr;

// ======== Set Local Storage =====
const setLocal = (data) => {
  const stringify = JSON.stringify(data);
  return localStorage.setItem("slider", stringify);
};

// ======== get Local Storage =====
const getLocal = () => JSON.parse(localStorage.getItem("slider"));

// ======= Add More Handler ========
getElem("addBtn")?.addEventListener("click", () => {
  const inputContainer = getElem("input-container");
  const input = document.createElement("div");
  input.classList.add("input");
  input.innerHTML = `
  <input class="input-url" placeholder="URL of Number ${++i} Image" type="text" />
  <button onclick="clearInput(event)" id="clear-btn" title="Clear">X</button><i onclick="deleteInput(event)" id="delete-btn" title="Delete" class="fa-solid fa-trash-can"></i>`;
  inputContainer.appendChild(input);
  getElem("readyBtn").style.display = "inline-block";
});

// ======= Show Slider ======
const showSlider = (imgId) => {
  getElem("slider")?.remove();
  const imgArr = getLocal();
  const sliderContainer = getElem("slider-container");
  const slider = document.createElement("div");
  slider.setAttribute("id", "slider");
  slider.innerHTML = `
  <i class="fa-solid fa-circle-arrow-left"></i>
  <img id="img-slide" src="${imgArr[imgId]}" alt="Image Number ${imgId} is Loading..." />
  <i class="fa-solid fa-circle-arrow-right"></i>`;
  sliderContainer?.appendChild(slider);
};

// ===== Change Slider Img ======
let imgNo = 0;
getElem("loader").style.display = "block";
setTimeout(() => {
  getElem("loader").style.display = "none";
}, 5000);
setInterval(() => {
  imgNo++;
  if (imgNo < getLocal().length) {
    console.log(imgNo);
    showSlider(imgNo);
  } else {
    imgNo = 0;
    showSlider(imgNo);
  }
}, 5000);

// ======= Ready Handler ========
getElem("readyBtn")?.addEventListener("click", () => {
  let errorId = 0;
  arr = [];
  const inputs = document.getElementsByClassName("input-url");
  for (const input of inputs) {
    errorId++;
    if (input.value) {
      arr.push(`${input.value}`);
      location = "slider.html";
    } else {
      alert(`Please Input URl of Number ${errorId} Image or Remove The Field.`);
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
  event.target.parentNode.remove();
  if (!document.querySelector(".input-url")) {
    getElem("readyBtn").style.display = "none";
  }
};
