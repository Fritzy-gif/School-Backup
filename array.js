function array(){
    //setting the arrays
    var arrayToFill = []; //we're going to populate this array...
    let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] //with this array's numbers!

    //Function to randomize numberArray - in doing so, we can just put the already randomized elements into arrayToFill with no repeats
    function randomize(array) {
        //let the variable currentIndex be equal to the length of an array (general array)
        //as well as letting it be equal to the variables tempValue and randIndex
        var currentIndex = array.length, randIndex, temp;
      
        //While there are still elements within the array
        while (0 !== currentIndex) {
      
          // Pick one of those elements
          randIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element -- hence randomizing the array
          //and since the array randomizes through swaps, this ensures unique values
          temp = array[currentIndex];
          array[currentIndex] = array[randIndex];
          array[randIndex] = temp;
        }
      
        return array;
      }

    numberArray = randomize(numberArray); //apply the randomize() function to numberArray, randomizing it


    //this FOR loop takes the newly randomized numberArray
    //and takes it's first 10 elements and makes them arrayToFill's elements
    for (index = 0; index < 10; index++) {
        arrayToFill[index] = numberArray[index];
    };
    
    //display arrayToFill as a string
    document.getElementById('output').innerHTML = arrayToFill.toString();
}