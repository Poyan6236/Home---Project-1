
let abslotly = document.getElementById('abslotly')
let dey = document.getElementById('dey')
let night = document.getElementById('night')
let body = document.getElementById('body')
let ab2 = document.getElementById('ab2')
let deyandnight = document.getElementById('deyandnight')

night.addEventListener("click", function (){
	abslotly.style.marginRight ='80px'
	body.style.backgroundColor = '#fff'
	dey.style.color = '#fff'
	night.style.color = '#fff'
})

dey.addEventListener("click", function (){
	abslotly.style.marginRight ='20px'
	body.style.backgroundColor = 'black'
	dey.style.color = 'black'
	night.style.color = 'black'
})
 let sum = false
ab2.addEventListener("click", function (){
	if(sum){
		deyandnight.style.width = '0'
		ab2.style.marginRight = '20px'
		abslotly.style.position = 'relative'
		sum = false
	}else{
		deyandnight.style.width = '150px'
		ab2.style.marginRight = '170px'
		abslotly.style.position = 'absolute'
		sum = true
	}

})
let btnMIN = document.getElementById('btnMIN')
let inp1 = document.getElementById('inp1')
let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let menubar = document.getElementById('menubar')
let ab3 = document.getElementById('ab3')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
let spn = document.getElementById ('spn')

ab3.addEventListener("click", function (){
	menubar.style.transform = ' translateX(0px)'
})
inp2.addEventListener("input", function () {
	console.log(inp2.value);
	spn.style.height = inp2.value + "px"


})
inp3.addEventListener("input" , function (){
	console.log(inp3.value);
	spn.style.width = inp3.value + "px"
})
