const header = document.getElementById("mainHeader");
let lastScrollTop = 0;
let isNavigating = false;
let navigationTimeout;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (!isNavigating) {
        if (scrollTop > lastScrollTop) {
            header.classList.add("scroll-up");
        } else {
            header.classList.remove("scroll-up");
        }
        lastScrollTop = scrollTop;
    }
});

const navigationLinks = document.querySelectorAll(".navigation-button");

navigationLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            isNavigating = true;
            header.classList.remove("scroll-up");
            clearTimeout(navigationTimeout); 
            target.scrollIntoView();
            navigationTimeout = setTimeout(() => {
                isNavigating = false;
            }, 1000);
        }
    });
});
