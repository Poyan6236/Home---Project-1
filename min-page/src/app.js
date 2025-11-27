
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
	imgId.style.transform = 'translateX(-50px) translateY(430px)'
	setTimeout(function (){
		imgId.style.transform = 'translateX(300px) translateY(430px)'
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
			imgId.style.transform = 'translateX(-50px) translateY(430px)'
		},1)
		setTimeout(function (){
			imgId.style.transform = 'translateX(0px) translateY(430px)'
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
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226143.png")
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
		imgChenghing.setAttribute("src", "https://owj.io/wp-content/uploads/2025/11/Frame-2147226143.png")
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



