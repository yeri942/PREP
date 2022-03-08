const albumCover = document.getElementById("albumCover");
const musicWrap = document.getElementById("musicWrap");

albumCover.onclick = () => {
    musicWrap.classList.toggle("active");
};

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const LPImg = document.getElementById("LPImg");
const LP = document.getElementById("LP");
const youtube = document.getElementById("youtube");
const musicTitle = document.getElementById("musicTitle");
const albumList = [
    {
        name: "the_Kid",
        title: "The Kid",
        src: "https://www.youtube.com/embed/mMBacJ0AOBI?autoplay=1",
    },
    {
        name: "prep",
        title: "Don't Wait For Me",
        src: "https://www.youtube.com/embed/V3cPGIZFbKI?autoplay=1",
    },
    {
        name: "over",
        title: "Over",
        src: "https://www.youtube.com/embed/w-jblGzKDt0?autoplay=1",
    },
    {
        name: "line_by_line",
        title: "Don't Look Back",
        src: "https://www.youtube.com/embed/GQGYUm1wtZA?autoplay=1",
    },
    {
        name: "cold_fire",
        title: "Cold Fire",
        src: "https://www.youtube.com/embed/qdpCBTkTxbc?autoplay=1",
    },
];
let nowIndex = 0;
const changeAlbumInfo = () => {
    albumCover.src = `./img/album/${albumList[nowIndex].name}.jfif`;
    LPImg.src = `./img/album/${albumList[nowIndex].name}.jfif`;
    LP.classList.remove("rotateLP");
    youtube.src = "";
    youtube.style.display = "none";
    albumCover.style.display = "block";
    musicTitle.textContent = albumList[nowIndex].title;
};
prevButton.onclick = () => {
    if (nowIndex === 0) {
        nowIndex = albumList.length - 1;
    } else {
        nowIndex -= 1;
    }
    changeAlbumInfo();
};
nextButton.onclick = () => {
    if (nowIndex === albumList.length - 1) {
        nowIndex = 0;
    } else {
        nowIndex += 1;
    }
    changeAlbumInfo();
};

LP.onclick = () => {
    LP.classList.toggle("rotateLP");
    if (youtube.style.display === "block") {
        youtube.style.display = "none";
        youtube.src = "";
        albumCover.style.display = "block";
    } else {
        youtube.style.display = "block";
        youtube.src = albumList[nowIndex].src;
        albumCover.style.display = "none";
    }
};
