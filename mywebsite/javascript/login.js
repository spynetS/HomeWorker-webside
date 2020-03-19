var once = false;
function login()
{

	const username = document.getElementById('userName');
	const password = document.getElementById('passWord');
	
	if(username.value==="asd"&&password.value==="asd")
	{
		window.open("Home.html");
	}
	else
	{
		if(!once)
		{
			console.log(once);
			document.getElementById('wrongMessage').classList.toggle('active');
			setTimeout(removeLabel, 5000)
			once=true;
		}
		else	
		{
			console.log(once);
		}
	}
}
function removeLabel()
{
	document.getElementById('wrongMessage').classList.toggle('active');
}