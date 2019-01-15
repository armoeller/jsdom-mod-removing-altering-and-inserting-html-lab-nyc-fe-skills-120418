/* Enter the code to remove the main node element under this comment */
const main = document.getElementById('main')
main.remove()

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1')
let body = document.getElementsByTagName("body")
newHeader.setAttribute("id","victory")
<<<<<<< HEAD
newHeader.innerText = "Andy is the champion!"
=======
newHeader.innerHTML = "Andy is the FUCKING Champion"
>>>>>>> bd449a59677819dab8daa07c3fc163b8e3e05ac2
document.body.appendChild(newHeader)
