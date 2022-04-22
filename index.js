/* TODO 

Add darkening slider
make more readable in vmix


*/




let root = document.documentElement;
window.onload = (t) => {checkLocalStorage()}

//// Check if local Storage is available, make the background red and alert if not.
localStorage.setItem('mod', 'mod');
if (localStorage.getItem('mod') != null){
    localStorage.removeItem('mod');
    root.style.background = "black"
} else {
    alert('no')
    root.style.background = "red"
}
////



function checkLocalStorage() {
    //if local storage image has already been saved, load all local settings
    if (localStorage.getItem('image') != null){
        console.log('something here')
        loadFromLocalStorage()
    } else {
        console.log('nothing here')
    }
}

function reset(){
    localStorage.clear()
    location.reload()
}

function loadFromLocalStorage(){
    let image = localStorage.getItem('image')
    let x = 'url(' + image + ')'
    let bgImage = document.getElementById("image")
    bgImage.style.backgroundImage = x;
    updateFX()

}

let openFile = function(file) {
    let input = file.target;

    let reader = new FileReader();
    reader.onload = function(e){
        let dataURL = reader.result;
        //console.log(dataURL)
        let output = document.getElementById('output')
        //output.src = dataURL;
        let x = 'url(' + dataURL + ')'
        let bgImage = document.getElementById("image")
        bgImage.style.backgroundImage = x;
        //console.log(reader.result)
        localStorage.removeItem('image')
        localStorage.setItem('image', reader.result)
        //console.log(localStorage.getItem('image'))
    };
    reader.readAsDataURL(input.files[0]);
    updateFX()

  };

function hideMenu() {
    let menu = document.getElementById("menu")
    menu.style.display = "none"
    let showMenu = document.getElementById("showMenu")
    showMenu.style.display = "block"
}

function showMenu(){
    let menu = document.getElementById("menu")
    menu.style.display = "block"
    let showMenu = document.getElementById("showMenu")
    showMenu.style.display = "none"
}

function updateFX(){
    let valBlur = document.getElementById("blur").value
    root.style.setProperty('--blur', valBlur+"px")

    let valBrightness = document.getElementById("brightness").value
    root.style.setProperty('--brightness', valBrightness+"")
}
