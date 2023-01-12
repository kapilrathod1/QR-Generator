const input = document.querySelector("input")
const form = document.querySelector("form")
const image = document.querySelector("#Qr-img   ")
const select = document.querySelector("select")

form.addEventListener("submit", addQR)

async function addQR(e){
    e.preventDefault()
    const getValue = input.value
    const size = select.value
    let apiUrl = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${getValue}`)
    getUrl = apiUrl.url
    image.setAttribute("src", getUrl)
}
form.addEventListener("reset" , resetBtn)
function resetBtn(e){
    window.location.reload(true);
}