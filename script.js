document.getElementById("infoButton").addEventListener("click", function (event) {
    event.preventDefault();
    let infoText = document.getElementById("infoText");
    if (infoText.classList.contains("hidden")) {
        infoText.classList.remove("hidden");
    } else {
        infoText.classList.add("hidden");
    }
});