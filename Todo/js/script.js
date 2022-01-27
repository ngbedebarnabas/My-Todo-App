const todos = document.querySelector('.todos');
const form = document.querySelector('form');
const done = document.querySelector('.todo-done')

// console.log(done);

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let new_todo = form.todo.value;
    todos.innerHTML += `
    <li class="list-group-item todo mb-2"><div><input type="checkbox" class="todo-done"/> ${new_todo}</div><i class="fa fa-trash"></i></li>
    `;
    
    form.reset();
});

todos.addEventListener('click', e => {
    if(e.target.nodeName === 'I') {
        e.target.parentElement.remove();
    }
    if(e.target.checked) {
        e.target.parentElement.classList.toggle('todo-done');
    }
});