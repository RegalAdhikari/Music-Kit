for (i=0;i<7;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",handleClick)
function handleClick()
{
    alert(i+"th button clicked!!");
    
}
}

