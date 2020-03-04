// ##### GENERATE FIGURE BY BUTTON ######

function squareFunction() {

    document.getElementById('squareShape').style.display = 'flex';
    document.getElementById('circleShape').style.display = "none";
    document.getElementById('triangleShape').style.display = "none";
    document.getElementById('heartShape').style.display = "none";
    document.getElementById('output').style.display = "none";

}

function circleFunction() {

    document.getElementById('squareShape').style.display = "none";
    document.getElementById('circleShape').style.display = 'flex';
    document.getElementById('triangleShape').style.display = "none";
    document.getElementById('heartShape').style.display = "none";
    document.getElementById('output').style.display = "none";

} 

function triangleFunction() {

    document.getElementById('squareShape').style.display = "none";
    document.getElementById('circleShape').style.display = "none";
    document.getElementById('triangleShape').style.display = 'flex';
    document.getElementById('heartShape').style.display = "none";
    document.getElementById('output').style.display = "none";

} 

function heartFunction() {

    document.getElementById('squareShape').style.display = "none";
    document.getElementById('circleShape').style.display = "none";
    document.getElementById('triangleShape').style.display = "none";
    document.getElementById('heartShape').style.display = 'flex';
    document.getElementById('output').style.display = "none";

} 

// ##### GENERATE FIGURE BY INPUT #####

function inputValue() {
    var x = document.getElementById('numberOfCorners').value;
    var output = document.getElementById('output');
    var squareShape =  document.getElementById('squareShape');
    var circleShape = document.getElementById('circleShape');
    var triangleShape = document.getElementById('triangleShape');
    var heartShape = document.getElementById('heartShape');

    if ( x  == "") {

        output.style.display = "block";
        output.innerHTML = "Input is empty.";
        squareShape.style.display = "none";
        circleShape.style.display = "none";
        triangleShape.style.display = "none";
        heartShape.style.display = "none";


    } else if ( x == 4 ) {

        squareShape.style.display = "flex";
        circleShape.style.display = "none";
        triangleShape.style.display = "none";
        heartShape.style.display = "none";
        output.style.display = "none";

    } else if ( x == 0 ) {

        squareShape.style.display = "none";
        circleShape.style.display = "flex";
        triangleShape.style.display = "none";
        heartShape.style.display = "none";
        output.style.display = "none";

    } else if ( x == 3 ) {

        squareShape.style.display = "none";
        circleShape.style.display = "none";
        triangleShape.style.display = "flex";
        heartShape.style.display = "none";
        output.style.display = "none";

    } else if ( x == 2 ) {

        squareShape.style.display = "none";
        circleShape.style.display = "none";
        triangleShape.style.display = "none";
        heartShape.style.display = "flex";
        output.style.display = "none";

    } else {
        output.style.display = "block";
        output.innerHTML = "I don't have any figure with " + x + " corners.";
        squareShape.style.display = "none";
        circleShape.style.display = "none";
        triangleShape.style.display = "none";
        heartShape.style.display = "none";
    }

} 