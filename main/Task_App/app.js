document.getElementById("formTask").addEventListener("submit",saveTask)
function saveTask(e)
{
    
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value

    const task =
    {
       title, // title: title,
        description // description: description

    }
    // //set es para almacenar
    // //primer dato nombre
    // // segundo, dato almacenado
    // //task es un objeto, por lo cual hay que convertirlo en string

    // localStorage.setItem("task", JSON.stringify(task))
    // document.getElementById("formTask").reset();

    // //para obtener datos solo necesitamos el nombre que se le dio, no el dato
    // //aqui se obtiene como string
    // console.log(localStorage.getItem("task"))

    // //aqui es para obtenerlo como objeto
    // console.log(JSON.parse(localStorage.getItem("task")))

    if (localStorage.getItem("tasks")===null)
    {
        let tasks =[]
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        document.getElementById("formTask").reset();

    } else  {
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        document.getElementById("formTask").reset();

    }

    getTasks()
    e.preventDefault()   
}

function getTasks()
{
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    let tasksView = document.getElementById("task")
    
    tasksView.innerHTML = ""

    for (let i=0; i<tasks.length ; i++ )
    {
        let title = tasks[i].title
        let description = tasks[i].description 
        //el += es para que cada vez que recorra, agregue
        tasksView.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}','${description}')">
                Borrar
                </a>
            </div>        

        </div>`

    }
}
// push se encarga de meter un dato al arreglo
// splice se encarga de sacar datos del arreglo

function deleteTask(title, description)
{
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    for (let i=0; i<tasks.length; i++)
    {
        if((tasks[i].title == title) && (tasks[i].description == description))
        {
            tasks.splice(i,1)

        }

    }

    localStorage.setItem("tasks", JSON.stringify(tasks))
    getTasks()

}

getTasks()