let saveFile = function() {
    //setting variables for the name of the txt file and it's contents
    var title = document.getElementById('txtTitle');
    var content = document.getElementById('txtContent');

    //let txtFile_data be the value of the variable 'content'
    let txtFile_data = content.value;

    //create a variable that creates a new Blob that holds the data from the variable txtiFile_data
    //Blobs can hold raw data that won't be changed - it can be displayed as text or binary data
    //In this case, the Blob is displaying the content of txtFile_data as text
    var textToBlob = new Blob([txtFile_data], {type: 'text/plain'});
    //Create the variable txtFile_name that holds the value of the variable 'title'
    var txtFile_name = title.value;

    //make a another new variable and let it be the newly created element 'a'
    //<a> is a tag that defines a hyperlink
    let newLink = document.createElement('a');
    //download the variable txtFile_name
    newLink.download = txtFile_name;

    
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBlob);
    }
    else {
        newLink.href = window.webkitURL.createObjectURL(textToBlob);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();

    }