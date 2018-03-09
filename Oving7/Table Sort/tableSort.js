window.addEventListener("load",loaded);

 function loaded(){
 	document.getElementById("sort-button-1").addEventListener("click",buttonClicked);
 	document.getElementById("sort-button-2").addEventListener("click",buttonClicked);
 	document.getElementById("sort-button-3").addEventListener("click",buttonClicked);
 }


function buttonClicked(){
    if (this.id == "sort-button-1") {
        var map = createObjects(0);
        writeToHTML(map);
    }

    else if (this.id == "sort-button-2") {
        var map = createObjects(1);
        writeToHTML(map);
    }

    else{
        var map = createObjects(2);
        writeToHTML(map);
    }
}

function createObjects(index) {
    var map = [];
    var table = document.getElementById("the-table-body");
    for (var i = 0; i < table.rows.length; i++) {
        map.push({
            value1: table.rows[i].cells[0].innerHTML,
            value2: table.rows[i].cells[1].innerHTML,
            value3: table.rows[i].cells[2].innerHTML});
    }
    map.sort(function(a,b){
        if(index==0){
            if (b.value1 > a.value1) {
                return -1;
            }
            if (a.value1 > b.value1) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else if(index == 1){
            if (b.value2 > a.value2) {
                return -1;
            }
            if (a.value2 > b.value2) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else{
            if (b.value3 > a.value3) {
                return -1;
            }
            if (a.value3 > b.value3) {
                return 1;
            }
            else {
                return 0;
            }
        }
    });
    console.log(map);
    return map;
}


function writeToHTML(array){
    var table = document.getElementById("the-table-body");
    for (var i = 0; i < array.length; i++){
        table.rows[i].cells[0].innerHTML = array[i].value1;
        table.rows[i].cells[1].innerHTML = array[i].value2;
        table.rows[i].cells[2].innerHTML = array[i].value3;
    }
}
