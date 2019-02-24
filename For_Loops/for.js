/**
 * Filename: for.js
 * 
 * ****************************************
 * What is this for?
 * ****************************************
 * This file will read in a list of about 60,000 names defined in a JSON array in another JavaScript file. 
 * Don't worry about how JSON is defined, all you need to know is it's a way of storing lots of data and passing it around.
 * The JSON contains an array of strings inside it, these strings are all first names. Remember, an array is just a collection of 
 * data, and strings are just chara`cters strung together to make text. 
 * 
 * We're going to read in some names, add them to a table on the HTML page that runs this, and then view them! 
 * This should demonstate the use of for loops
 * ****************************************
 * How does it work
 * ****************************************
 * We can access HTML elements from JavaScript using something called the DOM, but don't worry about that. 
 * We're going to read in the JSON, get the array out of it, then run through any number of elements in the array, 
 * and add each element to a table. Each one of these elements in the array is going to be a first name, because that's all
 * that's in the array!
 * 
 * Have a read through each function and all the comments in this order:
 * 1) Line 82 - document.addEventListener("DOMContentLoaded", function(event) 
 * 2) Line 39 - function CreateTable(startRange, endRange)
 * 3) Line 66 - function AddNameToTable(name)
 * 
 * I've suggested this order because it's the order that the code will be called in, and it's good habbit to read through
 * code in the same flow that the computer will read your code. 
 */

/**
 * Adds names from Names.js JSON array to the table on the HTML page. We'll take two parameters,
 * think of them as a start and stop range. e.g. in a phone book, output everything on page 60 - 80. 
 * We're just going to do that with names, output everything located at position startRange - endRange in the array of names.
 * 
 * @param {int} startRange The index of the names you want to start from (e.g. index 0 is from the start, 100 is from the 100th name in the list, 500 is the 500th name in the list)
 * @param {int} endRange The index of the name you want to stop at (800 is from the 800 name in the list, 1000 is the 1000th name in the list)
 */
function CreateTable(startRange, endRange) {

    // This is where we're doing something smart, we're avoiding a crash occuring if a user enters 
    // an end range which is bigger than the number of names we have. If we were to try accessing an 
    // element which is outside the size of our array, we'll get an 'array out of bounds' exception.
    // Can you think of any other issues that might occur here, or can you play around with the params to 
    // make the program crash? It's do-able, trust me! :D 
    if (endRange > names.FirstNames.length) {
        endRange = names.firstNames.length;
    }

    // Acquire an array of strings out of the JSON defined in the 'Names.js' file.
    var firstNames = names.FirstNames;

    // Use a for loop to count through our range, and then add the name at each position.
    for (var nameIndex = startRange; nameIndex < endRange; nameIndex += 1 /* Could also do nameIndex++ to have the same effect*/) {
        AddNameToTable(firstNames[nameIndex]);
    }
}

/**
 * This function accepts a string variable (called name), and adds that to the 
 * table with an ID of "tblNames" on the HTML page. This means we can dynamically 
 * create elements in HTML while JavaScript is running! 
 * 
 * @param {string} name The name that you want to add to the table of data.
 */
function AddNameToTable(name) {    
    var table = document.getElementById("tblNames");
    var row = table.insertRow(table.rows.length);
    row.innerHTML = "<td>" + name + "</td>";
}

/**
 * This is a piece of JavaScript that is run when the JavaScript file 
 * is imported into the HTML document. All it is doing is saying "Hey, when the 
 * HTML file is done loading, run this function. ". We do this so we can
 * ensure that the browser has finished loading all the elements of HTML before we 
 * start running JavaScript which may attempt to use elements on the HTML page.
 * 
 * @param {event} event The event that is fired when the callback is run
 * @return Nothing
 */
document.addEventListener("DOMContentLoaded", function(event) {
    CreateTable(5000, 6000);
});