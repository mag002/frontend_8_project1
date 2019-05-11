function show_tab(ctrl){
	var opacity = parseFloat(ctrl.style.opacity);
	if(opacity ==1)
		return;
	opacity+=0.01;
	ctrl.style.opacity=opacity;
	setTimeout(show_tab,10,ctrl);
}
var lst_a_tab = document.querySelectorAll(".tab .tab-item a");
for(var i=0;i<lst_a_tab.length;i++)
{
	
	if(lst_a_tab[i].parentElement.className.indexOf('active')==-1)
	{
		var idTab=lst_a_tab[i].getAttribute("data-target");
		document.getElementById(idTab).style.display = "none";
		document.getElementById(idTab).style.opacity = "0";
	}
	lst_a_tab[i].onclick =function(){
		if(this.parentElement.className.indexOf('active')==-1)
		{
			var lst_tab = this.parentNode.parentNode.children;
			for(var idx = 0;idx<lst_tab.length;idx++)
			{
				if(lst_tab[idx].className.indexOf('active')>=0)
				{
					var div_deactive = document.getElementById(lst_tab[idx].children[0].getAttribute("data-target"));
					div_deactive.style.display = "none";
					div_deactive.style.opacity = "0";
					lst_tab[idx].classList.remove("active");
				}
			}
			var active_container=document.getElementById(this.getAttribute("data-target"));
			active_container.style.display = "";
			setTimeout(show_tab,50,active_container);
			this.parentElement.classList.add("active");
		}
	};
}
