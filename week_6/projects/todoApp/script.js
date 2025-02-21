const addBtn = document.getElementById('add-btn');
const toInput = document.getElementById('todo-input')
const todoItemsContainer = document.getElementById('todo-items-container')

addBtn.addEventListener('click', () =>{
    const value = toInput.value;
    console.log('user entered', value);

    const li = document.createElement('li')
    li.innerText = value;

    const delButton = document.createElement('button');
    delButton.innerText = 'X';

    delButton.addEventListener('click', function() {
        li.remove();
    })

    li.appendChild(delButton);

    todoItemsContainer.appendChild(li);
    toInput.value = '';
}); 