
axios.get('https://api.vschool.io/guymoore/todo/').then(function(response){
    listTodos(response.data)
})

function listTodos(arr){
    for (let i = 0; i < arr.length; i++){
        const todoContainer = document.createElement('div')
        todoContainer.classList.add("todo")
        todoContainer.id = arr[i]._id

        const header1 = document.createElement("h1")
        const header2 = document.createElement("h1")
        const header3 = document.createElement("h1")
        
        const image = document.createElement("img")

        const title = document.createElement("h3")
        const description = document.createElement("h3")
        const completed = document.createElement("h3")

        const check = document.createElement("input")
        check.type = "checkbox"
        check.name = "checkOff"
        check.id = arr[i]._id

        
        const deleteD = document.createElement("button")
        deleteD.textContent = "Delete Item"
        deleteD.name = "deleteButton"
        deleteD.id = arr[i]._id
        deleteD.addEventListener('click', function(){
            deleteItem(this.id)
        })

        const edit = document.createElement("button")
        edit.textContent = "Edit Item"
        edit.name = "editButton"
        edit.id = arr[i]._id
        
        edit.addEventListener("click", function(){
            editItem(this.id)
        })

        const editForm = document.createElement("form")
        editForm.setAttribute("id", arr[i]._id)
        editForm.setAttribute("name", "formInput")
        editForm.classList.add("invisible")

        const formTitle = document.createElement("input")
        formTitle.type = "text"
        formTitle.setAttribute("name", "formTitle")

        const formDesc = document.createElement("input")
        formDesc.type = "text"
        formDesc.setAttribute("name", "formDesc")

        const formComplete = document.createElement("input")
        formComplete.type = "text"
        formComplete.setAttribute("name", "formComplete")


        const formImage = document.createElement("input")
        formImage.type = "text"
        formImage.setAttribute("name", "formImage")


        const formSave = document.createElement("button")
        formSave.textContent = "Save Item"
        formSave.name = "editSave"


        header1.textContent = "Title:"
        title.textContent = arr[i].title

        header2.textContent = "Description:"
        description.textContent = arr[i].description

        if(arr[i].completed){
            todoContainer.classList.add("finished")
        }

        header3.textContent = "Completed:"
        completed.textContent = arr[i].completed

        image.src = arr[i].imgUrl

        formTitle.value = arr[i].title
        formDesc.value = arr[i].description
        formComplete.value = arr[i].completed
        formImage.value = arr[i].imgUrl

        todoContainer.appendChild(header1)
        todoContainer.appendChild(title)

        todoContainer.appendChild(header2)
        todoContainer.appendChild(description)

        todoContainer.appendChild(header3)
        todoContainer.appendChild(completed)
        
        todoContainer.appendChild(check)

        todoContainer.appendChild(deleteD)

        todoContainer.appendChild(edit)
        
        if (arr[i].imgUrl){
            todoContainer.appendChild(image)
        }else{
            console.log("No image")
        }
        todoContainer.appendChild(editForm)
        
        editForm.appendChild(formTitle)
        editForm.appendChild(formDesc)
        editForm.appendChild(formComplete)
        editForm.appendChild(formImage)
        editForm.appendChild(formSave)

        document.getElementById("list-container").appendChild(todoContainer)
        
        checkOffNow(arr[i])
        }
}

var toDoForm = document.addTodoForm

toDoForm.addEventListener("submit", function(event){
    event.preventDefault()

    var title = toDoForm.title.value
    var description = toDoForm.description.value
    var completed = toDoForm.completed.value
    var image = toDoForm.image.value


    var newToDo = {}
    newToDo.title = title
    newToDo.description = description
    newToDo.completed = completed
    newToDo.imgUrl = image

    axios.post("https://api.vschool.io/guymoore/todo", newToDo).then(function(response){
    }).catch(function(error){
        console.log(error)
    })
})


function checkOffNow (todo){
    const checkBox = document.querySelectorAll("input[name=checkOff]")
    console.log(checkBox)
    for(let i = 0; i < checkBox.length; i++){
        checkBox[i].addEventListener('change', function(event){
            event.preventDefault()
            const todoList2 = todo._id
            const complete = todo.completed    
            axios.put(`https://api.vschool.io/guymoore/todo/${todoList2}`, {completed: !complete}).then(function(response){
            })
        })    
    }
}

function deleteItem(itemId){
    axios.delete(`https://api.vschool.io/guymoore/todo/${itemId}`).then(function(response){
    })
}

function editItem(itemId){
    let editItem = document.getElementById(itemId)
    for(let i = 0; i < editItem.childNodes.length - 1; i++){
        editItem.childNodes[i].classList.toggle("visibile");
    }
    editItem.childNodes[editItem.childNodes.length-1].style.display = "block"
    editItem.childNodes[editItem.childNodes.length-1].addEventListener("submit", function(event){
        event.preventDefault()
        let title;
        let description;
        let completed; 
        let image; 
        if(editItem.childNodes[editItem.childNodes.length-1].formTitle.value === ""){
        }else{
            title = editItem.childNodes[editItem.childNodes.length-1].formTitle.value
        }
        if(editItem.childNodes[editItem.childNodes.length-1].formDesc.value === ""){
        }else{
            description = editItem.childNodes[editItem.childNodes.length-1].formDesc.value
        }
        if(editItem.childNodes[editItem.childNodes.length-1].formComplete.value === ""){
        }else{
            completed = editItem.childNodes[editItem.childNodes.length-1].formComplete.value
        }
        if(editItem.childNodes[editItem.childNodes.length-1].formImage.value === ""){
        }else{
            image = editItem.childNodes[editItem.childNodes.length-1].formImage.value
        }

        var editTodo = {}
        editTodo.title = title
        editTodo.description = description
        editTodo.completed = completed
        editTodo.imgUrl = image
        axios.put(`https://api.vschool.io/guymoore/todo/${editItem.childNodes[editItem.childNodes.length-1].id}`, editTodo).then(function(response){
            console.log(response.data)
        })
    })
}