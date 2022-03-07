const nav = document.getElementById("nav");
setInterval(() => {
    if (window.pageYOffset > 0) {
        nav.style.opacity = "1";
    } else {
        nav.style.opacity = "0";
    }
}, 250);

const gnbMain = document.getElementById("gnbMain");
const gnbProfile = document.getElementById("gnbProfile");
const gnbMusic = document.getElementById("gnbMusic");
const gnbMerch = document.getElementById("gnbMerch");

gnbMain.onclick = () => {
    window.scroll({ top: 0 });
};
gnbProfile.onclick = () => {
    window.scroll({ top: profile.offsetTop });
};
gnbMusic.onclick = () => {
    window.scroll({ top: music.offsetTop });
};
gnbMerch.onclick = () => {
    window.scroll({ top: merch.offsetTop });
};
