const musicMerchCover = document.getElementById("musicMerchCover");
const accMerchCover = document.getElementById("accMerchCover");
const musicMerch = document.getElementById("musicMerch");
const accMerch = document.getElementById("accMerch");
const musicMerchImg = document.getElementById("musicMerchImg");
const accMerchImg = document.getElementById("accMerchImg");
const wrapMerch = document.getElementById("wrapMerch");
const closeBtn = document.getElementById("closeBtn");
const merchPrevButton = document.getElementById("merchPrevButton");
const merchNextButton = document.getElementById("merchNextButton");
const musicMerchList = document.getElementById("musicMerchList");
const accMerchList = document.getElementById("accMerchList");
const musicMerchs = document.getElementsByClassName("musicMerchs");
const accMerchs = document.getElementsByClassName("accMerchs");

musicMerchCoverClick = () => {
    musicMerch.style.width = "100%";
    accMerch.style.display = "none";
    wrapMerch.style.justifyContent = "flex-start";
    musicMerchCover.style.opacity = 0;
    musicMerchImg.style.display = "none";
    musicMerchList.style.display = "flex";
    merchPrevButton.style.display = "block";
    merchNextButton.style.display = "block";
    setTimeout(() => {
        musicMerchCover.style.display = "none";
        closeBtn.style.display = "block";
    }, 500);
};
accMerchCoverClick = () => {
    accMerch.style.width = "100%";
    musicMerch.style.display = "none";
    wrapMerch.style.justifyContent = "flex-end";
    accMerchCover.style.opacity = 0;
    accMerchImg.style.display = "none";
    accMerchList.style.display = "flex";
    merchPrevButton.style.display = "block";
    merchNextButton.style.display = "block";
    setTimeout(() => {
        accMerchCover.style.display = "none";
        closeBtn.style.display = "block";
    }, 500);
};

closeBtnClick = () => {
    if (accMerch.style.width === "100%") {
        wrapMerch.style.justifyContent = "flex-end";
        accMerchImg.style.display = "block";
        accMerchList.style.display = "none";
        setTimeout(() => {
            musicMerch.style.display = "flex";
        }, 500);
    } else {
        wrapMerch.style.justifyContent = "flex-start";
        musicMerchImg.style.display = "block";
        musicMerchList.style.display = "none";
        setTimeout(() => {
            accMerch.style.display = "flex";
        }, 500);
    }
    merchPrevButton.style.display = "none";
    merchNextButton.style.display = "none";
    accMerch.style.width = "50%";
    musicMerch.style.width = "50%";
    musicMerchCover.style.display = "flex";
    accMerchCover.style.display = "flex";
    musicMerchCover.style.opacity = 1;
    accMerchCover.style.opacity = 1;
    closeBtn.style.display = "none";
    merchPrevButton.style.opacity = 0.3;
    merchNextButton.style.opacity = 1;
};

merchPrevButton.onclick = () => {
    if (accMerch.style.display === "none") {
        for (let index = 0; index < 5; index++) {
            musicMerchs[index].style.transform = "translateX(18vh)";
        }
    } else {
        for (let index = 0; index < 5; index++) {
            accMerchs[index].style.transform = "translateX(18vh)";
        }
    }
    merchPrevButton.style.opacity = 0.3;
    merchNextButton.style.opacity = 1;
};
merchNextButton.onclick = () => {
    if (accMerch.style.display === "none") {
        for (let index = 0; index < 5; index++) {
            musicMerchs[index].style.transform = "translateX(-17.3vh)";
        }
    } else {
        for (let index = 0; index < 5; index++) {
            accMerchs[index].style.transform = "translateX(-17.3vh)";
        }
    }
    merchNextButton.style.opacity = 0.3;
    merchPrevButton.style.opacity = 1;
};
