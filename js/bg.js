let time = 2000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#img")
max = images.length;

function nextImages(){
    images[currentImageIndex]
    .classList.remove('selected')

    currentImageIndex++

    if(currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex]
    .classList.add("selected")
}

function start(){
setInterval(() => {
    nextImages()
}, time)
}

window.addEventListener("load", start)