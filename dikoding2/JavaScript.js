var dropdown = document.getElementById("myDropdown");
var dropdownButton = document.getElementById("dropdownButton");
dropdownButton.addEventListener("click", function() {
    
    if (dropdown.style.display === "block") {
        
        dropdown.style.display = "none";
    } else {
        
        dropdown.style.display = "block";
    }
});
document.addEventListener("click", function(event) {
    if (event.target !== dropdownButton && event.target !== dropdown) {
        dropdown.style.display = "none";
    }
});
