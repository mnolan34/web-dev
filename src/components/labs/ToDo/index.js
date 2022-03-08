import TodoList from "./TodoList.js";

//Commented out to avoid pop ups
//alert('Hello World!');

$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
    </div>
`);

$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);
