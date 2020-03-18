//Checks if mouse colides with sidebar
const mouseTarget = document.getElementById('sidebar');
mouseTarget.addEventListener('mouseenter', e => {
  toggleSidebar();
});

function toggleSidebar()
{
	document.getElementById('sidebar').classList.toggle('active');
}

const submitbut = document.getElementById('submit');

document.getElementById('dateName').valueAsDate = new Date();

function submit()
{
	

	var subjekt = document.getElementById('subjektName').value;
	var task = document.getElementById('taskName').value;
	var date = document.getElementById('dateName').value;
	if(subjekt ===""||task===""||date==="")
	{
		alert("Write subjekt and task and select date");
	}
	else
	{	
	const ul = document.querySelector('.MainList');
	var li = document.createElement("li");
  	li.appendChild(document.createTextNode(subjekt+" "+task+" "+date));
  	ul.appendChild(li);
	document.getElementById('subjektName').value= "";
	document.getElementById('taskName').value= "";
	}

}

