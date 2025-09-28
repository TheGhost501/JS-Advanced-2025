function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const extra = document.getElementById("extra");
    
    if (extra.style.display === "block") {
        extra.style.display = "none";
        button.textContent = "More";
    } else {
        extra.style.display = "block";
        button.textContent = "Less";
    }

}  