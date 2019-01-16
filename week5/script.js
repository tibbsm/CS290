/**
* @title    script.js
*
* @desc     This file populates the index.html file with a 4x4 table
*           and 5 buttons to move around the table and highlight it. 
*
* @author   Marc Tibbs (933270515)
* @email    tibbsm@oregonstate.edu
* @class    CS290 - 400 - Winter 2018
*/

var tabLoc = document.body;

var newTable = document.createElement("table");
newTable.style.borderCollapse = 'collapse';
tabLoc.appendChild(newTable);

var newHeadRow = document.createElement("tr");
newHeadRow.style.border = '1px solid black';
newHeadRow.style.padding += ' 3px 8px';

for(var i = 1; i <= 4; i++){
    var newHeader = document.createElement("th");
    newHeader.style.border = '1px solid black';
    newHeader.style.padding += ' 3px 8px';
    newHeader.style.textAlign += ' left';
    newHeader.textContent = "Header " + i;
    newHeadRow.appendChild(newHeader);
}
newTable.appendChild(newHeadRow);

for(var i = 1; i <= 3; i++){
    var newRow = document.createElement("tr");
    newRow.style.border = '1px solid black';
    newRow.style.padding += ' 3px 8px';
    for(var j = 1; j <= 4; j++){
        var newCell = document.createElement("td");
        newCell.style.border = '1px solid black';
        newCell.style.padding += ' 3px 8px';
        newCell.style.textAlign += ' center';
        newCell.textContent = j + ", " + i;
        newCell.setAttribute("id", j + "," + i);
        newRow.appendChild(newCell);
    }
    newTable.appendChild(newRow);
}

var up = document.createElement("button");
up.setAttribute("id", "up");
up.style.height += ' 25px';
up.style.top += ' 25px';
up.style.position += ' relative';
up.style.width += ' 51%';
up.textContent = "Up";
up.style.borderRadius += ' 5px';
tabLoc.appendChild(up);

var down = document.createElement("button");
down.setAttribute("id", "down");
down.style.height += ' 25px';
down.style.top += ' 25px';
down.style.position += ' relative';
down.style.width += ' 51%';
down.textContent = "Down";
down.style.borderRadius += ' 5px';
tabLoc.appendChild(down);

var right = document.createElement("button");
right.setAttribute("id", "right");
right.style.height += ' 25px';
right.style.top += ' 25px';
right.style.position += ' relative';
right.style.width += ' 51%';
right.textContent = "Right";
right.style.borderRadius += ' 5px';
tabLoc.appendChild(right);

var left = document.createElement("button");
left.setAttribute("id", "left");
left.style.height += ' 25px';
left.style.top += ' 25px';
left.style.position += ' relative';
left.style.width += ' 51%';
left.textContent = "Left";
left.style.borderRadius += ' 5px';
tabLoc.appendChild(left);

var mark = document.createElement("button");
mark.setAttribute("id", "mark");
mark.style.height += ' 25px';
mark.style.top += ' 35px';
mark.style.position += ' relative';
mark.style.width += ' 51%';
mark.textContent = "Mark Cell";
mark.style.borderRadius += ' 5px';
tabLoc.appendChild(mark);

var row = 2;
var col = 1;
var outline = newTable.firstElementChild.nextElementSibling.firstElementChild;
outline.style.border = '3px solid black';

document.getElementById("up").addEventListener("click", upClick);
document.getElementById("down").addEventListener("click", downClick);
document.getElementById("right").addEventListener("click", rightClick);
document.getElementById("left").addEventListener("click", leftClick);
document.getElementById("mark").addEventListener("click", markClick);


function downClick(event){
    if(row < 4){
        outline.style.border = '1px solid black';
        outline = document.getElementById(col+","+(row));
        outline.style.border = '3px solid black';
        row++;
    }
}

function upClick(event){
    if(row > 2){
        outline.style.border = '1px solid black';
        row--;
        outline = document.getElementById(col+","+(row-1));
        outline.style.border = '3px solid black';
    }
}

function rightClick(event){
    if(col < 4){
        outline.style.border = '1px solid black';
        outline = outline.nextElementSibling;
        outline.style.border = '3px solid black';
        col++;
    }
}

function leftClick(event){
    if(col > 1){
        outline.style.border = '1px solid black';
        outline = outline.previousElementSibling;
        outline.style.border = '3px solid black';
        col--;
    }
}

function markClick(event){
    outline.style.backgroundColor = "yellow";
}
