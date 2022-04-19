const logo = document.getElementById("LogoImg");
const profile = document.getElementById("profile");
const music = document.getElementById("music");
const merch = document.getElementById("merch");
const connect = document.getElementById("connect");
const footer = document.getElementsByTagName("footer");
const sns = document.getElementsByClassName("sns");
const bingle = document.getElementsByClassName("bingle");

const snsList = [
    {
        name: "facebook",
        color: "#012e6485",
        link: "https://www.facebook.com/prepband",
    },
    {
        name: "instagram",
        color: "#0000009f",
        link: "https://www.instagram.com/prepband",
    },
    {
        name: "youtube",
        color: "#9b1914",
        link: "https://www.youtube.com/channel/UCphD5BdaBNVJxbH8XZKLDqg",
    },
    {
        name: "twitter",
        color: "#0a658a",
        link: "https://twitter.com/prep_band",
    },
];

let snsN = 1;

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
        sns[snsN].addEventListener("mousemove", (e) => {
            const clientRect = sns[snsN].getBoundingClientRect();
            let verticalCenter = clientRect.top + clientRect.height / 2;
            let horizonCenter = clientRect.left + clientRect.width / 2;
            console.log(horizonCenter - e.clientX, verticalCenter - e.clientY);
            let shadowSize =
                (Math.abs(horizonCenter - e.clientX) +
                    Math.abs(verticalCenter - e.clientY)) /
                2;
            sns[snsN].style.transitionDuration = "0s";
            sns[snsN].style.boxShadow = `${horizonCenter - e.clientX}px ${
                verticalCenter - e.clientY
            }px 0px ${shadowSize}px #012e6485`;
        });
        sns[snsN].addEventListener("mouseout", () => {
            deleteShadow(0);
        });
        sns[snsN].addEventListener("click", () => {
            deleteShadow(0);
            setTimeout(() => {
                bingle[snsN].style.animation = "spin 2s infinite";
            }, 500);
            setTimeout(() => {
                window.open("https://www.facebook.com/prepband");
                bingle[snsN].style.animation = "none";
            }, 2500);
        });
    }, 3400);
};

const deleteShadow = () => {
    sns[snsN].style.transitionDuration = "0.5s";
    sns[snsN].style.boxShadow = "0px 0px 0px #012e6485";
};
