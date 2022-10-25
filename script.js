function joinWeb() {
    document.getElementById("sin-input").value = 0;

    var sinX = document.getElementById("sin-input").value;
    document.getElementById("sin-result").innerHTML = '<p style="font-size: 35px">=' + sin(sinX) + '</p>';
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

joinWeb()

$("#sin-input").on("propertychange change paste input", function() {
    var sinX = document.getElementById("sin-input").value;
    document.getElementById("sin-result").innerHTML = '<p style="font-size: 35px">=' + sin(sinX) + '</p>';
});