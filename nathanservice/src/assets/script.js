document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function () {
        var header = document.querySelector('.sticky-header');
        var heroImageHeight = document.querySelector('.logo-container').offsetHeight;


        if (window.scrollY > heroImageHeight * 0.85) { // Adjust this value as needed
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});