function joinWeb() {
    // SIN
    document.getElementById("sin-input").value = 0;

    var sinX = document.getElementById("sin-input").value;
    document.getElementById("sin-result").innerHTML = '<p style="font-size: 35px">=' + sin(sinX) + '</p>';

    // COS
    document.getElementById("cos-input").value = 0;

    var cosX = document.getElementById("cos-input").value;
    document.getElementById("cos-result").innerHTML = '<p style="font-size: 35px">=' + cos(cosX) + '</p>';

    // TAN
    document.getElementById("tan-input").value = 0;

    var tanX = document.getElementById("tan-input").value;
    document.getElementById("tan-result").innerHTML = '<p style="font-size: 35px">=' + tan(tanX) + '</p>';
}


function decimalTheorem(d) {
    var temp = d.length;
    var tempText = d;
    if (d.includes('.') == true) {
        while(true) {
            temp = temp-1;
            if (d.charAt(temp) == 0) {
                tempText = d.substr(0, temp);
            }else if (d.charAt(temp) == "."){
                tempText = d.substr(0, temp);
                break;
            }else{
                break;
            }
        }
    }
    return tempText;
}


// SIN
function sin(X) {
    if (Math.sin(X * Math.PI / 180).toFixed(8) == "NaN") {
        return "null";
    }else{
        if (decimalTheorem(Math.sin(X * Math.PI / 180).toFixed(8)) == -0) {
            return 0;
        }else{
            return decimalTheorem(Math.sin(X * Math.PI / 180).toFixed(8));
        }
    }
}

$("#sin-input").on("propertychange change paste input", function() {
    var sinX = document.getElementById("sin-input").value;
    document.getElementById("sin-result").innerHTML = '<p style="font-size: 35px">=' + sin(sinX) + '</p>';
});


// COS
function cos(X) {
    if (Math.cos(X * Math.PI / 180).toFixed(8) == "NaN") {
        return "null";
    }else{
        if (decimalTheorem(Math.cos(X * Math.PI / 180).toFixed(8)) == -0) {
            return 0;
        }else{
            return decimalTheorem(Math.cos(X * Math.PI / 180).toFixed(8));
        }
    }
}


$("#cos-input").on("propertychange change paste input", function() {
    var cosX = document.getElementById("cos-input").value;
    document.getElementById("cos-result").innerHTML = '<p style="font-size: 35px">=' + cos(cosX) + '</p>';
});

// TAN
function tan(X) {
    var tanResult = sin(X)/cos(X)
    if (tanResult.toFixed(8) == "NaN") {
        return "null";
    }else if (tanResult == Infinity){
        return Infinity;
    }else{
        if (decimalTheorem(tanResult.toFixed(8)) == -0) {
            return 0;
        }else if (decimalTheorem(tanResult.toFixed(8)) == -Infinity){
            return Infinity;
        }else{
            return decimalTheorem(tanResult.toFixed(8));
        }
    }
}


$("#tan-input").on("propertychange change paste input", function() {
    var tanX = document.getElementById("tan-input").value;
    document.getElementById("tan-result").innerHTML = '<p style="font-size: 35px">=' + tan(tanX) + '</p>';
});

joinWeb()