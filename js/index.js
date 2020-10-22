window.addEventListener("DOMContentLoaded",function(){
	let packs = document.querySelectorAll(".js-pack");
	for(let pack of packs){
		let packItem = pack.querySelector(".js-pack__item");
		let packLink = pack.querySelector(".js-pack__link");
		if(packItem){
			packItem.addEventListener("click",function(){
				let stateActive = pack.classList.contains("active");
				let statePreActive = pack.classList.contains("pre-active");
				let stateDisabled = pack.classList.contains("disabled");
				if(!stateDisabled){
					if(stateActive || statePreActive){
						pack.classList.remove("active");
						pack.classList.remove("pre-active");
					}else{
						pack.classList.add("pre-active");
					}
				}
			});
			packItem.addEventListener("mouseleave",function(){
				let statePreActive = pack.classList.contains("pre-active");
				if(statePreActive){
					pack.classList.remove("pre-active");
					pack.classList.add("active");
				}
			});
		}
		if(packLink){
			packLink.addEventListener("click",function(){
				packItem.dispatchEvent(new Event("click"));
				packItem.dispatchEvent(new Event("mouseleave"));
			});
		}
	}
});
