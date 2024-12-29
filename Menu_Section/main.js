let main_menu_section = document.querySelector('.main-menu-section')

function changeImage() {
    const Images = [
        "swiggy images/Banner Junction Img 1.jpg",
        "swiggy images/Banner Junction Img 2.jpg",
        "swiggy images/Banner Junction Zomato.avif"
    ]
    const imgElement = document.getElementById('slideImage')
    let curr_index = 0
    setInterval(() => {
        curr_index = (curr_index + 1) % Images.length
        imgElement.src = Images[curr_index]
    }, 5000)
}
window.onload = changeImage

let buy_buttons = document.querySelectorAll('.food_item button')
const signInButton = document.querySelector('.sign-in');
const mainMenuSection = document.querySelector('.main-menu-section');
const signUpSection = document.querySelector('.signUp');
let sign_btn = document.querySelector('.signup-btn')
let isSignedIn = false

let cartItemCount = document.querySelector('.cart span')

console.log(signInButton)

buy_buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isSignedIn) {
            window.alert("Please Sign In to buy the food!")
        } else {
            console.log(cartItemCount)
            cartItemCount.textContent = (parseInt(cartItemCount.textContent) + 1).toString()
        }
    })
})

signInButton.addEventListener('click', async () => {
    mainMenuSection.classList.add('blur');
    signUpSection.style.display = "block";
    isSignedIn = true
});

document.addEventListener('click', (event) => {
    console.log(event)
    const isClickInside = signInButton.contains(event.target) || signUpSection.contains(event.target)

    if (!isClickInside) {
        mainMenuSection.classList.remove('blur')
        signUpSection.style.display = "none"
    }
})

let email = document.querySelector('#email');
let pass = document.querySelector('#password');
let confirm = document.querySelector('#confirm-password');

const signupButton = document.querySelector('.signup-btn');

// Data save karne ke liye
function saveData() {
    const emailData = email.value;
    const passData = pass.value;
    localStorage.setItem('email', emailData);
    localStorage.setItem('password', passData);
}

// Page load hone par data retrieve karne ke liye
window.onload = () => {
    changeImage();
    email.value = localStorage.getItem('email') || '';
    pass.value = localStorage.getItem('password') || '';
}

signupButton.addEventListener('click', async (event) => {
    event.preventDefault();
    saveData(); // Data save karne ke liye function call

    let emailData = email.value;
    let passData = pass.value;

    if (emailData === "admin@223" && passData === "123") {
        signInButton.textContent = "Admin";
        signInButton.disabled = true;
        window.alert("Sign Up Successful! You are now logged in as Admin.");
        window.location.href = "../Admin_page/admin.html"
    }
    
    if(emailData === "as9604793@gmail.com" && passData === "Arjun223"){
        isSignedIn = true
        signInButton.textContent = "Arjun"
        signInButton.disabled = true
    }
    
    else {
        window.alert("Invalid Credentials");
    }
});

let cartBtn = document.querySelector('.cart')
cartBtn.addEventListener('click',(event)=>{
    if(parseInt(cartItemCount.textContent) > 0 && isSignedIn){
        window.location.href = "../Billing_Page/index.html"
    }
})

function Load_Footer() {
    fetch("../Footer_Section/index.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data
        })
}
window.addEventListener('load', Load_Footer)
