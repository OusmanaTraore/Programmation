//  GET the text from the input and prompt it ten times


function OK(){
    for (let index = 1; index <= 10; index++) {
        let element = document.getElementById ('prompt').value;
        // return element;
    // let element = prompt (newName);
    document.getElementById('prompt_result').innerHTML = element;
    document.getElementById('prompt_result').style.color = "green";
    document.getElementById('prompt_result').style.fontFamily = "Time News Roman";
    document.getElementById('prompt_result').style.fontSize = "200";
    console.log(element);
    // return element;
}

}

