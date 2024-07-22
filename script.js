let modal = document.getElementById("modal");
let btn = document.querySelector(".main__btn");
let span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
