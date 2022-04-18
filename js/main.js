const logo = document.getElementById("LogoImg");
const profile = document.getElementById("profile");
const music = document.getElementById("music");
const merch = document.getElementById("merch");
const connect = document.getElementById("connect");
const footer = document.getElementsByTagName("footer");
const sns = document.getElementsByClassName("sns");

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
        sns[0].addEventListener("mousemove", (e) => {
            const clientRect = sns[0].getBoundingClientRect();
            let verticalCenter = clientRect.top + clientRect.height / 2;
            let horizonCenter = clientRect.left + clientRect.width / 2;
            console.log(horizonCenter - e.clientX, verticalCenter - e.clientY);
            let shadowSize =
                (Math.abs(horizonCenter - e.clientX) +
                    Math.abs(verticalCenter - e.clientY)) /
                2;
            sns[0].style.transitionDuration = "0s";
            sns[0].style.boxShadow = `${horizonCenter - e.clientX}px ${
                verticalCenter - e.clientY
            }px 0px ${shadowSize}px #012e6485`;
        });
        sns[0].addEventListener("mouseout", (e) => {
            sns[0].style.transitionDuration = "0.5s";
            sns[0].style.boxShadow = "0px 0px 0px #012e6485";
        });
    }, 3400);
};

const clickConnect = (e) => {
    e.style.transitionDuration = "0.5s";
    e.style.boxShadow = "0px 0px 0px 100px #012e6485";
};
