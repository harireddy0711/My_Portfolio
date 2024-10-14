
const image = document.getElementById('imageChange');
image.onclick = function() {
    var myImage = image.getAttribute('src');
    if(myImage === 'images/Picture1.jpg') {
        image.setAttribute('src', 'images/full-stack.jpg');
    } else {
        image.setAttribute('src', 'images/Picture1.jpg');
    }
}

