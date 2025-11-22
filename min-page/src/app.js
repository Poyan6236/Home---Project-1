
///////////heder////////////////////////////////////////////
let cl = document.getElementById('cl')
let cl1 = document.getElementById('cl1')
let cl2 = document.getElementById('cl2')
let cl3 = document.getElementById('cl3')
let cl4 = document.getElementById('cl4')
let cl5 = document.getElementById('cl5')


let rgba = document.getElementById('rgba')


let img = document.getElementById('img')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let img5 = document.getElementById('img5')


let di = document.getElementById('di')
let di1 = document.getElementById('di1')
let di2 = document.getElementById('di2')
let di3 = document.getElementById('di3')
let di4 = document.getElementById('di4')



let ft = false

//let cl6 = document.getElementById('cl6')


function acss(){


	




	di.style.display = 'none'
	di1.style.display = 'none'
	di2.style.display = 'none'
	di3.style.display = 'none'
	di4.style.display = 'none'



	
	img1.style.transform = 'rotate(0deg)'
	img1.style.transition = '0.6s'

	img2.style.transform = 'rotate(0deg)'
	img2.style.transition = '0.6s'

	img3.style.transform = 'rotate(0deg)'
	img3.style.transition = '0.6s'

	img4.style.transform = 'rotate(0deg)'
	img4.style.transition = '0.6s'

	img5.style.transform = 'rotate(0deg)'
	img5.style.transition = '0.6s'

}



function acss2(){
	di.style.display = 'none'
	di1.style.display = 'none'
	di2.style.display = 'none'
	di3.style.display = 'none'
	di4.style.display = 'none'

}



cl.addEventListener("click",function (){
	img.style.transform = 'rotate(180deg)'
	img.style.transition = '0.6s'
})










cl1.addEventListener("click",function (){
	acss()
	if(ft){
		acss2()
		img1.style.transform = 'rotate(180deg)'
		img1.style.transition = '0.6s'
		rgba.style.display = 'block'
		di.style.display = 'block'
		ft = false
	}else{
		di.style.display = 'none'
		rgba.style.display = 'none'
		ft = true
	}

})
cl2.addEventListener("click",function (){
	acss()
	if(ft){
		acss2()
		img2.style.transform = 'rotate(180deg)'
		img2.style.transition = '0.6s'
		rgba.style.display = 'block'
		di1.style.display = 'block'
		ft = false
	}else{
		di1.style.display = 'none'
		rgba.style.display = 'none'
		ft = true
	}

})

cl3.addEventListener("click",function (){
	acss()
	if(ft){
		acss2()
		img3.style.transform = 'rotate(180deg)'
		img3.style.transition = '0.6s'
		rgba.style.display = 'block'
		di2.style.display = 'block'
		ft = false
	}else{
		di2.style.display = 'none'
		rgba.style.display = 'none'
		ft = true
	}

})

cl4.addEventListener("click",function (){
	acss()
	if(ft){
		acss2()
		img4.style.transform = 'rotate(180deg)'
		img4.style.transition = '0.6s'
		rgba.style.display = 'block'
		di3.style.display = 'block'
		ft = false
	}else{
		di3.style.display = 'none'
		rgba.style.display = 'none'
		ft = true
	}

})

cl5.addEventListener("click",function (){
	acss()
	if(ft){
		acss2()
		img5.style.transform = 'rotate(180deg)'
		img5.style.transition = '0.6s'
		rgba.style.display = 'block'
		di4.style.display = 'block'
		ft = false
	}else{
		di4.style.display = 'none'
		rgba.style.display = 'none'
		ft = true
	}

})

rgba.addEventListener("click", function (){
	acss2()
	rgba.style.display = 'none'
})

/////////////heder//////////////////////////////////////////////////