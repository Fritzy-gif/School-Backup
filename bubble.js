function bubbleSort(){
    var i, j;
    var swapped = false;

    for (i = 0; i < ulArray.length; i++){

        let swapped = false;

        for (j = 0; j < ulArray.length; j++){

            if (ulArray[j]<ulArray[j+1]){
                var tempValue = ulArray[j];
                ulArray[j] = ulArray[j+1];
                ulArray[j+1] = tempValue;
                swapped = true;
            }
            
        }

        if(!swapped){
            break;
        }
    }
    document.getElementById("output").innerHTML = ulArray.toString();
}

var ulArray = [1,7,5,2,11,4,10];