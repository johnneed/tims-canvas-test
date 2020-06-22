const shrinkButton = document.getElementById("shrinkButton");
const originalImage = document.getElementById("originalImage");
const shrunkImage = document.getElementById("shrunkImage");



shrinkButton.onclick = () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.width = 400;
  myCanvas.height = 400;
  const canvasContext = myCanvas.getContext("2d");
  canvasContext.drawImage(originalImage, 0, 0, 400, 400);
  const dataURL = myCanvas.toDataURL("image/jpg");
  shrunkImage.src = dataURL;
};






