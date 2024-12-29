let company_hireachy = document.getElementsByClassName('company_order')
let img_hireachy = document.querySelector('.img_section img')
let text_hireachy = document.querySelector('.img_sync_text p')
let name_hireachy = document.querySelector('.img_sync_name')

const visionBtn = document.getElementById('visionBtn');
const mainContent = document.getElementsByClassName('mainContent');
const visionSection = document.getElementById('visionSection');

const Management_obj = [
    {
        link: "Images/Management Team 1.png",
        role: "Cheif Executive Officer",
        des: "Dentock",
        name: "Akhilesh Joshi",
        info: "Visionary leader with over 20 years of experience in the tech industry. Drives the company's strategic direction and oversees all operations."
    },
    {
        link: "Images/Management Team 2.png",
        role: "Co-founder",
        des: "Laptos",
        info: "Tech innovator and entrepreneur. Played a crucial role in developing the company's core technology and product vision.",
        name: "Aman Joshi"
    }
    ,
    {
        link: "Images/Management Team 3.png",
        role: "Chief Financial Officer",
        des: "Lap",
        info: "Responsible for managing the company's financial operations, including budgeting, financial planning, and risk management.",
        name: "Aaditys Chahuan"
    }
]

let index = 0

function change_management_data()
{
    img_hireachy.src = Management_obj[index].link
    name_hireachy.textContent = Management_obj[index].name
    company_hireachy.textContent = Management_obj[index].role
    text_hireachy.textContent = Management_obj[index].info

    index = (index + 1) % Management_obj.length
}

window.addEventListener("DOMContentLoaded", () => {
    change_management_data()
    setInterval(change_management_data, 3000)
})

visionBtn.addEventListener('click', () => {
    Array.from(mainContent).forEach(val=>{
        val.style.display = "none"
    })
    visionSection.style.display = "block"
});

function Load_Footer() {
    fetch("../Footer_Section/index.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data
        })
}
window.addEventListener('load', Load_Footer)