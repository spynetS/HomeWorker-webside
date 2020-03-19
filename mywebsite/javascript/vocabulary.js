const startBut = document.getElementById('startBut');

$(document).ready(function(){
    $('#TextBoxId').keypress(function(e){
      if(e.keyCode==13)
      $('#linkadd').click();
    });
});

function StartVocProd()
{
	var prod = document.getElementById('vocProd');
	var firstWord = document.getElementById('firstWord');
	firstWord.value = prod.value;
}
function Correct()
{
	var prod = document.getElementById('vocProd');
	var firstWord = document.getElementById('firstWord');
	var secundWord = document.getElementById('secundWord');
	var right = document.getElementById('rightAnswer');
	var wordOn = document.getElementById('wordOn');
	if(firstWord.value===secundWord.value)
	{
		right.innerText = "Right";
		right.style.color = "#48F86E";
		firstWord.value = firstWord.value+"asd";
		right.style.fontSize = "22px";
		var int = parseInt(wordOn.innerText);
		int++;
		wordOn.innerText = int;
		setTimeout(removeLabel, 3000)
	}
	else
	{
		right.innerText = "Wrong";
		right.style.color = "red";
		right.style.fontSize = "34px";
		setTimeout(normalSize, 100)
	}
}
function normalSize()
{
	var right = document.getElementById('rightAnswer');
	right.style.fontSize = "22px";
}

function removeLabel()
{
	var right = document.getElementById('rightAnswer');
	right.style.fontSize = "0px";
}