const todoList = document.querySelector(".todo-list-items");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
let currentItemToUpdate = null;

document.addEventListener("DOMContentLoaded", getItemFromLocalStorage);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todoInput.value.trim();
  (currentItemToUpdate ? updateItem : addItem)(todoValue);
  addItemToLocalStorage(); // this function stores the list items in the local storage
  resetForm();
});

const addItem = (todoValue) => {
  const listElement = createListItem(todoValue);
  todoList.appendChild(listElement);
};

const createListItem = (todoValue) => {
  const listElement = document.createElement("li");
  listElement.className = `w-full flex justify-between items-center mt-3`;

  // I thought i need to give unique class name or id to button every time new list item added but there is no need as javascript added to event listener to the current item buttons and handles it in the backgournd

  listElement.innerHTML = `<span class=text-base">${todoValue}</span>
  <div class="flex gap-2">
    <button class="edit_btn border border-yellow-400 text-yellow-400 p-1 rounded">Edit</button>
    <button class="remove_btn border border-red-400 text-red-400 p-1 rounded">Remove</button>
  </div>`;

  // addItemToLocalStorage(todoValue);
  //after adding list element to DOM for the edit todo item
  listElement
    .querySelector(`.edit_btn`) //getting the edit button fo the item
    .addEventListener("click", () => {
      currentItemToUpdate = listElement;
      addBtn.textContent = "Update";
      todoInput.value = listElement.querySelector("span").textContent;
    });

  //after adding list element to DOM to remove the item on click of remove button
  listElement
    .querySelector(`.remove_btn`)
    .addEventListener("click", function () {
      listElement.remove();
    });

  return listElement;
};

const updateItem = (todoValue) => {
  currentItemToUpdate.querySelector("span").textContent = todoValue;
  addItemToLocalStorage();
};

function resetForm() {
  todoInput.value = "";
  addBtn.textContent = "Add";
  currentItemToUpdate = null;
}

function addItemToLocalStorage() {
  const allItems = [];
  document.querySelectorAll(".todo-list-items li span").forEach((item) => {
    allItems.push(item.textContent);
  });
  localStorage.setItem("list-items", JSON.stringify(allItems));
}

function getItemFromLocalStorage() {
  const getItems = localStorage.getItem("list-items");
  console.log(JSON.parse(getItems));
  JSON.parse(getItems).map((item) => {
    const listItem = createListItem(item);
    todoList.appendChild(listItem);
  });
}
