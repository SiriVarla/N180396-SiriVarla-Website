 /*Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var filter=document.getElementById("filter");
filter.addEventListener('keyup',searchItem,false);

function searchItem(e)
{
  var text=e.target.value.toLowerCase();
  var items=document.getElementsByClassName("search");
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
  });
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("pic");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}