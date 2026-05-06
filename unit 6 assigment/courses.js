const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cards = document.querySelectorAll(".course-card");

searchInput.addEventListener("keyup", filterCourses);
categoryFilter.addEventListener("change", filterCourses);

function filterCourses() {
    const text = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    cards.forEach(function(card) {
        const title = card.querySelector("h4").textContent.toLowerCase();
        const cardCategory = card.dataset.category;

        if (
            title.includes(text) &&
            (category === "all" || category === cardCategory)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });
}
