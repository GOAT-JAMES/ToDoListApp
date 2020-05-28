// @ts-ignore: ignoring issue with js-datepicker lack of intellisense
const picker = datepicker("#due-date");
picker.setMin(new Date()); // Set to todays date

class ToDoItem{
    title: string;
    dueDate: Date;
    isCompleted:boolean;

}

/*
let item = new ToDoItem();
item.title = "Testing";
item.dueDate = new Date(2020, 6, 1);
item.isCompleted = false;
*/

/**
 * Check form data is valid
 */
window.onload = function(){
    let addItem = document.getElementById("add");
    addItem.onclick = main;
}

function main(){
    if(isValid()){
        let item = getToDoItem();
        displayToDoItem(item);
    }
}

 function isValid():boolean{
    return true;
}

/**
 * 
 */
function getToDoItem():ToDoItem{
    let myItem = new ToDoItem();
    // get title
    let titleInput = getInput("title");
    myItem.title = titleInput.value;

    // get due date
    let dueDateInput = getInput("due-date");
    myItem.dueDate = new Date(dueDateInput.value);

    // get isCompleted
    let isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;

    return myItem;
}

function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

/**
 * Display the give ToDoItem on the web page
 */
function displayToDoItem(item:ToDoItem):void{
    // ex. <h3>Record JS Lecture </h3>
    
    let itemText = document.createElement("p");
    itemText.innerText = item.title;

    // ex. <p>June 1st 2020</p>
    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();

    // ex. <div class="todo completed"></div> or <div class="todo"></div>
    let itemDiv =document.createElement("div");

    itemDiv.onclick = markAsComplete; 

    itemDiv.classList.add("todo");
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }

    /*
    <div class="completed">
        <h3>Record JS Lecture</h3>
        <p>June 1st 2020</p>
    </div>
    */
    // <div class = "completed"></div>
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if(item.isCompleted){
        let completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }
    else{
        let incompleteToDos = document.getElementById("complete-items");
        incompleteToDos.appendChild(itemDiv);
    }
    
}

function markAsComplete(){
    let itemDiv = <HTMLElement>this;
    itemDiv.classList.add("completed");

    let completedItems = document.getElementById("complete-items");

    completedItems.appendChild(itemDiv);
}

// Task: Allow use to mark a ToDoItem as completed
// Task: store ToDoItems in web storage


