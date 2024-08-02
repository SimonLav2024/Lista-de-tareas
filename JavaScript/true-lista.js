// se definen las variables 
let inputTarea = document.getElementById("nueva-tarea");
let listaGuardada = document.getElementById("tareas");
//fin

// esto es la funcion principal que cuando le das en el navegador al boton de Añadir se te ejecuta todo el codigo que hay dentro
function addTarea() {
    let tar = inputTarea.value.trim(); //se defina la variable tar que es basicamente lo que se escribe dentro del recuadro de la variable input tarea y el trim lo que hace es quitar los espacios de delante y de detras de la variable o que no sea posible escribir solo espacios

    // en el if lo que hacemos es basicamante poner que si la variable tar (lo que se escribe dentro del input tarea) no es vacio (osea que no haya nada escrito) se tiene que ejecutar todo lo que hay dentro de las llaves (osea se crea la lista, el boton de eliminar, etc.)
    if (tar !== "") {
        // con estas tres lineas se crea la lista en el ul (se define la variable li y se crea con create element luego se dice que la variable li contiene o se asigna a la variable tar y por ultimo se le asigna a la variable lista guardada unos hijos que son los li)
        let li = document.createElement("li");
        li.textContent = tar;
        listaGuardada.appendChild(li);
        //fin

        //con estas dos se crea el boton de eliminar (se define la variable boton de eliminar ye se crea con create element) despues se pone lo que debe de poner dentro del boton por que sino no se vera nada
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        //fin

        deleteBtn.onclick = function() {
            li.remove();
        }; // Esta es la funcion para que el boton de eliminar funciona

        li.appendChild(deleteBtn); //con esto añadimos el boton de eliminar a la lista que se va creando (a cada una de las tareas)
        
        inputTarea.value = ""; //esto es para que cada vez que le des a añadir tarea se vacie el recuadro del texto donde la escribes
    }
}
//fin de la funcion

// con esto se crea el elemento del boton del enter para poder pulsarlo y se vincula con el boton de añadir tarea
let addTareaButton = document.getElementById("ad");
//fin 

//esto es ña funcion que cuando se presiona la tecla enter se ejecute el añadir tarea con todas las consecuencias del codigo de antes
inputTarea.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTarea()
    }
})
//fin

