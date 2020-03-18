
function fun()
{
	var listItems = document.querySelectorAll("ul li"); // this returns an array of each li
	var prod = document.getElementById('firstWord');
	listItems.forEach(function(item) {
	  item.onclick = function(e) {
	  	prod.value = this.innerText;
	  }
	});

}

