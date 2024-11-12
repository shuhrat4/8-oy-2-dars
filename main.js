"use strict";
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
let todos = [];
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'bg-gray-700 text-white p-4 rounded-lg flex justify-between items-center shadow-md hover:bg-gray-600 transition duration-300';
        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        const updateButton = document.createElement('button');
        updateButton.className = 'bg-teal-500 text-white px-4 py-2 rounded-lg text-sm mx-2';
        updateButton.textContent = 'Update';
        updateButton.onclick = () => updateTodo(todo.id);
        const deleteButton = document.createElement('button');
        deleteButton.className = 'bg-red-500 text-white px-4 py-2 rounded-lg text-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(todo.id);
        li.appendChild(todoText);
        li.appendChild(updateButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}
function addTodo(todoText) {
    const newTodo = {
        id: Date.now(),
        text: todoText,
    };
    todos.push(newTodo);
    renderTodos();
    todoInput.value = '';
}
function updateTodo(todoId) {
    const todoToUpdate = todos.find(todo => todo.id === todoId);
    if (todoToUpdate) {
        const updatedText = prompt('Update your task:', todoToUpdate.text);
        if (updatedText) {
            todoToUpdate.text = updatedText;
            renderTodos();
        }
    }
}
function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    renderTodos();
}
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodo(todoText);
    }
});
renderTodos();
