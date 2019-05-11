// var lst_btn_menu = document.querySelectorAll(".menu li.btn-drop");
// for (var i = 0; i <lst_btn_menu.length; i++) {
// 	lst_btn_menu[i].setAttribute("stt", "off");
// 	lst_btn_menu[i].onclick=function(event){
// 		event.preventDefault();
// 		var lst_item = this.parentElement.children;
// 		if(this.getAttribute("stt")=="off")
// 		{
// 			this.parentElement.style.display = 'block';
// 			this.parentElement.style.maxHeight = "999px";
// 			for (var j = 0; j< lst_item.length; j++) {
// 				lst_item[j].style.display = 'block';
// 			}
// 			this.setAttribute("stt","on");
// 		}
// 		else
// 		{
// 			this.parentElement.style.display = '';
// 			this.parentElement.style.maxHeight = '3em';
// 			for (var j = 0; j< lst_item.length; j++) {
// 				lst_item[j].style.display = '';
// 			}
// 			this.setAttribute("stt","off");
// 		}
// 	};
// }
// var lst_menu = document.querySelectorAll(".menu li.menu-item>a, .menu li.sub-menu-item>a");

// for (var i = 0; i <lst_btn_menu.length; i++) {
// 	if((lst_btn_menu[i].parentNode.parentNode.className.indexOf("sm")>=0 && window.innerWidth<552)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("md")>=0 && window.innerWidth<768)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("lg")>=0 && window.innerWidth<992)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("ex")>=0 && window.innerWidth<1200))
// 	{
// 		for(var j=0;j<lst_menu.length;j++)
// 		{
// 			if(lst_menu[j].parentNode.children.length>0)
// 			{
// 				lst_menu[j].onclick=function (event){
// 					event.preventDefault();
// 					var up=true;
// 					for(var k=0;k<this.parentNode.children.length;k++)
// 					{
// 						//alert(this.parentNode.children[k].tagName);
// 						if(this.parentNode.children[k].tagName.toUpperCase()=='A')
// 						{
// 							if(this.parentNode.children[k].innerHTML.indexOf('fa-chevron-down')>=0 || this.parentNode.children[k].innerHTML.indexOf('fa-chevron-right')>=0)
// 							{
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-down','fa-chevron-up');
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-right','fa-chevron-left');
// 								up=false;
// 							}
// 							else
// 							{
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-up','fa-chevron-down');
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-left','fa-chevron-right');
// 							}
// 						}
// 						if(this.parentNode.children[k].tagName.toUpperCase()=='UL')
// 						{

// 							if(up==false)
// 							{
// 								this.parentNode.children[k].style.display="block";
// 								this.parentNode.children[k].style.maxHeight="999px";
// 							}
// 							else
// 							{
// 								this.parentNode.children[k].style.display="";
// 								this.parentNode.children[k].style.maxHeight="";
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// window.onresize=function(){
// 	for (var i = 0; i <lst_btn_menu.length; i++) {
// 		if((lst_btn_menu[i].parentNode.parentNode.className.indexOf("sm")>=0 && window.innerWidth>552)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("md")>=0 && window.innerWidth>768)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("lg")>=0 && window.innerWidth>992)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("ex")>=0 && window.innerWidth>1200))
// 		{
// 			lst_btn_menu[i].setAttribute("stt", "off");
// 			lst_btn_menu[i].parentElement.style.display="";
// 			var lst_item = lst_btn_menu[i].parentElement.children;
// 			for (var j = 0; j< lst_item.length; j++) {
// 				lst_item[j].style.display = '';
// 			}
// 			for(var j=0;j<lst_menu.length;j++)
// 			{
// 				if(lst_menu[j].parentNode.children.length>0)
// 				{
// 					for(var k=0;k<lst_menu[j].parentNode.children.length;k++)
// 					{

// 						if(lst_menu[j].parentNode.children[k].tagName.toUpperCase()=='A')
// 						{
// 							lst_menu[j].parentNode.children[k].innerHTML=lst_menu[j].parentNode.children[k].innerHTML.replace('fa-chevron-up','fa-chevron-down');
// 							lst_menu[j].parentNode.children[k].innerHTML=lst_menu[j].parentNode.children[k].innerHTML.replace('fa-chevron-left','fa-chevron-right');
// 						}
// 						if(lst_menu[j].parentNode.children[k].tagName.toUpperCase()=='UL')
// 						{
// 							lst_menu[j].parentNode.children[k].style.display="";
// 							lst_menu[j].parentNode.children[k].style.maxHeight="";
// 						}
// 					}
// 				}
// 			}
// 		}
// 		if((lst_btn_menu[i].parentNode.parentNode.className.indexOf("sm")>=0 && window.innerWidth<552)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("md")>=0 && window.innerWidth<768)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("lg")>=0 && window.innerWidth<992)||(lst_btn_menu[i].parentNode.parentNode.className.indexOf("ex")>=0 && window.innerWidth<1200))
// 	{
// 		for(var j=0;j<lst_menu.length;j++)
// 		{
// 			if(lst_menu[j].parentNode.children.length>0)
// 			{
// 				lst_menu[j].onclick=function (event){
// 					event.preventDefault();
// 					var up=true;
// 					for(var k=0;k<this.parentNode.children.length;k++)
// 					{
// 						//alert(this.parentNode.children[k].tagName);
// 						if(this.parentNode.children[k].tagName.toUpperCase()=='A')
// 						{
// 							if(this.parentNode.children[k].innerHTML.indexOf('fa-chevron-down')>=0 || this.parentNode.children[k].innerHTML.indexOf('fa-chevron-right')>=0)
// 							{
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-down','fa-chevron-up');
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-right','fa-chevron-left');
// 								up=false;
// 							}
// 							else
// 							{
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-up','fa-chevron-down');
// 								this.parentNode.children[k].innerHTML=this.parentNode.children[k].innerHTML.replace('fa-chevron-left','fa-chevron-right');
// 							}
// 						}
// 						if(this.parentNode.children[k].tagName.toUpperCase()=='UL')
// 						{

// 							if(up==false)
// 							{
// 								this.parentNode.children[k].style.display="block";
// 								this.parentNode.children[k].style.maxHeight="999px";
// 							}
// 							else
// 							{
// 								this.parentNode.children[k].style.display="";
// 								this.parentNode.children[k].style.maxHeight="";
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	}
// };

window.onscroll = function() {
  scrollFunction();
};
var nav = document.getElementsByClassName("top-header")[0];
// var tooltip = document.getElementById("scroll-tooltip");
var sbHeight =
  window.innerHeight *
  (window.innerHeight / document.documentElement.offsetHeight);

function scrollFunction() {
  // tooltip.style.height = sbHeight + "px";
  // tooltip.style.top =
    (document.documentElement.scrollTop /
      document.documentElement.offsetHeight) *
      100 +
    "%";

  // console.log(
  //   (document.documentElement.scrollTop /
  //     document.documentElement.offsetHeight) *
  //     100
  // );
  if (document.documentElement.scrollTop > 80) {
    nav.style.top = "0px";
    nav.style.width = "100%";
    nav.style.left = "0";
  } else {
    nav.style.top = "15px";
    nav.style.width = "98%";

    nav.style.left = "1%";
  }
}
