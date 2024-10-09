document.getElementById('search-button').addEventListener('click', function() {
    alert('Search functionality not yet implemented.');
});

document.getElementById('login-button').addEventListener('click', function() {
    alert('Login/Create Account functionality not yet implemented.');
});

document.getElementById('cart-button').addEventListener('click', function() {
    alert('Cart functionality not yet implemented.');
});

function toggleStorePanel() {
    var panel = document.getElementById("store-panel");
    panel.classList.toggle("active");
}

function toggleMenu() {
    var menu = document.getElementById("menuPage"); // Corrected the ID
    if (menu.classList.contains("show")) {
        menu.classList.remove("show"); // Close menu
    } else {
        menu.classList.add("show"); // Open menu
    }
}

 function showSubMenu(menuId) {
        // Hide all menus
        document.querySelectorAll('.dropdown-section').forEach(section => section.style.display = 'none');
        // Show the selected submenu
        document.getElementById(menuId).style.display = 'block';
    }

    function showMainMenu() {
        // Hide all submenus and show the main menu
        document.querySelectorAll('.dropdown-section').forEach(section => section.style.display = 'none');
        document.getElementById('main-menu').style.display = 'block';
    }





