const iconHam = document.querySelector("#menu-ham");

iconHam.addEventListener("click", () => {
    const modal = document.querySelector(".menu-container")
    if (modal.style.display === "none") {
        modal.style.display = "block"
    } else {
        modal.style.display = "none"
    }
})