const todoList = document.querySelector(".todo-list-items");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
let currentItemToUpdate = null;

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todoInput.value.trim();
  if (addBtn.textContent == "Update") {
    const spanEle = currentItemToUpdate.querySelector("span");
    spanEle.textContent = todoValue;
    addBtn.textContent = "Add";
  } else {
    const todoValueWithoutSpace = todoInput.value.replaceAll(" ", "_");
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const listElement = document.createElement("li");
    listElement.classList = `${todoValueWithoutSpace}_${randomNumber} w-full flex justify-between items-center mt-3`;
    listElement.innerHTML = `<span class=text-base">${todoValue}</span>
    <div class="flex gap-2">
      <button class="edit_btn_${randomNumber} border border-yellow-400 text-yellow-400 p-1 rounded">Edit</button>
      <button class="remove_btn_${randomNumber} border border-red-400 text-red-400 p-1 rounded">Remove</button>
    </div>`;

    todoList.appendChild(listElement);

    //after adding list element to DOM to for the edit todo item
    listElement
      .querySelector(`.edit_btn_${randomNumber}`) //getting the edit button fo the item
      .addEventListener("click", () => {
        currentItemToUpdate = listElement;
        addBtn.textContent = "Update";
        todoInput.value = listElement.querySelector("span").textContent;
      });

    //after adding list element to DOM to remove the item on click of remove button
    listElement
      .querySelector(`.remove_btn_${randomNumber}`)
      .addEventListener("click", function () {
        listElement.remove();
      });
  }

  todoInput.value = "";
});
