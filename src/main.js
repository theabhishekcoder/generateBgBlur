const img = document.getElementById("userimage");
const inputimg = document.getElementById("imagename");
const imgBug = document.getElementById("gradent");

inputimg.addEventListener("change", () => {
  if (inputimg.files.length > 0) {
    const filereader = new FileReader();
    filereader.onload = function (e) {
      img.src = e.target.result;
      img.onload = (event) => {
        let width = event.target.width;
        let height = event.target.height;

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);

        const Imagedata = context.getImageData(0, 0, width, height);
        const data = Imagedata.data;
        let count = 0;
        let rgb = { r: 0, g: 0, b: 0 };
        for (let i = 0; i < data.length; i += 16) {
          ++count;
          rgb.r = data[i];
          rgb.g = data[i + 1];
          rgb.b = data[i + 2];
        }

        // rgb.r = ~~(rgb.r / count);
        // rgb.g = ~~(rgb.g / count);
        // rgb.b = ~~(rgb.b / count);

        console.log(rgb);

        imgBug.style.background =`linear-gradient(45deg, rgb(${rgb.r},0,0), rgb(0,${rgb.g},0), rgb(0,0,${rgb.b}))`;
      };
    };
    filereader.readAsDataURL(inputimg.files[0]);
  }
});
