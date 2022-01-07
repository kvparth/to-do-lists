// let todos=[];
// todos =[{
//   title:"",
//   completed:false,
// }]
// Whenever Added ---> Add item to Array ---> showTodoList()
// Whenver Deleted ---> Delete From Array ---> showTodoList()

function addCloseButtons() {
  const listItems = document.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "DELETE";
    deleteButton.addEventListener("click", () => {
      item.remove();
    });
    item.appendChild(deleteButton);
  }
}

addCloseButtons();
