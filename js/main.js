const logo = document.getElementById("LogoImg");
const profile = document.getElementById("profile");
function clickLogo() {
    logo.style.transform = "rotate(0deg)";
    logo.style.width = "60%";
    logo.style.height = "60vh";
    document.getElementById("square1").style.top = "0";
    document.getElementById("square2").style.top = "0";
    document.getElementById("square3").style.top = "0";
    document.getElementById("square4").style.top = "0";
    document.getElementById("square5").style.top = "0";
    document.getElementById("square6").style.top = "0";
    document.getElementById("square7").style.top = "0";
    document.getElementById("square8").style.top = "0";

    setTimeout(function () {
        profile.style.display = "flex";
        window.scroll({ top: profile.offsetTop, behavior: "smooth" });
        document.getElementById("goToNextPage").style.display = "none";
    }, 1800);
}
