// Hex Color Generate
const hexContainer = document.querySelector(".hex-container");
const hexBtn = document.querySelector(".hex-btn");
const hexTitle = document.querySelector(".hex-title");

hexBtn.addEventListener("click", () => {
  // here the hex color will have value between 0 to 9 and A to F so I have taken them
  let generatedValue = "0123456789ABCDEF";
  let generatedColor = "";

  //   here running loop less than 6 bcz hex color will have 6 value only

  for (i = 0; i < 6; i++) {
    generatedColor += generatedValue.charAt(
      Math.floor(Math.random() * generatedValue.length)
    );
  }
  //   console.log(generatedColor);
  hexContainer.style.backgroundColor = `#${generatedColor}`;
  hexTitle.innerHTML = `#${generatedColor}`;
  hexBtn.style.color = `#${generatedColor}`;
});

// RGB Color Generate

const rgbContainer = document.querySelector(".rgb-container");
const rgbBtn = document.querySelector(".rgb-btn");
const rgbTitle = document.querySelector(".rgb-title");

const redColor = document.querySelector("#red");
const greenColor = document.querySelector("#green");
const blueColor = document.querySelector("#blue");

rgbBtn.addEventListener("click", () => {
  //   let generatedColor = `rgb${redColor},${greenColor},${blueColor}`;
  let generatedRedColor = redColor.value;
  let generatedGreenColor = greenColor.value;
  let generatedBlueColor = blueColor.value;

  //   console.log(generatedRedColor, generatedGreenColor, generatedBlueColor);
  rgbTitle.innerHTML = `rgb(${generatedRedColor},${generatedGreenColor},${generatedBlueColor})`;

  rgbContainer.style.backgroundColor = `rgb(${generatedRedColor},${generatedGreenColor},${generatedBlueColor})`;
});

const hexCopyBtn = document.querySelector(".hex-copy-btn");
const rgbCopyBtn = document.querySelector(".rgb-copy-btn");

function hexCopyToClipboard() {
  navigator.clipboard.writeText(hexTitle.innerHTML);
  alert(`Color ${hexTitle.innerHTML} is copied`);
}

hexCopyBtn.addEventListener("click", hexCopyToClipboard);

function rgbCopyToClipboard() {
  navigator.clipboard.writeText(rgbTitle.innerHTML);
  alert(`Color ${rgbTitle.innerHTML} is copied`);
}

rgbCopyBtn.addEventListener("click", rgbCopyToClipboard);
