/**
 * Created by corneliusgriegdahling on 30/10/15.
 */
window.addEventListener("load",start);

var tasks = [];
var x = "";
var oneIsChecked = false;

function start(){
    document.getElementById('new_task_button').addEventListener("click",buttonClicked);
    document.getElementById('removeAll').addEventListener("click", removeAllSlowly);
}

function buttonClicked(){
    var input = document.getElementById('input').value;
    input = input.replace(/<(?:.|\n)*?>/gm, '');
    var table = document.getElementById('table');
    if (input != "" && tasks[tasks.length-1] != input){
        tasks.push(input);
    }
    addItem();
    return tasks;
}


function addItem(){
    var table = document.getElementById('table');
    if (table.rows.length != 0) {
        if (tasks[tasks.length - 1] != x && tasks.length != 0){
            x = tasks[tasks.length-1];
            var rowCount = table.rows.length;
            var newRow = table.insertRow(rowCount);
            var cell = newRow.insertCell(0);
            var cell1 = newRow.insertCell(1);
            cell1.innerHTML = '<input class="check" type="checkbox" onchange="removeSlowly()">';
            cell.innerHTML = tasks[tasks.length-1];
        }
        x = tasks[tasks.length-1];
    }
    else if(tasks.length != 0){
        var rowCount = table.rows.length;
        var newRow = table.insertRow(rowCount);
        var cell = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        cell1.innerHTML = '<input class="check" type="checkbox" onchange="removeSlowly()">';
        cell.innerHTML = tasks[tasks.length-1];
        x = tasks[tasks.length-1];
    }
}

function removeSlowly(){
    window.setTimeout(removeSelected, 300);
}


function removeSelected(){
    var table = document.getElementById('table');
    var checkboxList = document.getElementsByClassName("check");
    for (var i = 0; i < checkboxList.length; i++){
        if (checkboxList[i].checked == true){
            oneIsChecked = true;
        }
        if (i == checkboxList.length && checkboxList[i].checked == false){
            oneIsChecked = false;
        }
    }
    var btn = document.getElementById('removeSelected');
    var array = [];
    btn.onclick = function() {
        for (var i = 0; i < checkboxList.length; i++){
            if (checkboxList[i].checked == true){
                array.push(i);
                table.deleteRow(i);
                i -= 1;
            }
        }
    }

   
}

function removeAllSlowly(){
    window.setTimeout(removeAll, 300);
}

function removeAll(){
    var table = document.getElementById('table');
    if (table.rows.length != 0) {
        table.innerHTML = "";
        tasks = [];
    }
}



