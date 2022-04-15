const sns = document.getElementsByClassName("sns");

sns[0].addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
    sns[0].style.boxShadow = `${e.clientX} ${e.clientY} 0px #012e64;`;
});
