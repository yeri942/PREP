const logo = document.getElementById("LogoImg");
const profile = document.getElementById("profile");
const music = document.getElementById("music");
const merch = document.getElementById("merch");
const connect = document.getElementById("connect");
const footer = document.getElementsByTagName("footer");
clickLogo = () => {
    logo.style.transform = "rotate(0deg)";
    logo.style.width = "60%";
    logo.style.height = "60vh";
    setTimeout(() => {
        for (let index = 1; index < 9; index++) {
            document.getElementById(`square${index}`).style.top = "0";
        }
    }, 300);

    setTimeout(() => {
        profile.style.display = "flex";
        music.style.display = "flex";
        merch.style.display = "flex";
        connect.style.display = "flex";
        footer[0].style.display = "flex";
        window.scroll({ top: profile.offsetTop });
    }, 2100);
    setTimeout(() => {
        document.getElementById("goToNextPage").style.display = "none";
    }, 3400);
};
