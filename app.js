const todoInput = document.querySelector('.todo-input')
const errorInfo = document.querySelector('.error-info')
const todoList = document.querySelector('ul')
const addBtn = document.querySelector('.btn-add')
const popUp = document.querySelector('.popup')
const popUpInfo = document.querySelector('.popup-info')
const popUpInput = document.querySelector('.popup-input')
const acceptBtn = document.querySelector('.accept')
const cancelBtn = document.querySelector('.cancel')

let newTask
let todoToEdit

const newTodo = () => {
    if(todoInput.value !== ""){
        newTask = document.createElement('li')
        newTask.textContent = todoInput.value;
    
        createTools();
        todoList.append(newTask);
        todoInput.value = ""
        errorInfo.textContent = ""
    }else{
        errorInfo.textContent = "Wpisz jakieś zadanie do wykonania."
    }
}

const createTools = () => {
    const toolsP = document.createElement('div')
    toolsP.classList.add('tools')
    newTask.append(toolsP)

    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    checkBtn.classList.add('complete')
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = "EDIT"
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'


    toolsP.append(checkBtn);
    toolsP.append(editBtn);
    toolsP.append(deleteBtn);

}

const useTools = (e) => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    }else if(e.target.matches('.edit')){
        todoToEdit = e.target.closest('li')
        popUpInput.value = todoToEdit.firstChild.textContent
        popUp.style.display = "flex"
    }else if(e.target.matches('.delete')){
        e.target.closest('li').remove()

        const allTodos = todoList.querySelectorAll('li')

        if(allTodos.length === 0){
            errorInfo.textContent = "Brak zadań na liście"
        }

    }
}

const closeEdit = () => {
    popUp.style.display = "none";
}


const changeTodoText = () => {
    if(popUpInput.value !== ""){
        todoToEdit.firstChild.textContent = popUpInput.value;
        popUpInfo.textContent = ""
        popUp.style.display = "none"
    }else{
        popUpInfo.textContent = "Wpisz jakieś zadanie."
    }

}


const enterKeyCheck = (e) => {
    if(e.key === 'Enter'){
        newTodo()
        changeTodoText()
    }
}











acceptBtn.addEventListener('click', changeTodoText);
cancelBtn.addEventListener('click', closeEdit);
todoList.addEventListener('click', useTools);
addBtn.addEventListener('click', newTodo);
todoInput.addEventListener('keyup', enterKeyCheck);
popUpInput.addEventListener('keyup', enterKeyCheck);


