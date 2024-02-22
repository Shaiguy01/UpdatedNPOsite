document.addEventListener('DOMContentLoaded', function () {
    const scroll = new SmoothScroll('a[href^="#"]', {
        speed: 800, // Adjust the scrolling speed as needed
        easing: 'easeInOutCubic', // You can experiment with different easing functions
        offset: 90 // Adjust this value to set the offset
    });
});

//navbar stuff
const navLinks = navMenu.find('a');
navLinks.on("click", () => {
    // Close the mobile menu
    navMenu.css("right", "-100%");
});


//more personal stuff pop up wishlist part

