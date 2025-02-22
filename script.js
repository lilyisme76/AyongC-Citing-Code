
// Reference: https://www.w3schools.com/howto/howto_css_buttons.asp

document.addEventListener("DOMContentLoaded", function() {
    const replayDrawButton = document.getElementById("replayDrawing");
    const generatePatternButton = document.getElementById("generatePattern");


replayDrawButton.addEventListener("click", function() {
        replayDrawing(); 
    });

    generatePatternButton.addEventListener("click", function() {
        generateRandomPattern(); 
    });
});
