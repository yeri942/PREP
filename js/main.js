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
        color: "#3b5998",
        link: "https://www.facebook.com/prepband",
    },
    {
        name: "instagram",
        color: "#72488f",
        link: "https://www.instagram.com/prepband",
    },
    {
        name: "youtube",
        color: "#c4302b",
        link: "https://www.youtube.com/channel/UCphD5BdaBNVJxbH8XZKLDqg",
    },
    {
        name: "twitter",
        color: "#00acee",
        link: "https://twitter.com/prep_band",
    },
];

const clickLogo = () => {
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

const snsNumberChange = (n) => {
    sns[n].addEventListener("mousemove", (e) => {
        const clientRect = sns[n].getBoundingClientRect();
        let verticalCenter = clientRect.top + clientRect.height / 2;
        let horizonCenter = clientRect.left + clientRect.width / 2;
        let shadowSize =
            (Math.abs(horizonCenter - e.clientX) +
                Math.abs(verticalCenter - e.clientY)) /
            2;
        sns[n].style.transitionDuration = "0s";
        sns[n].style.boxShadow = `${horizonCenter - e.clientX}px ${
            verticalCenter - e.clientY
        }px 0px ${shadowSize}px ${snsList[n].color}`;
    });
};

const deleteShadow = (n) => {
    sns[n].style.transitionDuration = "0.5s";
    sns[n].style.boxShadow = `0px 0px 0px ${snsList[n].color}`;
};
const clickSnsIcon = (n) => {
    deleteShadow(n);
    setTimeout(() => {
        bingle[n].style.backgroundColor = snsList[n].color;
        if (n === 1) {
            bingle[n].style.animation = "instaSpin 2s alternate";
        } else {
            bingle[n].style.animation = "spin 2s alternate";
        }
    }, 500);
    setTimeout(() => {
        window.open(snsList[n].link);
        bingle[n].style.animation = "none";
        console.log(2);
    }, 2500);
};
