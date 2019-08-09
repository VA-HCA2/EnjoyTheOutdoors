"use strict";
window.onload = function () {

    let states= [ "Alabama", "Alaska","American Samoa","Arizona", "Arkansas","California","Colorado","Connecticut", "Delaware","DC", "Florida",
    "Georgia","Guam","Hawaii", "Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota","Mississippi", "Missouri", "Montana","Nebraska", "Nevada","New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio","Oklahoma","Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island","South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah","Vermont", "Virgin Islands", "Virginia","Washington", "West Virginia","Wisconsin", "Wyoming" ]
   
    let parksName=  [ "National Park","National Monument","Recreation Area","Scenic Trail","Battlefield","Historic", "Memorial",    
        "Preserve","Island","River","Seashore","Trail","Parkway"]

    // Get my HTML Elements by ID
    let mydropDown = document.getElementById("locationddl");
    let mydropDown2 = document.getElementById("parkddl");
    let mytable = document.getElementById("tableLocation")

    let objs;
    //Get JSON FOLDER/FILE NAME
    $.getJSON("data/nationalparks.json", function (data) {

        objs = data;

        
       /*for (let i = 0; i < states.length; i++) {
            let mt = states[i];
            let element = document.createElement("option");
            element.text = mt;
            element.value = mt;
            mydropDown.appendChild(element);

        }*/

        for (let i = 0; i < parksName.length; i++) {
            let mt = parksName[i];
            let element = document.createElement("option");
            element.text = mt;
            element.value = mt;
            mydropDown2.appendChild(element);

        }
    })

  /* mydropDown.onchange = function () {
      
        // this where I write code that runs when the user picks something from the list box 

        // Get the moutain the user selects (same as select.index);
        let locationSelection = mydropDown.value;

        //Clean the table 
        document.getElementById("tableLocation").innerHTML = "";

        // ---------- Create Header ---------- 
        var table = document.getElementById("tableLocation");
        var header = table.createTHead();
        // Lenght of the table so we can put our header 
        var row = header.insertRow(table.rows.length);
        // Two cell since we have Title and Price
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let cell5 = row.insertCell(5);
        let cell6 = row.insertCell(6);
        //  Put the titles 
        cell0.innerHTML = "<b>Location Name</b>"
        cell1.innerHTML = "<b>Address</b>"
        cell2.innerHTML = "<b>City</b>"
        cell3.innerHTML = "<b>State</b>"
        cell4.innerHTML = "<b>Zip Code</b>"
        cell5.innerHTML = "<b>Phone</b>"
        cell6.innerHTML = "<b>Fax</b>"

        // Loop thru the JSON Data to find the mountain 
        for (let i = 0; i < objs.parks.length; i++) {
            if (locationSelection == objs.parks[i].State) {
                let row = mytable.insertRow(mytable.rows.length)

                cell0 = row.insertCell(0);               
                cell0.innerHTML = objs.parks[i].LocationName;

                cell1 = row.insertCell(1);
                cell1.innerHTML = objs.parks[i].Address;

                cell2 = row.insertCell(2);
                cell2.innerHTML = objs.parks[i].City;

                cell3 = row.insertCell(3);
                cell3.innerHTML = objs.parks[i].State;

                cell4 = row.insertCell(4);
                cell4.innerHTML = objs.parks[i].ZipCode;

                cell5 = row.insertCell(5);
                cell5.innerHTML = objs.parks[i].Phone;

                cell6 = row.insertCell(6);
                cell6.innerHTML = objs.parks[i].Fax;
            }
        }
   } */

    mydropDown.onchange = function () {
      
        // this where I write code that runs when the user picks something from the list box 

        // Get the Parks the user selects (same as select.index);
        let locationSelection2 = mydropDown2.value;

        //Clean the table 
        document.getElementById("tableLocation").innerHTML = "";

        // ---------- Create Header ---------- 
        var table = document.getElementById("tableLocation");
        var header = table.createTHead();
        // Lenght of the table so we can put our header 
        var row = header.insertRow(table.rows.length);
        // Two cell since we have Title and Price
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let cell5 = row.insertCell(5);
        let cell6 = row.insertCell(6);
        //  Put the titles 
        cell0.innerHTML = "<b>Location Name</b>"
        cell1.innerHTML = "<b>Address</b>"
        cell2.innerHTML = "<b>City</b>"
        cell3.innerHTML = "<b>State</b>"
        cell4.innerHTML = "<b>Zip Code</b>"
        cell5.innerHTML = "<b>Phone</b>"
        cell6.innerHTML = "<b>Fax</b>"

        // Loop thru the JSON 
        for (let i = 0; i < objs.parks.length; i++) {

            if (objs.parks[i].LocationName.toLowerCase().indexOf(mydropDown2.text.toLowerCase())>=0);
             {

                let row = mytable.insertRow(mytable.rows.length)

                cell0 = row.insertCell(0);               
                cell0.innerHTML = objs.parks[i].LocationName;

                cell1 = row.insertCell(1);
                cell1.innerHTML = objs.parks[i].Address;

                cell2 = row.insertCell(2);
                cell2.innerHTML = objs.parks[i].City;

                cell3 = row.insertCell(3);
                cell3.innerHTML = objs.parks[i].State;

                cell4 = row.insertCell(4);
                cell4.innerHTML = objs.parks[i].ZipCode;

                cell5 = row.insertCell(5);
                cell5.innerHTML = objs.parks[i].Phone;

                cell6 = row.insertCell(6);
                cell6.innerHTML = objs.parks[i].Fax;
            }
        }
    } 
}