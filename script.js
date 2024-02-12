const big_img = document.querySelector('.big_img img');
let images = document.querySelectorAll('.images img');

images.forEach(img => {
    img.addEventListener('mouseenter', function () {
        let currentSrc = this.getAttribute('src')
        big_img.setAttribute('src', currentSrc)
    })
})