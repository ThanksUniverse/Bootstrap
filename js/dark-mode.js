/* 

TODO: Add bg-dark text-light to body
TODO: Add bg-black to header
TODO: Remove link-dark from nav items and transform into link-light
TODO: Fix Accordion

*/

function darkMode() {
	var element = document.body;
	var item1 = document.getElementById("nav1");
	var item2 = document.getElementById("nav2");
	var item3 = document.getElementById("nav3");
	var item4 = document.getElementById("nav4");
	var head = document.getElementById("navhead");
	var ahead = document.getElementById("ahead");
	var aheadb = document.getElementById("aheadb");
	var moon = document.getElementById("moon");
	element.classList.toggle("bg-dark");
	element.classList.toggle("text-light");
	item1.classList.toggle("link-light");
	item1.classList.toggle("link-dark");
	item2.classList.toggle("link-light");
	item2.classList.toggle("link-dark");
	item3.classList.toggle("link-light");
	item3.classList.toggle("link-dark");
	item4.classList.toggle("link-light");
	item4.classList.toggle("link-dark");
	head.classList.toggle("bg-light");
	head.classList.toggle("bg-black");
	ahead.classList.toggle("bg-dark");
	ahead.classList.toggle("link-light");
	aheadb.classList.toggle("bg-dark");
	aheadb.classList.toggle("link-light");
	ahead.classList.toggle("border-gray");
}
