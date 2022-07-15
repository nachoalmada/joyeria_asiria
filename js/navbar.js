function showMenu() {
    const navbarLinks = document.querySelector('.navbar-links');  
    
    if(navbarLinks.classList.contains("active")){
        navbarLinks.classList.remove("active");
    } else {
        navbarLinks.classList.add("active")
    }
        
}

