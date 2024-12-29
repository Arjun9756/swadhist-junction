function Load_Footer()
{
    fetch("../Footer_Section/index.html")
        .then(response=>response.text())
        .then(data=>{
            document.getElementById("footer-container").innerHTML = data
        })
}
window.addEventListener('load',Load_Footer)