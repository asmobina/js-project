let input = doc.querySelectorAll(".connect-input")
let error = doc.querySelectorAll(".error")


doc.querySelector(".submit").addEventListener("click", function (ev) {
    ev.preventDefault()

    if (input[0].value.length < 3) {
        error[0].style.display = "block"
        error[0].style.color = "#e74c3c"
        input[0].style.borderColor = "#e74c3c"
    } else {
        error[0].style.display = "none"
        input[0].style.borderColor = "#2ecc71"
    }

    if (!input[1].value.includes("@") || !input[1].value.includes(".") ||
        input[1].value.indexOf("@") + 1 == input[1].value.indexOf(".")) {
        error[1].style.display = "block"
        error[1].style.color = "#e74c3c"
        input[1].style.borderColor = "#e74c3c"
    } else {
        error[1].style.display = "none"
        input[1].style.borderColor = "#2ecc71"
    }

    if (input[2].value.length < 2) {
        error[2].style.display = "block"
        error[2].style.color = "#e74c3c"
        input[2].style.borderColor = "#e74c3c"
    } else {
        error[2].style.display = "none"
        input[2].style.borderColor = "#2ecc71"
    }
    if (input[3].value.length < 10) {
        error[3].style.display = "block"
        error[3].style.color = "#e74c3c"
        input[3].style.borderColor = "#e74c3c"
    } else {
        error[3].style.display = "none"
        input[3].style.borderColor = "#2ecc71"
    }

})
let show = doc.querySelectorAll(".show")
let plus = doc.querySelectorAll(".plus-connect")

doc.querySelectorAll(".accordion-icon").forEach(function (btn, index) {
    btn.addEventListener("click", function (ev) {
        let newShow = show[index]
        if (newShow.classList.contains("close")) {
            newShow.style.maxHeight = "100px"
            newShow.style.padding = "10px 0"
            newShow.classList.remove("close")
            plus[index].classList.replace("fa-plus", "fa-minus")
        } else {
            newShow.style.padding = "0"
            newShow.style.maxHeight = "0px"
            newShow.classList.add("close")
            plus[index].classList.replace("fa-minus", "fa-plus")
        }
        removeOpen(index)

    })
})
function removeOpen(index1) {
    doc.querySelectorAll(".accordion-icon").forEach(function (item2, index2) {
        if (index1 != index2) {
            show[index2].style.padding = "0"
            show[index2].style.maxHeight = "0px"
            show[index2].classList.add("close")
            plus[index2].classList.replace("fa-minus", "fa-plus")
        }
    })
}

doc.querySelectorAll(".connect-icon img").forEach(function (item) {
    ScrollReveal().reveal(item, {
        beforeReveal: dataSrc
    })
})
ScrollReveal().reveal(".circle-connect img", {
    beforeReveal: dataSrc
});
ScrollReveal().reveal(".left-man-connect img", {
    beforeReveal: dataSrc
});