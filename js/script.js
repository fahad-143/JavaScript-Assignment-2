
// ====================================================================================
// clousers
// Question # 1

// const clouser = (firstNumber) => {
//     return function (secondnumber) {
//         console.log(firstNumber + secondnumber)
//     }
// }

// let number1 = clouser(10)
// let number2 = clouser(20)
// number1(10)
// number2(20)

//--------------------------------------------------------------------------------------

// Recursive Function
// Question # 2



const question2 = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
    let newNumber = +prompt("Enter any number")

    const findNumber = (val) => {
        let check = 0;
        for (let i = 0; i < numbers.length; i++) {
            // let i = 1;
            if (val === numbers[i]) {
                check = 1;
                // checkout = check;
                console.log("true");
            }
        }
        if (check === 0) {
            console.log("false")
        }
    }
    findNumber(newNumber);
}

// -------------------------------------------------------------------------------------
// Question # 3


const addParagraph = () => {
    document.getElementById("addPara").innerHTML = "<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>when an unknown printer took a galley of type and scrambled it."

}

// =--------------------------------------------------------------------------------------
// Question # 4


// const changeBackground = () =>{
let changeMyColor = document.getElementById("changeMe");
changeMyColor.innerHTML = "<b style='margin: 50px;'>My Color is Changed by JavaScript."
// document.getElementById("changeMe").style.backgroundColor = " red"
setInterval(function () {
    let changeColor1 = Math.round(Math.random() * 1000000);
    let changeColor2 = Math.round(Math.random() * 1000000);
    console.log(changeColor1, changeColor2);
    changeMyColor.style.backgroundColor = '#' + changeColor1
    changeMyColor.style.color = '#' + changeColor2
}, 1000);
// }

// =========================================================================================
// Question # 5

const createList = () => {
    document.getElementById("unorderedList").innerHTML = "<ul><li style='font-size: 20px;'>Lorem Ipsum is simply dummy.</li></ul><ul><li style='font-size: 20px;'>printing and typesetting industry.</li></ul>"
}

// ===========--------------------------------------------------------------------------------
// Question # 6
let remainPets = localStorage.getItem("pets");
let pets = remainPets ? JSON.parse(remainPets) : [];

const petsProperties = () => {
    let petsData = {
        name: prompt("Enter your Pet name"),
        age: +prompt("Enter your Pet Age"),
        species: prompt("Enter your Pet Specie"),
        color: prompt("Enter your Pet Color"),
    };
    pets.push(petsData);
    console.log(pets);
    let stringify = JSON.stringify(pets);
    localStorage.setItem("pets", stringify)
}

