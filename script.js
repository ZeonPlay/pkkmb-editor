document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
        var targetId = link.getAttribute("href").slice(1);
        var target = document.getElementById(targetId);
        if (!target) return;
        e.preventDefault();
        var navHeight = document.querySelector("nav").offsetHeight;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
        window.scrollTo({ top: top, behavior: "smooth" });
    });
});

// Klik tombol play -> putar video di kartu itu, tampilkan controls, pause video lain
var sampleCards = document.querySelectorAll(".sample-card");
sampleCards.forEach(function (card) {
    var video = card.querySelector(".sample-video");
    var playBtn = card.querySelector(".play-btn");
    if (!video || !playBtn) return;

    playBtn.addEventListener("click", function () {
        sampleCards.forEach(function (otherCard) {
            if (otherCard === card) return;
            var otherVideo = otherCard.querySelector(".sample-video");
            otherVideo.pause();
            otherCard.classList.remove("is-playing");
            otherVideo.removeAttribute("controls");
        });

        video.setAttribute("controls", "");
        card.classList.add("is-playing");
        video.play().catch(function () {
            card.classList.remove("is-playing");
            video.removeAttribute("controls");
            console.warn(
                '[ZeonPlay] Video gagal diputar. Pastikan file "' +
                    video.getAttribute("src") +
                    '" ada di folder sample/.',
            );
        });
    });

    video.addEventListener("ended", function () {
        card.classList.remove("is-playing");
        video.removeAttribute("controls");
    });
});

document.querySelectorAll(".wa-link").forEach(function (link) {
    if (link.getAttribute("href").includes("62812XXXXXXXXX")) {
        console.warn(
            '[ZeonPlay] Nomor WhatsApp masih placeholder. Ganti "62812XXXXXXXXX" di index.html dengan nomor asli.',
        );
    }
});
