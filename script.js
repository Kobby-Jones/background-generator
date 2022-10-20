var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function backgroundPicker(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input",function(){
	backgroundPicker()
})
color2.addEventListener("input", function(){
	backgroundPicker()
})
const array = [2,3,4,5,6]

const mapArray = array.map((nu) => {
	return nu + 2;
});
console.log('array',array);
console.log('Map array', mapArray);