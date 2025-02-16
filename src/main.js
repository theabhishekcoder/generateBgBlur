const img = document.getElementById("userimage");
const inputimg = document.getElementById("imagename");

inputimg.addEventListener("change", () => {
  if (inputimg.files.length > 0) {
    const filereader = new FileReader();
    filereader.onload = function (e) {
      img.src = e.target.result;
      img.onload=f
    };
    filereader.readAsDataURL(inputimg.files[0]);
  }
});
