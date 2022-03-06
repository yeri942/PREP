const logo = document.getElementById("LogoImg");
const profile = document.getElementById("profile");
const music = document.getElementById("music");
const merch = document.getElementById("merch");
function clickLogo() {
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
        window.scroll({ top: profile.offsetTop });
    }, 2100);
    setTimeout(() => {
        document.getElementById("goToNextPage").style.display = "none";
    }, 3400);
}
console.log(window.pageYOffset);
