let testOne = document.getElementById("test1");
let testTwo = document.getElementById("test2");
let testThree = document.getElementById("test3");
let testFour = document.getElementById("test4");
let testFive = document.getElementById("test5");

let hexOne = document.getElementById("hex1");
let hexTwo = document.getElementById("hex2");
let hexThree = document.getElementById("hex3");
let hexFour = document.getElementById("hex4");
let hexFive = document.getElementById("hex5");

function changeDiv() {
    if (this.id === "hex1") {
        testOne.style.display = "block";
        testTwo.style.display = "none";
        testThree.style.display = "none";
        testFour.style.display = "none";
        testFive.style.display = "none";
    } else if (this.id === "hex2") {
        testOne.style.display = "none";
        testTwo.style.display = "block";
        testThree.style.display = "none";
        testFour.style.display = "none";
        testFive.style.display = "none";
    } else if (this.id === "hex3") {
        testOne.style.display = "none";
        testTwo.style.display = "none";
        testThree.style.display = "block";
        testFour.style.display = "none";
        testFive.style.display = "none";
    }
    else if (this.id === "hex4") {
        testOne.style.display = "none";
        testTwo.style.display = "none";
        testThree.style.display = "none";
        testFour.style.display = "block";
        testFive.style.display = "none";
    }
    else {
        testOne.style.display = "none";
        testTwo.style.display = "none";
        testThree.style.display = "none";
        testFour.style.display = "none";
        testFive.style.display = "block";
    }
}

hexOne.addEventListener("click", changeDiv, false);
hexTwo.addEventListener("click", changeDiv, false);
hexThree.addEventListener("click", changeDiv, false);
hexFour.addEventListener("click", changeDiv, false);
hexFive.addEventListener("click", changeDiv, false);