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

function openNextPageOnScrollUp(page) {
    let isAtTop = true;

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


