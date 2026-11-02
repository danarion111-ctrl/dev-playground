const files = [
    "avatar.png",
    "document.pdf",
    "photo.jpg",
    "music.mp3",
    "background.png",
    "icon.svg"
];
const pngImages =  files
    .filter(image=> image.endsWith('png') );

const jpgImages = files
.filter(image=> image.endsWith('jpg') );
const images =  pngImages.concat(jpgImages);
console.log(images);