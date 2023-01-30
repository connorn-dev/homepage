const textToCopy = "cnarowetz@gmail.com"

const headerBtn1 = document.getElementById("home-btn")
const headerBtn2 = document.getElementById("resume-btn")
const headerBtn3 = document.getElementById("contact-btn")

const checkMark = document.getElementById("checkmark")
const copyMark = document.getElementById("copymark")

let topSelectedNum = 1

headerBtn1.addEventListener('click', function() {homeClick()})
headerBtn2.addEventListener('click', function() {resumeClick()})
headerBtn3.addEventListener('click', function() {contactClick()})

function homeClick() {
    topSelectedNum = 1
    changeSelected(topSelectedNum)
}

function resumeClick() {
    topSelectedNum = 2
    changeSelected(topSelectedNum)
}

function contactClick() {
    topSelectedNum = 3
    changeSelected(topSelectedNum)
}

function changeSelected(num) {
    if (num == 1) {
        headerBtn1.classList.add("underl")
        headerBtn2.classList.remove("underl")
        headerBtn3.classList.remove("underl")
    } else if (num == 2) {
        headerBtn1.classList.remove("underl")
        headerBtn2.classList.add("underl")
        headerBtn3.classList.remove("underl")
    } else {
        headerBtn1.classList.remove("underl")
        headerBtn2.classList.remove("underl")
        headerBtn3.classList.add("underl")
    }
}



function copyEmail () {

    navigator.clipboard.writeText(textToCopy)
    .then(() => {
    })
    .catch((error) => {
    })


    copyMark.classList.add("checkmark-deactive")
    checkMark.classList.remove("checkmark-deactive")
    checkMark.classList.add("checkmark-active")
    
    setTimeout(() => {
        copyMark.classList.remove("checkmark-deactive")
        checkMark.classList.add("checkmark-deactive")
        checkMark.classList.remove("checkmark-active")
    }, 2000);

}

