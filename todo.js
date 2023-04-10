let todo_container = document.getElementById("unordlist");

let todolist = [{
        text: "Learn HTML",
        uniq_num: 1
    },
    {
        text: "Learn CSS",
        uniq_num: 2
    },
    {
        text: "Learn javascript",
        uniq_num: 3
    }
];

function togle(i1, l1) {


    let labelboxid = document.getElementById(l1);

    labelboxid.classList.toggle("checked");

}


function deleteEle(t1) {

    let todo_id = document.getElementById(t1);
    todo_container.removeChild(todo_id);
}








function todofn(t) {


    let labelid = "label" + t.uniq_num;
    let inpid = "checkbox" + t.uniq_num;
    let toeleid = "element" + t.uniq_num;


    let todo_element = document.createElement("li");
    todo_element.classList.add("d-flex", "flex-row");
    todo_container.appendChild(todo_element);
    todo_element.id = toeleid;

    let inp = document.createElement("input");
    inp.type = "checkbox";
    inp.id = inpid;
    inp.classList.add("check");
    todo_element.appendChild(inp);

    inp.onclick = function() {
        togle(inpid, labelid);
    };


    let div = document.createElement("div");
    div.classList.add("todo-text", "list", "d-flex", "flex-row");
    todo_element.appendChild(div);

    let label = document.createElement("label");
    label.setAttribute("for", "checkbox" + t.uniq_num);
    label.classList.add("label1");
    label.id = labelid;

    label.textContent = t.text;
    div.appendChild(label);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("trash");
    div.appendChild(deleteIconContainer);


    deleteIconContainer.onclick = function() {
        deleteEle(toeleid);
    };


    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);

}

for (let t of todolist) {
    todofn(t);
}


function addElement() {

    let textcont = document.getElementById("input_text");
    let textcon = textcont.value;
    let count = todolist.length + 1;
    let newtodolist = {
        text: textcon,
        uniq_num: count
    };


    todofn(newtodolist);
}



let addbutton = document.getElementById("add");
addbutton.onclick = function() {
    addElement();
}