// Create your own valid HTML file named "bom.html" including basic head meta tags and a title.
// Create a corresponding CSS file and JS file and place them in appropriate folders within the lesson folder.
// Use the following codepen.io to provide the basic HTML guts of the input and output areas of the app along with some basic CSS: BOM Top 25 (Links to an external site.)
// Create three variables that hold references to the input, button, and list elements using const.
// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
// Example:  button.addEventListener('click', function() { ...
// In the function block for adding a chapter, make sure the input is not blank and if not, do the following:
// create an li element
// create a delete button
// populate the li elements textContent or innerHTML with the input
// populate the button textContent with an ❌
// append the li element with the delete button
// append the list element with the li element just created and appended with text and the delete button
// add an event listener to the delete button that removes the li element when clicked
// send the focus to the input element
// clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.


const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function() {
    const li = document.createElement("li");
    const button2 = document.createElement("button");
    li.innerHTML = input.value;
    button2.innerHTML = "❌";
    li.append(button2);
    list.append(li);
    button2.addEventListener("click", deleteItem);
    cleanInput();
    

})

function deleteItem (){
   const lipadre = (this).parentNode.remove();
   input.focus();
}

function cleanInput(){
    input.focus();
    input.value = ""
}