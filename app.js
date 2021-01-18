/*score variable */
let userScore = 0;
let compScore = 0;
/*dom variable so dont need to keep mentioning getelementbyid again put it inside variable*/
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
/*use query selector instead getelement by id because it is in div class not id  */
const scoreBoard_div = document.querySelector(".score-board");
/* use > p because the value inside result is in p  */
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const sci_div = document.getElementById("sci");
/* always create the program inside a main function then call the function at the end*/
/* calculator variable */
const calresult_p = document.querySelector(".cal-result > p");
const plus_div = document.getElementById("plus");
const minus_div = document.getElementById("minus");
const multiply_div = document.getElementById("multiply");
const division_div = document.getElementById("division");
var operator = "";

function main(){
    /*event listener for every click on rock, paper and scisors abd call the function as usual */
    /*try it first using console.log to make sure that when it click it works as normal and execute the function */
    /*afer the checking is working than input the function that want to get executed when they clicked the button and take 1 value for each rock press, paper and scissors */
    rock_div.addEventListener('click', function(){
        game("rock");
    })
    paper_div.addEventListener('click', function(){
        game("paper");
    })
    sci_div.addEventListener('click', function(){
        game("sci");
    })
}
/*create the game fucntion that is going to get executed and as always check with console.log first to make sure it work */
/*  when console.log work then start putting the function */
function game(theChoice){
    const theCompChoice = compChoice();
    /* i use switch statement because there is only 3 possible result win lose or draw with a lot of posibility */
    switch (theChoice + theCompChoice){
        /**first set for how the user win  */
        /* if win then execute win function if loss execute loss and draw function */
        case "rocksci":
        case "paperrock":
        case "scipaper":
            /* put the value that user input and comp input inside the function so it can display in the htmlnot just a function */
            win(theChoice, theCompChoice);
            break;
        /**the opposite mean the user lost because the first is userchoice then computer */
        case "scirock":
        case "rockpaper":
        case "papersci":
            loss(theChoice, theCompChoice);
            break;
        /* if the chance is not there mean that it is a tie or same pick */
        default:
            draw(theChoice, theCompChoice);
            break;
        /* try logging first to make sure it is work because input it inside the queryselector and the result  */
        /* after logging is work then just put it inside html inside id and query */
    }

};
/* create a function for the random computer choice for rock paper scisors game */
function compChoice(){
    const choices = ["rock", "paper", "sci"];
    /* the way random number work is never hit 1 so times 3 mean random number from 0 until 3 so this random number can call from 0,1,2  */
    /* random value always a really big decimal that is why use round function called floor to round the number */
    /* after all the code work by logging as usual then put this function inside variable */
    const randomNum = Math.floor(Math.random() * 3 );
    /* and then return the value that is inside the first array which is 3 value on random index from 0-2 */
    return choices[randomNum];
}
// to convert the word that is going inside the html because the letter is not an exact word to print it is just variable
function convertWord(letter){
    if(letter == "rock") return "Rock";
    if(letter == "paper") return "Paper";
    return "Scissors";
}

// set the condition when the user win from the switch case
function win(user, computer){
    /* increase user score */
    userScore++;
    // input the score
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    /* user and computer value need to be converted first because the value for scisors is just sci  */
    /* for the result use ` at first and ` at end to make all the variable string and to call a variable use ${thevariable} */
    result_div.innerHTML = `${convertWord(user)}   beats   ${convertWord(computer)}  . You win`;
}
// set the condition where the user loss
function loss(user, computer){
    /*increase computer score */
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertWord(user)}   got beaten by  ${convertWord(computer)}  . You loss`;

}
// set the condition where it is draw
function draw(user, computer){
    result_div.innerHTML = `${convertWord(user)}   and  ${convertWord(computer)} is the same . It's  a draw`;

}

/* Calculator function */


function calmain(){
    // this is to handle the operator that are getting clicked and give back the operator value from the button
    plus_div.addEventListener('click', function(){
        operatorChange("plus");
    })
    minus_div.addEventListener('click',function(){
        operatorChange("minus");
    })
    multiply_div.addEventListener('click',function(){
        operatorChange("multiply");
    })
    division_div.addEventListener('click',function(){
        operatorChange("division");
    })
}
// change the operator to the operator that has been clicked
function operatorChange(theop){
    operator = theop;
}
// create the actual calculator 
function calculator(){
    // variable for the input value and it is inside the function so everytime the function get executed the number got changed it would know
    let theNum1 = parseFloat(document.getElementById("num1").value);
    let theNum2 = parseFloat(document.getElementById("num2").value);
    // count bas on the operator and then went into the calculation for 4 operator
    if (operator == "plus"){
        theplus(theNum1,theNum2);
    }else if (operator == "minus"){
        theminus(theNum1,theNum2);
    }else if (operator == "multiply"){
        themultiply(theNum1,theNum2);
    }else{
        thedivision(theNum1,theNum2);
    }
}
// create the plus operation when get executed
function theplus(n1,n2){
    // calculate the value
    resultt = n1 + n2;
    // print the value inside html
    calresult_p.innerHTML = `The result of ${n1} plus ${n2} is ${resultt}`;
}
// minus condition when get executed
function theminus(n1,n2){
    resultt = n1 - n2;
    calresult_p.innerHTML = `The result of ${n1} minus ${n2} is ${resultt}`;
}
// multiply condition when get executed
function themultiply(n1,n2){
    resultt = n1 * n2;
    calresult_p.innerHTML = `The result of ${n1} multiply by ${n2} is ${resultt}`;
}
// division condition when get executed
function thedivision(n1,n2){
    resultt = n1 / n2;
    calresult_p.innerHTML = `The result of ${n1} divided ${n2} is ${resultt}`;
}

/* For Lorem Ipsum */

// lorem text in here from random word and maximum of 9 paragraph
const text = [`Jack weigh anchor crimp man-of-war fathom come about rigging long boat transom barkadeer. Spirits matey knave provost Jolly Roger red ensign ahoy crack Jennys tea cup draught Pieces of Eight. Scuppers gibbet heave to nipperkin stern booty Privateer brigantine yardarm doubloon. `
, `Marooned scuppers haul wind hempen halter cackle fruit pirate nipperkin mizzenmast bilge rat topsail. Reef sails Pirate Round quarterdeck dance the hempen jig schooner ballast aft chantey ho gun. Piracy pinnace pink weigh anchor pressgang pillage.`
, `Doubloon clipper bilge water strike colors gabion loot barkadeer boatswain holystone maroon. Arr Jolly Roger hornswaggle Brethren of the Coast parrel wherry hang the jib jack Sail ho coxswain. Gibbet fire ship quarter man-of-war run a rig sutler Blimey coffer Davy Jones'.`
,`Lass scuttle yo-ho-ho clipper hogshead heave down gally scourge of the seven seas jury mast deadlights. Run a shot across the bow sutler quarterdeck gunwalls reef sails bilge six pounders list hardtack ho. Fathom bilge rat dance the hempen jig log skysail cackle fruit wherry lee league mizzen.`
,`Squiffy rope's end pinnace bring a spring upon her cable barkadeer Letter of Marque Privateer heave down lad hardtack. Sheet bucko Brethren of the Coast coffer ho line bring a spring upon her cable nipper draught Yellow Jack. Provost fluke broadside gabion heave down spirits hearties heave .`
,`Grapple dance the hempen jig killick brigantine Plate Fleet American Main red ensign ye starboard gun. Shrouds gun keel crow's nest lad lass Sail ho lugger salmagundi Pirate Round. Admiral of the Black league rope's end barque Jack Tar main sheet lugger long boat aye Sail ho. `
,`Warp jack Plate Fleet Spanish Main shrouds stern brig schooner spyglass bowsprit. Hornswaggle hang the jib scallywag Blimey furl knave trysail league lugger red ensign. Loot bounty starboard clap of thunder jib grog lanyard long boat Letter of Marque hearties. Cutlass jib doubloon pillage Corsair .`
,`Scourge of the seven seas grog blossom plunder Blimey lugsail Brethren of the Coast coffer provost overhaul starboard. Brigantine crimp spanker driver sutler log coffer rope's end man-of-war clap of thunder. Crow's nest ahoy Davy Jones' Locker American Main keel stern belay ballast yardarm weigh anchor. `
, `Loot broadside red ensign fluke hands skysail coxswain haul wind squiffy long boat. Draft gun crimp doubloon weigh anchor ye spirits cog dead men tell no tales nipper. Interloper long boat gangplank lad coxswain swing the lead tack man-of-war dead men tell no tales square-rigged. Jack Barbary Coast.`
];
// global variable that is needed to be save
const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text')
// for the add evene listener in each action
function forLorem(){
    // in this lorem ipsum used form for the input
    //execute when submit got clicked inside the form 
    form.addEventListener('submit', function(e){
        // this use the button type submit so prevent default to make sure the button can be pressed multiple time with different updated value
        e.preventDefault();
        // to take the value and store it 
        const value = parseInt(amount.value);
        // for the random number this random is used to pick random text inside the text array and of maximum of the length and it will take the random value 
        const random = Math.floor(Math.random() * text.length);

        //paragraph maximum form 0-9 so make the if to make sure is number, not negative, and is not more than 9 because more than 9 it is too many 
        if(isNaN(value) || value < 0 || value > 9){
            // it will print a random paragraph from the text but only 1 paragraph and put it inside inner html result 
            result.innerHTML = `<p class="result"> ${text[random]}</p>`;
        }
        else{
            // use slice to take the random paragraph from the text array from index 0 until the input value which is how many paragraph 
            let temptText = text.slice(0,value);
            // use map to print every element inside the array slice and print it to html in each different paragraph so each one array 1 paragraph 
            temptText = temptText
                .map(function(item){
                    return `<p class="lorem-txt">${item}</p> <br>`;
                })
                // after 1 element got printed inside the html use join to join each paragraph and combine it into 1 
                .join("");
            // and then tempttext that has been created put it inside innerhtml  result
            result.innerHTML = temptText;
        }
    });
}
/*to change the username function */
function changeuser(){
    let username = document.getElementById("username").value;
    const theuser = document.getElementById("user-lab");
    theuser.innerHTML = username;
}

/*for todo list function */
// global variable 
const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');
// to create the item when they create new list and print it inside html using item class to store their data 
class item{
    // create the constructor containing the name of the to do list 
    constructor(itemName){
        // create the item div got executed to create the function 
        this.createDiv(itemName);
    }
    // the function to create element and the value input 
    createDiv(itemName){
        // create the input elememt give the value and add the class and type 
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        // create div element and then put item for the class
        // this is to create all the same from the html example to create the list 
        /*<div class="item">
            <input type="text" class="item_input" disabled>
            <input type="button" class="editButton" value="Edit">
            <input type="button" class="removeButton" value="Remove">
        </div> to create this div function */
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');
        // append all it in the last for all itembox input and button
        container.appendChild(itemBox);        
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        // to add event per button that is going to get executed it is edit and removed  button 
        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }
    // set the edit function to make sure it is editable by make it not disabled 
    edit(input){
        input.disabled = !input.disabled;
    }
    // remove the object
    remove(item){
        container.removeChild(item);
    }
}
// to input the value into the class item that is inputed 
function check(){
    // check if not null 
    if(input.value != ""){
        new item (input.value);
        // after input then make the slot null again 
        input.value = "";
    }
}
// the addbutton in click run check 
addButton.addEventListener('click', check)

// CHange Grade
// the function take the input id and the id that is going to change
function changegrade(id, inputid){
    //variable for the id
    let thegrade = document.getElementById(id).value;
    // check if it empty ot more than 100 then invalid result
    if(thegrade != "" && thegrade < 101){
        // count for A until F just fyi it is from my reference so in president university might be different
        if(thegrade > 90){
            realgrade = "A";
        }else if (thegrade > 85){
            realgrade = "A-";
        }else if (thegrade > 80){
            realgrade = "B+";
        }else if(thegrade > 75){
            realgrade = "B";
        }else if(thegrade > 70){
            realgrade = "B-";
        }else if(thegrade > 65){
            realgrade = "C+";
        }else if(thegrade > 60){
            realgrade = "C";
        }else if (thegrade > 49){
            realgrade = "D";
        }else{
            realgrade = "F";
        }
    }else{
        realgrade = "Invalid Grade";
    }
    // put the result inside html using the input id 
    document.getElementById(inputid).innerHTML = realgrade

}
// DOM Function for search bar
$(document).ready(function(){
    // create function that will keep happen as key being pressed this is used to search from a data and dollar sign to input the id for the reference like document getelementby id
    $("#myInput").on("keyup", function() {
    // variable for the this value and put it all in lowercase
    var value = $(this).val().toLowerCase();
    // check in my table id and the  table row and use filter 
$("#myTable tr").filter(function() {
    // use toogle mean if the text from the input is not same as the value inside the row then the row will be remove and make all value inside the table also in lowercase so it is not case sensitive
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
});
// students data for id and no telp inside object that i created manually
var students =[
    {
        "firstName": "Epafroditus",
        "no tel":"6289647590083",
        "ID":"0008565987"
    },
    {
        "firstName": "Tiara",
        "no tel":"6281217048108",
        "ID":"0002565987"
    },
    {
        "firstName": "Annisa",
        "no tel":"6289614369049",
        "ID":"002623265"

    },
    {
        "firstName": "Salman",
        "no tel":"6281211588547",
        "ID":"232665666"

    },
    {
        "firstName": "Christian",
        "no tel":"6281212158678",
        "ID":"00023262626"

    },
    {
        "firstName": "Iqbal",
        "no tel":"6281218645569",
        "ID":"02326262"

    },
    {
        "firstName": "Paulus",
        "no tel":"6281260899868",
        "ID":"0000623662"

    },
    {
        "firstName": "Yudhistira",
        "no tel":"6281264453414",
        "ID":"000232326"

    },
    {
        "firstName": "Arief",
        "no tel":"6281267900068",
        "ID":"0003326"

    },
    {
        "firstName": "Shinta",
        "no tel":"6281295397385",
        "ID":"000033262"

    }
];

// loookup to take the gloval variable and execute search function and print the result inside html
function lookup(){
    let userinputname= document.getElementById("name1").value;
    let userinputprop = document.getElementById("prop1").value;
    let loookupres = document.getElementById("lookupres");
    let theresult = lookUpProfile(userinputname,userinputprop);
    loookupres.innerHTML = theresult; 

}
// search function
function lookUpProfile(name,prop){
    // for loop to search the name if inside the data
    for(var n=0;n<students.length;n++){
        // execute if the name of the data is the same with the input
        if(students[n].firstName.toLowerCase() == name.toLowerCase()){
            // if the property is no telp then execute the phone number code and the href link
            if(prop == "no tel" ){
                return ` The phone number is ${students[n][prop]}<br>  <a href="https://api.whatsapp.com/send/?phone=${students[n][prop]}&text&app_absent=0" target="_blank" class="link">Whatsapp me?</a>`;
            }
            // execute if the propety is the same as id 
            else if( prop == "ID"){
                return ` The student ID is ${students[n][prop]}`;
            }else{
                // there is no other object that can be called then default return
                return "No Such Prop";
            }

        }
    }
    // if the for loop end and there is not same name as the objects.
    return "No Such name";
}


// call function
forLorem()
calmain()
main()





