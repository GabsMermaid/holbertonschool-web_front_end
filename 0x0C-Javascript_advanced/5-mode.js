/**
 * @description - Task 5
 * @function changeMode - Change the attributes of page
 * @param {Number} size
 * @param {Number} secondNumber
 * @param {String} weight
 * @param {String} transform
 * @param {String} background
 * @param {String} color
 * @returns {Attr}
 */

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.documentElement.style["font-size"] = size;
        document.documentElement.style["font-weight"] = weight;
        document.documentElement.style["text-transform"] = transform;
        document.documentElement.style["background-color"] = background;
        document.documentElement.style["color"] = color;
    }

}

/**
 * @function changeMode - Select changeMode triggered by the buttons
 */
function main() {

    /**
     * Arguments to changeMode
     * @var {String} spooky
     * @var {String} darkMode
     * @var {String} screamMode
     */

    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    /**
     * Create paragraph
     * @var {String} paragraph
     */
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!"
    document.body.appendChild(paragraph);

    /**
     * Create button and apply event
     * @var {String} buttonSpooky
     */

    const buttonSpooky = document.createElement("button");
    buttonSpooky.innerHTML = "Spooky";
    buttonSpooky.onclick = function() { spooky(); };
    document.body.appendChild(buttonSpooky);

    /**
     * Create button and apply event
     * @var {String} buttonDark
     */
    const buttonDark = document.createElement("button");
    buttonDark.innerHTML = "Dark mode";
    buttonDark.onclick = function() { darkMode(); };
    document.body.appendChild(buttonDark);

    /**
     * Create button and apply event
     * @var {String} buttonScream
     */
    const buttonScream = document.createElement("button");
    buttonScream.innerHTML = "Scream mode";
    buttonScream.onclick = function() { screamMode();; }
    document.body.appendChild(buttonScream);

}

main();