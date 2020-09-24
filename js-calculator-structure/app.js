function input(button){
    //The text of the button that is clicked will be displayed on the screen
    document.calc.display.value += button.value;
  }
  
  function clearDisplay(){
    //Makes the screen blank
    document.calc.display.value = "";
  }
  
  function enter(){
    //Evaluates the string on the screen as a mathematic equation then displays the answer back on the screen
    document.calc.display.value = eval(document.calc.display.value);
  }
  
  function Average(){
   //Variable to keep track of the sum starting at 0
   var sum = 0
   
   /* Assigning to the list, values passed in the calculator
   /seperated by commas
   */
    listOfNums = document.calc.display.value.split(',')
    
    /*For Loop: Designed to iterate through every "element"
    / in the list in order to add them and create an actual sum.
    */
    for(var i = 0; i < listOfNums.length ; i++){
     //The sum variable is being updated each time the loop
     //starts over. 
     sum  +=  parseInt(listOfNums[i]);
    }
    /*Declaring a variable called average that is assigned the
    /value of the the "sum" over the length of the list 
    /which represents the amount of numbers being used. 
    */
    var average = sum/listOfNums.length;
    
    //Displaying that value on the calculator on your webpage using 
    //the HTML DOM
    document.calc.display.value = average;
  }