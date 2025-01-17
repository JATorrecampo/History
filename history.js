document.addEventListener("DOMContentLoaded", function() {
    var dropdownIds = ["dropdown"];

    dropdownIds.forEach(function(id) {
        var dropdown = document.getElementById(id);
        
        dropdown.addEventListener("change", function() {
            console.log("Dropdown change event triggered for:", id);
            
            var selectedOption = dropdown.options[dropdown.selectedIndex];
            console.log("Selected option:", selectedOption);
            
            var selectedHref = selectedOption.getAttribute("data-href");
            console.log("Selected href:", selectedHref);
            
            if (selectedHref && selectedHref !== "#") {
                console.log("Navigating to:", selectedHref);
                window.location.href = selectedHref;
            } else {
                console.log("No valid href found");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const dash = document.getElementById('dash');
    const menu = document.querySelector('.menu');
    const icon = document.getElementById('menuIcon');

    menu.style.display = 'none';
    
    function toggleMenu() {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            menu.style.display = 'none';
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    dash.addEventListener('click', toggleMenu);
    
    icon.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });
})