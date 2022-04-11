//retrieve stored JSON data and use it to create an image for ad.html
const imageString = localStorage.getItem('adImageData')
const imageData2 = JSON.parse(imageString)
console.log(imageData2)

let img = document.createElement('img')
img.setAttribute('src', imageData2.image)
img.setAttribute('title', imageData2.title)
img.setAttribute('alt', imageData2.alt)

document.body.appendChild(img)

