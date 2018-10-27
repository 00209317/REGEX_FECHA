window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),//obtengo el la lista ul
        listTask: [], //declaro mi lista de tareas


        add(task, priority = false) {
            let element = document.createElement("li");
             element.innerText = task + "          ";
             let btnhecho = document.createElement("button");
             let hechocnt = document.createTextNode("Hecho");
             let btndelete = document.createElement("button");
             let deletecnt = document.createTextNode("Eliminar");
             btndelete.appendChild(deletecnt);
             btnhecho.appendChild(hechocnt);
             element.appendChild(btnhecho);
             element.appendChild(btndelete); 
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            //paso el puntero y le doy click y me borra la tarea
           /* element.addEventListener("click", function () {
                console.log(this);
                let parent = this.parentNode;
                if (parent) {
                    parent.removeChild(this);
                }
            });*/
            // Añadir un boton para marcar de finalizado
            btndelete.addEventListener("click", function(){
                console.log(this.parentNode);
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
             btnhecho.addEventListener("click", function(){
                console.log(this.parentNode);
                let parent = element.parentNode;
                if(parent){
                    element.style.textDecoration="line-through";
                }
             });
            // Elimine de la lista

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }


    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}