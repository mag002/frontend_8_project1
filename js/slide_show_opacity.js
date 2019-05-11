function changeSlideOpacity(slide)
{
	var del=0.05;
	var opa =parseFloat(slide.style.opacity);
	if(opa==0)
	{
		var lst_slide = document.querySelectorAll(".carousel .slide");
		var active_idx=parseInt(slide.getAttribute("idx"));
		var next_idx = (active_idx==lst_slide.length-1)?0:(active_idx+1);
		slide.classList.remove("active");
		slide.style.opacity = '1';
		lst_slide[next_idx].classList.add("active");
		if(next_idx==lst_slide.length-1)
		{
			lst_slide[0].style.display ="block" ;
		}
		if(active_idx==lst_slide.length-1)
		{
			lst_slide[0].style.display ="" ;
		}
		runSlide();
		return;
	}
	opa=opa-del;
	slide.style.opacity = opa;
	setTimeout(changeSlideOpacity,100,slide);
}
function runSlide()
{
	var active_slide =document.querySelector(".carousel .slide.active");
	active_slide.style.opacity = '1';
	setTimeout(changeSlideOpacity, 100, active_slide);
}
window.onload=function(){
	runSlide();
}