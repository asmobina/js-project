
$('.all-btn button').on('click', function () {
    $('.all-btn button').removeClass('btn-back');
    $(this).addClass('btn-back');
});

doc.querySelectorAll("#iso-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        let target = btn.getAttribute("data-filter")
        $(".parent").isotope({
            filter: target,
        });
    });
});

