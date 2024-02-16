// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Add JavaScript code here
    var dropdown = document.getElementById("gradeDropdown");

    dropdown.addEventListener("click", function () {
        dropdown.classList.toggle("active");
        var dropdownContent = dropdown.querySelector(".dropdown-content");
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    };
});
