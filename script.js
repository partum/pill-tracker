//makes the button invisible and the form visible
function changeVisibility(){
    document.getElementById("add").style.visibility = "hidden";
    document.getElementById("addForm").style.visibility = "visible";
    
    // //add form
    // var input = document.createElement("form");
    // input.setAttribute("onsubmit","addEntry()");
    // document.getElementById("entries").lastElementChild.appendChild(input);
    // //add lable
    // var lable = document.createElement("lable");
    // var name = document.createTextNode("Medication Name: ");
    // lable.appendChild(name);
    // document.getElementById("entries").lastElementChild.lastElementChild.appendChild(lable);
    // //add name input box (reusing variable input)
    // input = document.createElement("input")
    // input.setAttribute("type","text");
    // input.setAttribute("placeholder","Required");
    // document.getElementById("entries").lastElementChild.lastElementChild.appendChild(input);
    // //add time taken lable
    // var lable = document.createElement("lable");
    // var name = document.createTextNode("Time Taken: ");
    // lable.appendChild(name);
    // document.getElementById("entries").lastElementChild.lastElementChild.appendChild(lable);
    // //add time drop down
    // var lable = document.createElement("select");
}
//adds new pill entry from user input
function addEntry(){
    //add box
    var box = document.createElement("section");
    document.getElementById("entries").appendChild(box);
    //add name of med
    var text = document.createElement("p");
    var med = document.getElementById("med-name").value;
    var name = document.createTextNode(med);
    text.append(name);
    document.getElementById("entries").lastElementChild.appendChild(text);
    //add time taken
    var newtime = document.createElement("time");
    var time = document.querySelector('input[type="time"]').value; //for some reason this works but not getElement by ID
    var timeText = document.createTextNode("Last taken: " + time);
    newtime.append(timeText);
    document.getElementById("entries").lastElementChild.appendChild(newtime); //this conflicts with the first append for no reason
    //document.getElementById("entries").lastElementChild.appendChild(document.createElement("p")); //test
    //get rid of form and bring back add button
    document.getElementById("add").style.visibility = "visible";
    document.getElementById("addForm").style.visibility = "hidden"; 
}
//<input type="text" id="task" name="task" placeholder="Enter your task here and check the boxes to prioritize." required>