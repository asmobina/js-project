let doc = document
//////////////////////////////////////////

let video = doc.querySelectorAll(".video1 a")
let play = doc.querySelectorAll(".big-video")
let mul = doc.querySelectorAll(".mul")
let menu = doc.querySelector(".menu")
let loader = doc.querySelector(".loader")
let arrow = doc.querySelector(".arrow")
let counterNum = doc.querySelectorAll(".counter-num")
let contrelVideo = doc.querySelector(".h_iframe-aparat_embed_frame iframe")

//////////////////////////////////////////

//The scrollRestoration property of History interface allows web applications to explicitly 
//set default scroll restoration behavior on history navigation.

//Prevent automatic page location restoration
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

window.addEventListener("load", function () {
    loader.classList.add("hidden")
})

///////////////////////////////////////////

arrow.addEventListener("click", function () {
    document.documentElement.scrollTo(0, 0)
})

/////////////////////////////////////////

document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 256) {
        menu.classList.add("bg-back")
        arrow.style.display = "block"
    } else {
        menu.classList.remove("bg-back")
        arrow.style.display = "none"
    }
})
document.addEventListener("scroll", function (ev) {
    if (document.documentElement.scrollTop > 1800) {
        counterNum.forEach(function (item) {
            let dataTarget = item.getAttribute("data-target")
            let odometer = new Odometer({
                el: item,
                duration: 1000,
            })
            odometer.update(dataTarget)
        })
    }
})

// //////////////////////////////////////
play.forEach(function (item) {
    item.addEventListener("click", function () {

        const video = document.getElementById("my-video");
        const iframe = video.cloneNode(true);
        video.parentNode.replaceChild(iframe, video);

        document.body.classList.remove("disable-scroll")
        item.style.display = "none"
    })
    mul.forEach(function (muls) {
        muls.addEventListener("click", function () {

            const video = document.getElementById("my-video");
            const iframe = video.cloneNode(true);
            video.parentNode.replaceChild(iframe, video);

            item.style.display = "none"
            document.body.classList.remove("disable-scroll")
        })
        video.forEach(function (videos) {
            videos.addEventListener("click", function (ev) {
                ev.preventDefault()
                item.style.display = "block"
                document.body.classList.add("disable-scroll")
            })
        })

    })
})
///////////////////////////////////////////
let dataSrc = function (el) {
    el.setAttribute("src", el.getAttribute("data-src"))
}

ScrollReveal().reveal(".love-img img", {
    beforeReveal: dataSrc
});

doc.querySelectorAll(".rocket img").forEach(function (item) {
    ScrollReveal().reveal(item, {
        beforeReveal: dataSrc
    });
})

ScrollReveal().reveal(".globe img", {
    beforeReveal: dataSrc
});

ScrollReveal().reveal(".footer-icon", {
    beforeReveal: dataSrc
});


doc.querySelectorAll(".smart-img img").forEach(function (item) {
    ScrollReveal().reveal(item, {
        beforeReveal: dataSrc
    })
})
doc.querySelectorAll(".stadio-img img").forEach(function (item) {
    ScrollReveal().reveal(item, {
        beforeReveal: dataSrc
    })
})
ScrollReveal().reveal(".counter-info", {
    distance: "50%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})
ScrollReveal().reveal(".category-header", {
    distance: "10%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})
ScrollReveal().reveal(".stadio-title", {
    distance: "10%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})

ScrollReveal().reveal(".all-work", {
    distance: "10%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})

ScrollReveal().reveal(".love", {
    distance: "10%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})
ScrollReveal().reveal(".process-header", {
    distance: "20%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})
ScrollReveal().reveal(".all-sponser", {
    distance: "20%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})
ScrollReveal().reveal(".all-team", {
    distance: "20%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})
ScrollReveal().reveal(".suggestion-header", {
    distance: "20%",
    origin: 'top',
    duration: 1000,
    delay: 200,
})


doc.querySelectorAll(".counter-item").forEach(function (item, index) {
    ScrollReveal().reveal(item, {
        distance: "20%",
        origin: 'left',
        duration: 1000,
        delay: 200 * index,
    })
})


doc.querySelectorAll(".work-div").forEach(function (item, index) {
    ScrollReveal().reveal(item, {
        distance: "50%",
        origin: 'bottom',
        duration: 1500,
        delay: index * 800,
    })
})


doc.querySelectorAll(".smart-item").forEach(function (item, index) {
    ScrollReveal().reveal(item, {
        distance: "20%",
        origin: 'bottom',
        duration: 1500,
        delay: index * 200,
    })
})
doc.querySelectorAll(".work-img").forEach(function (item, index) {
    ScrollReveal().reveal(item, {
        beforeReveal: dataSrc
    })
})

doc.querySelectorAll(".work-img2").forEach(function (item) {
    ScrollReveal().reveal(item, {
        beforeReveal: dataSrc
    })
})

////////////// slider1 ////////////////////

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

});
const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
});

const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
});

