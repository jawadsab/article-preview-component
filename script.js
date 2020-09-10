const tooltip = document.querySelector(".tooltip")
const shareBtn = document.querySelector(".share")
const footer = document.querySelector(".footer")
const shareDiv = document.querySelector(".share-div")
const mbshare = document.querySelector(".share-b")


if(window.innerWidth > 600) {
    shareBtn.addEventListener("click",() => {
        console.log("button")
        tooltip.classList.toggle("toggle")
    
})
} else {
    shareBtn.addEventListener("click",() => {
        footer.classList.add("footer-toggle")
        shareDiv.style.display = "flex"
    })
}

mbshare.addEventListener("click",() => {
    shareDiv.style.display = "none"
    footer.classList.remove("footer-toggle")
})