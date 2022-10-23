function joinWeb() {
    document.getElementById("sin-input").value = 0;
}

joinWeb()

$("#sin-input").on("propertychange change paste input", function() {
    var sinX = document.getElementById("sin-input").value;
    document.getElementById("sin-result").innerHTML = '<p style="font-size: 35px">=' + Math.sin(sinX * Math.PI / 180).toFixed(8); + '</p>';
});