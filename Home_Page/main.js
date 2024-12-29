const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("navbar");
const menuBtnIcon = menuBtn.querySelector("span i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const isOpen = navLinks.classList.contains("active");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-circle-line" : "ri-menu-line");
});

const x = document.querySelector('body')
x.addEventListener("click" (()=>{
    navLinks.classList.toggle("close")
}))

function Error_Page()
{
    window.location.href = "../Erro_Page/index.html"
}

function Load_Footer()
{
    fetch("../Footer_Section/index.html")
        .then(response=>response.text())
        .then(data=>{
            document.getElementById("footer-container").innerHTML = data
        })
}

