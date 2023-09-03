function detectDevice() {
    var userAgent = navigator.userAgent;

    if (userAgent.match(/iPhone/i)) {
        return "mobile";
    } else if (userAgent.match(/iPad/i)) {
        return "tablet";
    } else if (userAgent.match(/Android/i)) {
        return "mobile";
    } else {
        return "desktop";
    }
}

var detectedDevice = detectDevice();
// var cssLink = document.getElementById("css-link");
// cssLink.href = "./style/" + detectedDevice + "-styles.css";
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("device").textContent = detectedDevice;
});