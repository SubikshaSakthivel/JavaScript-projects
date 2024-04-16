const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list-container'); 

function addTask() 
{
  if (inputBox.value === '')
   {
    alert('You must write something!');
  } 
  else 
  {
    let li = document.createElement('li');
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
  }
  inputBox.value=" ";

}
