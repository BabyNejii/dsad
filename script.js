//Обхващаме нужните елементи в променливи

var new_task = document.getElementById("new-task");
var add_task = document.getElementById("add-task");
var tasks = document.getElementsByClassName("tasks")[0];



//Функция за бутона "Добави задача"

function create(){

    //създаваме div и му добавяме клас

    var task = document.createElement("div");
    task.classList.add("task");



    //Създаваме input елемент и добавяме данни

    var content = document.createElement("input");
    content.type="text";
    content.classList.add("current");
    content.value = new_task.value;
    content.setAttribute("readonly", "readonly");



    //Създаваме бутон редакция

    var ed = document.createElement("edit");
    ed.type = "button";
    ed.classList.add("edit");
    ed.innerHTML = "Редакция";



    //Създаваме бутон изтрий

    var del = document.createElement("delete");
    del.type = "button";
    del.classList.add("delete");
    del.innerHTML = "Изтрий";



    //Вмъкваме документите в елемента

    tasks.appendChild(task);
    task.appendChild(content);
    task.appendChild(ed);
    task.appendChild(del);

}

