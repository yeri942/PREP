const member1 = document.getElementById("Llywelyn_Ap_Myrddin");
const member2 = document.getElementById("Tom_Havelock");
const member3 = document.getElementById("Guillaume_Jambel");
const member4 = document.getElementById("Dan_Radclyffe");
const aboutMember = document.getElementById("aboutMember");
const aboutMemberImg = document.getElementById("aboutMemberImg");
const aboutMemberName = document.getElementById("aboutMemberName");
const memberImgArea = document.getElementById("memberImgArea");

const memberList = [
    { src: "Llywelyn_Ap_Myrddin", name: "Llywelyn Ap Myrddin" },
    { src: "Tom_Havelock", name: "Tom Havelock" },
    { src: "Guillaume_Jambel", name: "Guillaume Jambel" },
    { src: "Dan_Radclyffe", name: "Dan Radclyffe" },
];

const aboutMemberStyle = (e) => {
    aboutMember.style.display = "block";
    aboutMember.style.left = e.clientX + 10 + "px";
    aboutMember.style.top = window.pageYOffset + e.clientY + 20 + "px";
};
memberImgArea.addEventListener("mouseout", (e) => {
    aboutMember.style.display = "none";
});
member1.addEventListener("mousemove", (e) => {
    aboutMemberImg.src = `./img/members/${memberList[0].src}.jpg`;
    aboutMemberName.textContent = memberList[0].name;
    aboutMemberStyle(e);
});

member2.addEventListener("mousemove", (e) => {
    aboutMemberImg.src = `./img/members/${memberList[1].src}.jpg`;
    aboutMemberName.textContent = memberList[1].name;
    aboutMemberStyle(e);
});

member3.addEventListener("mousemove", (e) => {
    aboutMemberImg.src = `./img/members/${memberList[2].src}.jpg`;
    aboutMemberName.textContent = memberList[2].name;
    aboutMemberStyle(e);
});

member4.addEventListener("mousemove", (e) => {
    aboutMemberImg.src = `./img/members/${memberList[3].src}.jpg`;
    aboutMemberName.textContent = memberList[3].name;
    aboutMemberStyle(e);
});
