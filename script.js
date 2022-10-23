function joinWeb() {
    document.getElementById("sin-input").value = 0;

    var sinX = document.getElementById("sin-input").value;
    document.getElementById("sin-result").innerHTML = '<p style="font-size: 35px">=' + sin(sinX) + '</p>';
}

function decimalTheorem(d) {
    var temp = d.length;
    var tempText = "";
    if (d.includes('.') == true) {
        while(true) {
            temp = temp-1;
            if (d.chatAt(temp) == 0) {
                tempText = d.substr(0, temp-1);
            }else{
                break;
            }
        }
    }
    return tempText;
}


function sin(X) {
    return decimalTheorem(Math.sin(X * Math.PI / 180).toFixed(8));
}

joinWeb()

$("#sin-input").on("propertychange change paste input", function() {
    var sinX = document.getElementById("sin-input").value;
    document.getElementById("sin-result").innerHTML = '<p style="font-size: 35px">=' + sin(sinX) + '</p>';
});