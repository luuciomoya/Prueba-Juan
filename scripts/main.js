var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    var miStyle = miImage.getAttribute('style')
    if (miSrc === 'images/tarjeta-gordo.jpg') {
      miImage.setAttribute('src','images/gordo.jpg');
      /*miImage.setAttribute('class', 'imgB');*/
    } else {
      miImage.setAttribute('src', 'images/tarjeta-gordo.jpg');
    }
}