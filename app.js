function copyElementText(id){
    const text = document.getElementById(id).innerText;
    const element = document.createElement("textarea");
    document.body.appendChild(element);
    element.value = text;
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
}

const css = document.querySelector("h3");
const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const body = document.getElementById("linear-gradient-generator");
const randomBtn = document.getElementById('random');
const linearGradient = function () {
    body.style.background = "linear-gradient(to right," + select1.value + ", " + select2.value + ")";
    css.textContent = body.style.background + ";";
};
function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function randomColor(){
    select1.value = getColor();
    select2.value = getColor();
    linearGradient();
}
linearGradient();
select1.addEventListener("input", linearGradient);
select2.addEventListener("input", linearGradient);
randomBtn.addEventListener("click", randomColor);