// ===== Global Var and Func ======
const getElem = (idClass) => document.getElementById(idClass);
let i = 3;
let arr;

// ======= Clear Input Handler ======
const clearInput = (event) => {
  event.target.parentNode.firstElementChild.value = "";
  event.target.parentNode.firstElementChild.focus();
};

// ======= Clear Input Handler ======
const deleteInput = (event) => {
  event.target.parentNode.remove();
};

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
});

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

// ======= Show Slider ======
const showSlider = (imgId) => {
  getElem("slider")?.remove();
  const imgArr = getLocal();
  let rexArr = imgArr[imgId];
  let rex = isURL(rexArr);
  console.log(rex);
  if (rex == false) {
    swal(
      `Url of Image Number ${++imgId} is Invalid! \n Please "Go Back Home" \n and Input a Valid Image Url`
    );
  } else {
    const sliderContainer = getElem("slider-container");
    const slider = document.createElement("div");
    slider.setAttribute("id", "slider");
    slider.innerHTML = `
  <img id="img-slide" src="${imgArr[imgId]}" alt="Image Number ${imgId} is not fetched. \n Please Wait for Loading..." />
 `;
    sliderContainer?.appendChild(slider);
  }
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
    showSlider(imgNo);
  } else {
    imgNo = 0;
    showSlider(imgNo);
  }
}, 5000);

// ===== regExp ====
function isURL(str) {
  let regex =
    /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  let pattern = new RegExp(regex);
  return pattern.test(str);
}
// ===== regExp ====
