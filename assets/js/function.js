function openNextPageOnScrollDown(page) {
    // Specify the threshold percentage when to trigger the page transition
    const scrollThreshold = 0.8;

    // Add an event listener to detect mouse wheel scrolling
    window.addEventListener('wheel', (event) => {
        // Check if the user has scrolled beyond the threshold
        if (Math.abs(event.deltaY) >= scrollThreshold) {
            // Perform your desired action, such as redirecting to another page
            window.location.href = page;
        }
    });
}


// function openNextPageOnScrollDown(page) {
//     // Specify the number of pixels to scroll down to trigger the page transition
//     const scrollThreshold = 800;
//     let isScrollingDown = false;

//     // Add an event listener to detect mouse wheel scrolling
//     window.addEventListener('wheel', (event) => {
//         if (event.deltaY > 0) {
//             isScrollingDown = true;
//         } else {
//             isScrollingDown = false;
//         }
//     });

//     // Add an event listener to detect scroll position
//     window.addEventListener('scroll', () => {
//         const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//         // Check if the user has scrolled down and beyond the threshold
//         if (isScrollingDown && currentScrollPosition >= scrollThreshold) {
//             // Perform your desired action, such as redirecting to another page
//             window.location.href = page;
//         }
//     });
// }


function openNextPageOnScrollUp(page) {
    // Specify the number of pixels to scroll up to trigger the page transition
    const scrollThreshold = 800;
    let isAtTop = true;

    // Add an event listener to detect mouse wheel scrolling
    window.addEventListener('wheel', (event) => {
        if (isAtTop && event.deltaY < 0) {
            // Perform your desired action, such as redirecting to another page
            window.location.href = page;
        } else {
            isAtTop = false;
        }
    });

    // Add an event listener to detect scroll position on page load
    window.addEventListener('scroll', () => {
        isAtTop = window.scrollY === 0;
    });
}


