let restaurantName = document.querySelector('.order-summary-data span')
let restaurantAddress = document.querySelector('.order-summary-data p')
let orderName = document.querySelector('.veg-nonveg span')
let increaseOrder = document.getElementsByClassName('pos')[0]
let decreaseOrder = document.getElementsByClassName('neg')[0]
let itemTotal = document.querySelector('.order-incr-dec span')
let discount = document.querySelectorAll('.bill-details p span')[2]
let totalPay = document.querySelector('.total-price')
let savings = document.querySelector('.savings p')
let priceToShow = document.getElementsByClassName('price-DB')[0]

let originalPrice = parseInt(priceToShow.textContent)
let originalDiscount = parseInt(discount.textContent.replace('₹', '').trim())
let originalSaving = parseInt(savings.textContent.replace('Savings of ₹', '').trim())

increaseOrder.addEventListener('click', () => {
    let itemCount = parseInt(itemTotal.textContent)
    if (itemCount + 1 > 10) {
        window.alert("Not Valid")
    } else {
        itemCount++
        itemTotal.textContent = itemCount
        totalPay.textContent = "₹" + (originalPrice * itemCount + originalDiscount) 
        savings.textContent = "Savings of ₹" + (originalSaving * itemCount)
        priceToShow.textContent = originalPrice * itemCount 
    }
})

decreaseOrder.addEventListener('click', () => {
    let itemCount = parseInt(itemTotal.textContent)
    if (itemCount - 1 <= 0) {
        window.alert("Not Valid")
    } else {
        itemCount--
        itemTotal.textContent = itemCount
        totalPay.textContent = "₹" + (originalPrice * itemCount + originalDiscount) 
        savings.textContent = "Savings of ₹" + (originalSaving * itemCount)
        priceToShow.textContent = originalPrice * itemCount 
    }
})

function Load_Footer() {
    fetch("../Footer_Section/index.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data
        })
        .catch(error => console.error('Error loading footer:', error))
}

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar ul');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

