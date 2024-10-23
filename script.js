function createTask(){
    let taskElement = document.forms.form.elements.task
    if(taskElement.value == ''){ return }
    let inputText = document.createTextNode(taskElement.value)
    taskElement.value = ''
    let newTask = document.createElement('li')
    let newText = document.createElement('text')
    newText.appendChild(inputText)
    newTask.appendChild(newText)
    createDeleteButton(newTask)

    let listElement = document.querySelector("#taskList")
    listElement.appendChild(newTask)
}

function createDeleteButton(li){
    let span = document.createElement("span")
    let deleteText = document.createTextNode("\u00D7")

    span.className = "close"
    span.appendChild(deleteText)
    li.appendChild(span)

    span.onclick = ()=>{
        span.parentNode.parentNode.removeChild(span.parentNode)
    }
}

function handleClick(){
    if (event.keyCode == 13){
        event.preventDefault()
        createTask()
        return false
    }
    
}

let taskList = document.querySelector("#taskList")
taskList.addEventListener("click",(e)=>{
    let task = e.target
    if(task.nodeName == "LI"){
        task.firstChild.classList.toggle("checked")
    } else if(task.nodeName == "TEXT"){
        task.classList.toggle("checked")
    }
})