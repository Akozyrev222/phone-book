const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("input");
const todoCollection = document.querySelector(".todo-collection");
const groupsForm = document.querySelector(".groups-contacts_form");
const openSideBar = document.querySelector('.add-contact')
const closeSideBar = document.querySelector('.close-button')
const addGroup = document.querySelector('.add')
const saveGroup = document.querySelector('.save')

// document.addEventListener("DOMContentLoaded", getTodosFromLS);

todoForm.addEventListener("submit", addTodo);
openSideBar.addEventListener("click", openSidebarGroups);
closeSideBar.addEventListener("click", closeSidebarGroups);
addGroup.addEventListener('click', addNewGroup)


function addNewGroup(){
    const divFriends = document.createElement("div")
    const label = document.createElement("label");
    const input = document.createElement('input')

    const divDelete = document.createElement('div')
    const divIcon = document.createElement('div')

    label.classList.add('input')
    divFriends.classList.add('friends')
    divDelete.classList.add('icon-delete')
    divIcon.classList.add('icon-svg')

    label.appendChild(input)
    divDelete.appendChild(divIcon)
    divFriends.appendChild(label)
    divFriends.appendChild(divDelete)

    groupsForm.appendChild(divFriends)




}
function openSidebarGroups() {
    document.getElementById("sidebar_groups").style.width = "20%";
    document.getElementById("wrapper").style.opacity = 0.3;
};

function closeSidebarGroups() {
    document.getElementById("sidebar_groups").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};


function addTodo(e) {
    if (todoInput.value === "") {
        // shake form to indicate that the user must input something
        todoForm.classList.toggle("shake-horizontal");
        setTimeout(() => {
            todoForm.classList.toggle("shake-horizontal");
        }, 500);
    } else {
        // create elements
        const li = document.createElement("li");
        const todoTitle = document.createElement("span");
        const editableInput = document.createElement("input");
        const editButton = document.createElement("button");
        const saveButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        li.classList.add("todo-collection__item");

        todoTitle.classList.add("todo-collection__item__title");
        todoTitle.innerText = todoInput.value;

        editableInput.classList.add("input");
        editableInput.classList.add("input--todo");
        editableInput.classList.add("hidden");
        editableInput.type = "text";
        editableInput.value = todoInput.value;

        editButton.classList.add("button");
        editButton.classList.add("button--todo");
        editButton.classList.add("button--edit");
        editButton.innerText = "Edit";

        saveButton.classList.add("button");
        saveButton.classList.add("button--todo");
        saveButton.classList.add("button--save");
        saveButton.classList.add("hidden");
        saveButton.innerText = "Save";

        deleteButton.classList.add("button");
        deleteButton.classList.add("button--todo");
        deleteButton.classList.add("button--delete");
        deleteButton.innerText = "Delete";

        li.appendChild(todoTitle);
        li.appendChild(editableInput);
        li.appendChild(editButton);
        li.appendChild(saveButton);
        li.appendChild(deleteButton);
        todoCollection.appendChild(li);

        function toggleTodoEditForm() {
            todoTitle.classList.toggle("hidden");
            editableInput.classList.toggle("hidden");
            editButton.classList.toggle("hidden");
            saveButton.classList.toggle("hidden");
        }

        // button event listeners
        editButton.addEventListener("click", () => {
            toggleTodoEditForm();
            editableInput.focus();
        });

        saveButton.addEventListener("click", () => {
            todoTitle.innerText = editableInput.value;
            toggleTodoEditForm();
        });

        deleteButton.addEventListener("click", () => {
            setTimeout(() => {
                todoCollection.removeChild(li);
            }, 100);
        });
    }
    // clear input
    todoInput.value = "";

    e.preventDefault();
}

function getTodosFromLS() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(todo => {
        // create elements
        const li = document.createElement("li");
        const todoTitle = document.createElement("span");
        const editableInput = document.createElement("input");
        const editButton = document.createElement("button");
        const saveButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        li.classList.add("todo-collection__item");

        todoTitle.classList.add("todo-collection__item__title");
        todoTitle.innerText = todoInput.value;

        editableInput.classList.add("input");
        editableInput.classList.add("input--todo");
        editableInput.classList.add("hidden");
        editableInput.type = "text";
        editableInput.value = todoInput.value;

        editButton.classList.add("button");
        editButton.classList.add("button--todo");
        editButton.classList.add("button--edit");
        editButton.innerText = "Edit";

        saveButton.classList.add("button");
        saveButton.classList.add("button--todo");
        saveButton.classList.add("button--save");
        saveButton.classList.add("hidden");
        saveButton.innerText = "Save";

        deleteButton.classList.add("button");
        deleteButton.classList.add("button--todo");
        deleteButton.classList.add("button--delete");
        deleteButton.innerText = "Delete";

        li.appendChild(todoTitle);
        li.appendChild(editableInput);
        li.appendChild(editButton);
        li.appendChild(saveButton);
        li.appendChild(deleteButton);
        todoCollection.appendChild(li);

        function toggleTodoEditForm() {
            todoTitle.classList.toggle("hidden");
            editableInput.classList.toggle("hidden");
            editButton.classList.toggle("hidden");
            saveButton.classList.toggle("hidden");
        }

        // button event listeners
        editButton.addEventListener("click", () => {
            toggleTodoEditForm();
            editableInput.focus();
        });

        saveButton.addEventListener("click", () => {
            todoTitle.innerText = editableInput.value;
            toggleTodoEditForm();
        });

        deleteButton.addEventListener("click", () => {
            setTimeout(() => {
                todoCollection.removeChild(li);
            }, 100);
        });
    });
}

// === IN PROGRESS ===

function saveTodoToLS() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todoInput.value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodoFromLS() {
    let todos;
    todos =
        localStorage.getItem("todos") === null
            ? []
            : JSON.parse(localStorage.getItem("todos"));
    // todos.
}

function updateTodoInLS() {
    let todos;
    todos =
        localStorage.getItem("todos") === null
            ? []
            : JSON.parse(localStorage.getItem("todos"));
}

