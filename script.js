// creating the modal for the letter

var modal = document.getElementById('letterModal');

var btn = document.getElementById('modalBtn');

var closeButton = document.getElementById('closeBtn');

btn.onclick = function() {
    modal.style.display = "block";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}