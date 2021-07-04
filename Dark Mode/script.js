const cssDay = document.styleSheets[0];
const cssNight = document.styleSheets[1];
const changeModeButton = document.getElementById('dark-mode');

var isDarkMode = false;
cssDay.disabled = false;
cssNight.disabled = true;

function changeMode(){
    if (isDarkMode == false){
        cssDay.disabled = true;
        cssNight.disabled = false;
        isDarkMode = true;
        changeModeButton.innerHTML = 'Switch to Light Mode';
    }
    else {
        cssDay.disabled = false;
        cssNight.disabled = true;
        isDarkMode = false;
        changeModeButton.innerHTML = 'Switch to Dark Mode';
    };
};

changeModeButton.addEventListener('click', changeMode);