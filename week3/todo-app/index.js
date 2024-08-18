// console.log(document); only accessible in browser and not node

function addTodo() {
  const inputEl = document.querySelector("input");
  console.log(inputEl.value);
  const todoText = inputEl.value.trim();
  const p = document.querySelector("p");
  if (!todoText) {
    p.innerHTML = `Please enter a todo!`;
  } else if (todoText) {
    p.innerHTML = "";

    const todoItem = document.createElement("div");
    todoItem.classList.add(
      "grid",
      "grid-cols-[auto,1fr,auto]",
      "items-center",
      "mb-4",
      "md:flex-wrap",
      "lg:flex-nowrap",
      
    );
    document.body.appendChild(todoItem);

    const h4 = document.createElement("h4");
    h4.innerHTML = inputEl.value;
    h4.classList.add("todo-text");
    todoItem.appendChild(h4);

    const buttonContainer = document.createElement("span");
    buttonContainer.classList.add("flex", "justify-end");
    todoItem.appendChild(buttonContainer);

    const check = document.createElement("input");
    check.type = "checkbox";
    buttonContainer.appendChild(check);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.classList.add("btn", "ml-2", "btn-sm", "btn-error");
    buttonContainer.appendChild(delBtn);

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "ml-2", "btn-sm", "btn-primary");
    buttonContainer.appendChild(editBtn);

    check.onclick = (e) => {
      console.log("clicked");
      if (e.target.checked) {
        h4.style.textDecoration = "10px solid red line-through";
      } else {
        h4.style.textDecoration = "none";
      }
    };

    delBtn.onclick = (e) => {
      if (e.target === delBtn) {
        e.target.parentNode.parentNode.removeChild(h4);
        e.target.parentNode.parentNode.removeChild(buttonContainer);
      }
    };

    editBtn.onclick = (e) => {
      h4.contentEditable = h4.contentEditable === "true" ? "false" : "true";
      editBtn.textContent = h4.contentEditable === "true" ? "Done" : "Edit";
    };

    const todoList = document.querySelector("#todo-list");
    todoList.appendChild(todoItem);
    inputEl.value = "";
  }
}
