
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

let imgId = document.getElementById('imgId1')
let close2 = document.getElementById('close')

close2.addEventListener("click", function (){
	imgId.style.transition = '0.7s'
	imgId.style.transform = 'translateX(-50px) translateY(0px)'
	setTimeout(function (){
		imgId.style.transform = 'translateX(300px) translateY(0px)'
	}, 500)

	setTimeout(function (){
		imgId.style.display = 'none'
	}, 700)
})

close2.addEventListener("click", function (){
	close2.style.transition = '0.7s'
	close2.style.transform = 'translateX(-50px) translateY(440px)'
	setTimeout(function (){
		close2.style.transform = 'translateX(300px) translateY(440px)'
	}, 500)

	setTimeout(function (){
		close2.style.display = 'none'
	}, 700)
})

window.addEventListener("load", function (){
	this.setTimeout(function (){
		imgId.style.transition = '0.7s'
		imgId.style.display = 'block'
		setTimeout(function (){
			imgId.style.transform = 'translateX(-50px) translateY(0px)'
		},1)
		setTimeout(function (){
			imgId.style.transform = 'translateX(0px) translateY(0px)'
		},1050)
	
	}, 1000)
})

window.addEventListener("load", function (){
	this.setTimeout(function (){
		close2.style.transition = '0.7s'
		close2.style.display = 'block'
		setTimeout(function (){
			close2.style.transform = 'translateX(-50px) translateY(440px)'
		},1)
		setTimeout(function (){
			close2.style.transform = 'translateX(0px) translateY(440px)'
		},1050)
	
	}, 1000)
})


let imgChenghing = document.getElementById('imgChenghing')

let id1 = document.getElementById('id1')
let id2 = document.getElementById('id2')
let id3 = document.getElementById('id3')
let id4 = document.getElementById('id4')
let id5 = document.getElementById('id5')


function kolllop(){
	id1.style.border = '0px solid'
	id2.style.border = '0px solid'
	id3.style.border = '0px solid'
	id4.style.border = '0px solid'
	id5.style.border = '0px solid'
}



function click313() {
	kolllop()
	id1.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '1s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226139.png")
	},200)
	console.log("ok");
}

function click314() {
	kolllop()
	id2.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '0.6s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226140.png")
	},200)
	console.log("ok");	
	
}

function click315() {
	kolllop()
	id3.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '0.6s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226141.png")
	},200)	
	
}

function click316() {
	kolllop()
	id4.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '1s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226142.png")
	},200)	
}

function click317() {
	kolllop()
	id5.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '1s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226143.webp")
	},200)	
}


	


// setInterval(function (){
// 	imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226143.png")
// 	imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226139.png")
// 	console.log("ok");
// },1000)




let index = 0


setInterval(function () {
  if (index === 0) {
	kolllop()
	id1.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '1s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226139.png")
	},200)


  } else if (index === 1 ) {
	kolllop()
	id2.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '0.6s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226140.png")
	},200)
  }

  else if(index === 2){
	kolllop()
	id3.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '0.6s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226141.png")
	},200)	
  }

  else if(index === 3){
	kolllop()
	id4.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '1s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226142.png")
	},200)	
  }


  else if (index === 4){
	kolllop()
	id5.style.border = '1px solid #7c4dff'
	imgChenghing.style.transition = '1s'
	imgChenghing.style.opacity = '0'
	setTimeout(function (){
		imgChenghing.style.opacity = '1'
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226143.webp")
	},200)	
  }

  index++;
  if (index > 4) index = 0;

}, 3000);


// let ani56 = document.getElementById('ani56')
// let kop2 = document.getElementById('kop2')

// let index1 =0



// function hoverr(){

// 	setInterval(function (){
// 		if(index1=== 0){
// 		ani56.style.transform = 'translateX(250px)'
	
// 		}
// 		else if (index1 === 1){
// 			ani56.style.transform = 'translateX(-250px)'
// 		}
// 		index1++
// 		if (index1 > 1) index1 = 0;
// 		console.log(index1);
		
// 	},2000)

// }

// function nothover() {
	
// }


let idi1 = document.getElementById('IDI1')
let idi2 = document.getElementById('IDI2')
let idi3 = document.getElementById('IDI3')
let idi4 = document.getElementById('IDI4')
let idi5 = document.getElementById('IDI5')
let idi6 = document.getElementById('IDI6')
let idi7 = document.getElementById('IDI7')
let idi8 = document.getElementById('IDI8')
let idi9 = document.getElementById('IDI9')
let idi10 = document.getElementById('IDI10')
let idi11= document.getElementById('IDI11')
let idi12= document.getElementById('IDI12')
let idi13 = document.getElementById('ID13')
let idi14 = document.getElementById('IDI14')
let idi15 = document.getElementById('IDI15')
let idi16 = document.getElementById('IDI16')
let idi17 = document.getElementById('IDI17')
let idi18 = document.getElementById('IDI18')
let idi19 = document.getElementById('IDI19')
let idi20 = document.getElementById('IDI20')
let idi21 = document.getElementById('IDI21')



let trans1 = document.getElementById('trans1')
let trans2 = document.getElementById('trans2')
let trans3 = document.getElementById('trans3')
let trans4 = document.getElementById('trans4')
let trans5 = document.getElementById('trans5')
let trans6 = document.getElementById('trans6')
let trans7 = document.getElementById('trans7')
let trans8 = document.getElementById('trans8')
let trans9 = document.getElementById('trans9')
let trans10 = document.getElementById('trans10')
let trans11 = document.getElementById('trans11')
let trans12 = document.getElementById('trans12')
let trans13 = document.getElementById('trans13')
let trans14 = document.getElementById('trans14')
let trans15 = document.getElementById('trans15')
let trans16 = document.getElementById('trans16')
let trans17 = document.getElementById('trans17')
let trans18 = document.getElementById('trans18')
let trans19 = document.getElementById('trans19')
let trans20 = document.getElementById('trans20')
let trans21 = document.getElementById('trans21')

let k = document.getElementById('k1')
let k2= document.getElementById('k2')
let k3= document.getElementById('k3')
let k4= document.getElementById('k4')




let ft2 = false
let ft3 = false
let ft4 = false
let ft5 = false
let ft6 = false
let ft7 = false
let ft8 = false
let ft9 = false
let ft10 = false
let ft11 = false
let ft12 = false
let ft13 = false
let ft14 = false
let ft15 = false
let ft16 = false
let ft17 = false
let ft18 = false
let ft19 = false
let ft20 = false
let ft21 = false
let ft22 = false


function acass(){
	
}


idi1.addEventListener("click", function (){
	if(ft2){
		trans1.style.transform = 'rotateZ(180deg)'
		trans1.style.transition = '0.6s'
		idi1.style.height = '70px'
		k.style.display = 'block'
		idi1.style.transition = '0.6s'
		idi1.style.marginBottom = '0px'
		ft2= false
	}else{
		trans1.style.transform = 'rotateZ(0deg)'
		trans1.style.transition = '0.6s'
		idi1.style.height = '28px'
		k.style.display = 'none'
		idi1.style.transition = '0.6s'
		idi1.style.marginBottom = '25px'
		ft2 = true
	}
})


idi2.addEventListener("click", function (){
	if(ft3){
		trans2.style.transform = 'rotateZ(180deg)'
		trans2.style.transition = '0.6s'
		idi2.style.height = '70px'
		k2.style.display = 'block'
		idi2.style.transition = '0.6s'
		idi2.style.marginBottom = '0px'
		ft3= false
	}else{
		trans2.style.transform = 'rotateZ(0deg)'
		trans2.style.transition = '0.6s'
		idi2.style.height = '28px'
		k2.style.display = 'none'
		idi2.style.transition = '0.6s'
		idi2.style.marginBottom = '25px'
		ft3 = true
	}
})


idi3.addEventListener("click", function (){
	if(ft4){
		trans3.style.transform = 'rotateZ(180deg)'
		trans3.style.transition = '0.6s'
		idi3.style.height = '70px'
		k3.style.display = 'block'
		idi3.style.transition = '0.6s'
		idi3.style.marginBottom = '0px'
		ft4= false
	}else{
		trans3.style.transform = 'rotateZ(0deg)'
		trans3.style.transition = '0.6s'
		idi3.style.height = '28px'
		k3.style.display = 'none'
		idi3.style.transition = '0.6s'
		idi3.style.marginBottom = '25px'
		ft4 = true
	}
})


idi4.addEventListener("click", function (){
 	if(ft5){
 		trans4.style.transform = 'rotateZ(180deg)'
 		trans4.style.transition = '0.6s'
 		idi4.style.height = '70px'
 		k4.style.display = 'block'
 		idi4.style.transition = '0.6s'
 		idi4.style.marginBottom = '0px'
 		ft5= false
 	}else{
 		trans4.style.transform = 'rotateZ(0deg)'
 		trans4.style.transition = '0.6s'
 		idi4.style.height = '28px'
 		k4.style.display = 'none'
 		idi4.style.transition = '0.6s'
 		idi4.style.marginBottom = '25px'
 		ft5 = true
 	}
 })

// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })




// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })



// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })




// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })




// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })



// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })




// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })



// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })



// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })


// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })



// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })




// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })





// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })








// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })




// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })





// idi1.addEventListener("click", function (){
// 	if(ft2){
// 		trans1.style.transform = 'rotateZ(180deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '70px'
// 		k.style.display = 'block'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '0px'
// 		ft2= false
// 	}else{
// 		trans1.style.transform = 'rotateZ(0deg)'
// 		trans1.style.transition = '0.6s'
// 		idi1.style.height = '28px'
// 		k.style.display = 'none'
// 		idi1.style.transition = '0.6s'
// 		idi1.style.marginBottom = '25px'
// 		ft2 = true
// 	}
// })

//////////////////////////////////////////////////////////////////////
 let dd1 = document.getElementById("dd1")
 let dd2 = document.getElementById("dd2")
 let dd3 = document.getElementById("dd3")
 let dd4 = document.getElementById("dd4")
 let dd5 = document.getElementById("dd5")

 function accc(){
	dd1.style.backgroundColor = '#fff'
	dd2.style.backgroundColor = '#fff'
	dd3.style.backgroundColor = '#fff'
	dd4.style.backgroundColor = '#fff'
	dd5.style.backgroundColor = '#fff'

	dd1.style.width = '10px'
	dd2.style.width = '10px'
	dd3.style.width = '10px'
	dd4.style.width = '10px'
	dd5.style.width = '10px'

 }

 let track = document.getElementById('track')
 let track111 = document.getElementById('track111')
 let track222 = document.getElementById('track222')



function track1(){
	accc()
	track.style.transform = 'translateX(-357px)'
	dd2.style.backgroundColor = 'black'
	dd2.style.width = '20px'
	track.style.transition = '0.6s'
}

function track2(){
	accc()
	track.style.transform = 'translateX(-714px)'
	dd3.style.backgroundColor = 'black'
	dd3.style.width = '20px'
}

function track3(){
	accc()
	track.style.transform = 'translateX(-1070px)'
	dd4.style.backgroundColor = 'black'
	dd4.style.width = '20px'
}


function track4(){
	accc()
	track.style.transform = 'translateX(-1428px)'
	dd5.style.backgroundColor = 'black'
	dd5.style.width = '20px'
}


function track5(){
	accc()
	track.style.transform = 'translateX(-0px)'
	dd1.style.backgroundColor = 'black'
	dd1.style.width = '20px'
}



dd1.addEventListener('click' ,function (){
	accc()
	track.style.transform = 'translateX(-0px)'
	dd1.style.backgroundColor = 'black'
	dd1.style.width = '20px'
})

dd2.addEventListener('click' ,function (){
	accc()
	track.style.transform = 'translateX(-357px)'
	dd2.style.backgroundColor = 'black'
	dd2.style.width = '20px'
})

dd3.addEventListener('click' ,function (){
	accc()
	track.style.transform = 'translateX(-714px)'
	dd3.style.backgroundColor = 'black'
	dd3.style.width = '20px'
})

dd4.addEventListener('click' ,function (){
	accc()
	track.style.transform = 'translateX(-1070px)'
	dd4.style.backgroundColor = 'black'
	dd4.style.width = '20px'
})

dd5.addEventListener('click' ,function (){
	accc()
	track.style.transform = 'translateX(-1428px)'
	dd5.style.backgroundColor = 'black'
	dd5.style.width = '20px'
})
let clossssg = document.getElementById('clossssg')
let liyyy1 =document.getElementById('liyyy1')
let  block = document.getElementById('block')
block.addEventListener("click", function (){
	liyyy1.style.display = 'block'
	block.style.display = 'none'
	clossssg.style.display = 'block'
})
clossssg.addEventListener("click", function (){
	liyyy1.style.display = 'none'
	block.style.display = 'block'
	clossssg.style.display = 'none'
})









	
function track6(){
	accc()
	track111.style.transform = 'translateX(-99%)'
	dd2.style.backgroundColor = 'black'
	dd2.style.width = '20px'
}

function track7(){
	accc()
	track111.style.transform = 'translateX(-199%)'
	dd3.style.backgroundColor = 'black'
	dd3.style.width = '20px'
}

function track8(){
	accc()
	track111.style.transform = 'translateX(-299%)'
	dd4.style.backgroundColor = 'black'
	dd4.style.width = '20px'
}


function track9(){
	accc()
	track111.style.transform = 'translateX(-399%)'
	dd5.style.backgroundColor = 'black'
	dd5.style.width = '20px'
}


function track10(){
	accc()
	track111.style.transform = 'translateX(-0px)'
	dd1.style.backgroundColor = 'black'
	dd1.style.width = '20px'
}



/////////////////////////////////////////////////
