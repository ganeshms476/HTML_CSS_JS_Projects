const textArea = document.getElementById("textarea");
const total_counter = document.getElementById("total-counter");
const remaining_counter = document.getElementById("remaining-counter")
textArea.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    remaining_counter.innerText = textArea.getAttribute("maxlength") - textArea.value.length;
    total_counter.innerText = textArea.value.length;
}
