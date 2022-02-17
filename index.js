// Toggle the cotenet container
function toggleContent() {
var containerContainer = document.getElementById("cc1")
var arrow = document.getElementById("a1")
if(containerContainer.style.display === "none") {
    containerContainer.style.display = "block"
    arrow.style.display = "block"
    hasClicked = true
    } else {
    containerContainer.style.display = "none"
    arrow.style.display = "none"
    }
}