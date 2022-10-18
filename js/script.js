function getValue(id) {
    return document.getElementById(id).value;
}

const addTodo = () => {
    let title = getValue("title")
    let location = getValue("location")
    let description = getValue("description")
    let newTodo = {
        title,
        location,
        description,
        id: Math.random().toString(10).slice(2)
    }

    let oldTodos = JSON.parse(localStorage.getItem("todos")) || [];
    oldTodos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(oldTodos));
    showTable()
}


const showTable = () => {
    let tableHeader = `<table class='table table-hover'><thead><tr><th>No #</th><th>Title</th><th>Location</th><th>Description</th></tr></thead>`;
    let todos = JSON.parse(localStorage.getItem("todos"));

    let mainTable = todos.map((item) => {
        return `<tr><td>${item.id}</td><td>${item.title}</td><td>${item.location}</td><td>${item.description}</td></tr>`
    });
    let tableFooter = "</table>";
    console.log(todos);

    document.getElementById("output").innerHTML = tableHeader + mainTable + tableFooter
}

showTable()