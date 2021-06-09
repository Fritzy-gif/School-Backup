var arr = [10, 20, 30, 40, 50];
var len = arr.length;

function forLoop() {
   var i;

   for(i = 0; i < len; i++){
       arr[i] = arr[i] + 10;

       if(i >= len){
           break;
       }
   }

   document.getElementById('output').innerHTML = arr.toString();
}