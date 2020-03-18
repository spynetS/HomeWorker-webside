const startBut = document.getElementById('startBut');


function StartVocProd()
{
	const prod = document.getElementById('vocProd');
	const firstWord = document.getElementById('firstWord');
	firstWord.value = prod.value;
}
function Correct()
{
	const prod = document.getElementById('vocProd');
	const firstWord = document.getElementById('firstWord');
	const secundWord = document.getElementById('secundWord');
	if(firstWord.value===secundWord.value)
	{
		alert("Correct");
	}
	else
	{
		alert("Wrong");
	}
}