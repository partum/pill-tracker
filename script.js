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
    document.getElementById("entries").lastElementChild.appendChild(newtime); 
    //get the wait time and calculate next dosage time
    var elem = document.createElement("time");
    var hours = document.getElementById("input-number").value; 
    var addTime = parseInt(time.slice(0,2)) + parseInt(hours); 
    time = addTime + time.slice(2,5);
    var node = document.createTextNode("Next dosage at " + time);
    elem.append(node);
    document.getElementById("entries").lastElementChild.appendChild(elem);
    //create count down
    var elem = document.createElement("time");
    elem.setAttribute("id", med)
    var node = document.createTextNode(hours+":00:00");
    elem.append(node);
    document.getElementById("entries").lastElementChild.appendChild(elem);
    //timer
    miliTime = hours * 60 * 60 * 1000; 
    //how can I give each entry a unique timer
    //how can I make the time display as 5:04 and not 5:4
    setInterval(function(){
        var hh = Math.floor((miliTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mm = Math.floor((miliTime % (1000 * 60 * 60)) / (1000 * 60));
        var ss = Math.floor((miliTime % (1000 * 60)) / 1000);
        document.getElementById(med).innerHTML = hh + ":" + mm + ":" + ss;
        miliTime -= 1000;
    }, 1000);
    //get rid of form and bring back add button
    document.getElementById("add").style.visibility = "visible";
    document.getElementById("addForm").style.visibility = "hidden"; 
    
    
}

function countDown(miliTime){
    var hh = Math.floor((miliTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((miliTime % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((miliTime % (1000 * 60)) / 1000);
    miliTime = miliTime - 1000; //issue here
    return miliTime;
}

//test
function test(){
    console.log("hi");
    timeSec = 10;
}
//setInterval(countDown, 1000);

//make a timer

// setInterval(function(){
//     console.log(timeSec)
//     timeSec -= 1;
// },1000)