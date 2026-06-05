// Highlight current menu item automatically

const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    link.addEventListener("click", function () {

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});