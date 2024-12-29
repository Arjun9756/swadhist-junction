const tips = [
    "Indulge in Delectable Delights at Swadhist Junction",
    "Enjoy a Cozy Ambiance Perfect for Every Occasion",
    "Savor the Flavors of Swadhist Junction",
    "Discover Unique Dishes Crafted with Passion",
    "Be Ready Website is Beign Loading !"
]

let loaderHeading = document.querySelector('h1')
let index = 0

function giveTextLoader()
{
    loaderHeading.textContent = tips[index]
    if(tips[index] === "Be Ready Website is Beign Loading !")
    {
        return;
    }
    index = (index + 1) % tips.length
}

setInterval(()=>{
    giveTextLoader()
},2000)

function Load_My_Home_Page()
{
    setTimeout(()=>{
        window.location.href = "../Home_Page/index.html"
    },15000)
}

window.addEventListener('load',()=>{
    Load_My_Home_Page()
})