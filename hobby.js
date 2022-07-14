var form=document.getElementById("form");
form.addEventListener('submit',addItem,false);
var list=document.getElementById("list");
list.addEventListener('click',removeItem,false);
var filter=document.getElementById("filter");
filter.addEventListener('keyup',searchItem,false);
function addItem(e) {
	e.preventDefault();
	var f=document.getElementById("h").value;

	//create list element
	var l=document.createElement("li");
	var text=document.createTextNode(f);
	l.appendChild(text);

	//create button to element
	var dbtn=document.createElement("button");
	dbtn.setAttribute("class","delete");
	var dtext=document.createTextNode("X");
	dbtn.appendChild(dtext);

	//add button to the data
	l.appendChild(dbtn);

	//add element to the list
	list.appendChild(l);
}

function removeItem(e)
{
	if(e.target.classList.contains('delete'))
	{
		if(confirm("Are you sure you want to delete"))
		{
			var li=e.target.parentElement;
			list.removeChild(li);
		}
	}
}

function searchItem(e)
{
	var text=e.target.value.toLowerCase();
	var items=document.getElementsByTagName("li");
	Array.from(items).forEach((item)=>{
		itemValue=item.firstChild.textContent;
		if(itemValue.toLowerCase().indexOf(text)!=-1)
		{
			item.style.display="block";
		}
		else
		{
			item.style.display="none";
		}
	})
}