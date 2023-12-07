document.addEventListener("DOMContentLoaded", function () {
    var categories = document.querySelectorAll("main");
    var lastScrollTop = 0;
    var currentCategory = null;

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 500 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            // Scrolling down
            categories.forEach(function (category) {
                if (isInViewport(category)) {
                    currentCategory = category;
                    var products = category.querySelectorAll(".product");
                    products.forEach(function (product) {
                        product.classList.add("visible");
                    });
                }
            });
        } else {
            // Scrolling up, reset visibility for the current category
            if (currentCategory) {
                var products = currentCategory.querySelectorAll(".product");
                products.forEach(function (product) {
                    product.classList.remove("visible");
                });
                currentCategory = null;
            }
        }

        lastScrollTop = st <= 0 ? 0 : st; // For mobile or negative scrolling
    }

    // Initial check for products in the viewport
    handleScroll();

    // Add scroll event listener to check for products on scroll
    window.addEventListener("scroll", handleScroll);
});
