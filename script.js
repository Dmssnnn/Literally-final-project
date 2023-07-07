
const createAccount = document.getElementById("create-account")
const form = document.getElementById("form")
createAccount.addEventListener('click', getRegistrationForm)

function getRegistrationForm () {
    form.innerHTML = `
    <input id="name" type="name" placeholder="Enter Your Name">
    <input id="surname" type="name" placeholder="Enter Your Surname">
    <input id="age" type="number" placeholder="Enter Your Age">
    <input id="phone" type="number" placeholder="Enter Your Telephone">
    <input id="email" type="email" placeholder="Enter Your Email">
    <input id="password" type="password" placeholder="Enter Your password">
    <button id="submit">Submit</button>
    <button id="remover">Already Logged In</button> 
    `
    const name = document.getElementById("name")
    submit.addEventListener('click', () => {
        localStorage.setItem("name",name.value)
        localStorage.setItem("surname",surname.value)
        localStorage.setItem("password",password.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("phone",phone.value)  
        
    })

   const remover = document.getElementById("remover")
   remover.addEventListener('click', displayNoneFunction);

   function displayNoneFunction() {
    if("click"){
        form.style.display = "none"
    }else{
        form.style.display = "flex"
        return true;
    }
   }

}


function getValidation () {
    const name = document.getElementById("name")
    const surname = document.getElementById("surname")  
    const password = document.getElementById("password")
    const phone = document.getElementById("phone")
    const email = document.getElementById("email")





    if(name.value === `` || surname.value === `` || password.value === `` || phone.value ===``|| email.value ===``){
        const span = document.createElement("span")
        span.classList.add("form-span")
        span.textContent = "fill all gap !!!"
        form.appendChild(span)
        return false;
    }else if (password.value.length < 6){
        alert("password must contain at least 7 characters")
        return false;
    } else {
        form.style.display = "none"
       alert(" You Created Account Successfully ")
       window.open("authorized.html")
       return true;
    }
    
}



const login = document.getElementById("login")
const loginForm = document.getElementById("forma")
login.addEventListener('click', loginFunc);

function loginFunc() {
    loginForm.innerHTML = `
    <input id="email" type="email" placeholder="Enter Your Email">
    <input id="password" type="password" placeholder="Enter Your password">
    <button id="submit">Submit</button>
    `
}

function getLoginValidation () {
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    if(email.value === "dimitrialavidze7@gmail.com" && password.value === "dimigigi12"){
        alert("success")
        window.open("authorized.html")
        return true;
    }else {
        alert("error")
        return false;
    }
}



const modelsArr = [
    {   
        id:1,
        model : 718,
        price : 57300,
        image: "images/porsche-small.webp "
    },

    {   
        id:2,
        model : 911,
        price : 63300,
        image: "images/porsche-small-gray.webp"
    },
    {   
        id:3,
        model : "Taycan",
        price : 63300,
        image: " images/porsche-small.webp  "
    },
    {   
        id:4,
        model : "Panamera",
        price : 63300,
        image: "images/cavea.webp"
    },
    {   
        id:5,
        model : "Macan",
        price : 63300,
        image: "images/porsche-small-panamera(1).webp "
    },
    {   
        id:6,
        model : "Porsche",
        price : 63300,
        image: "images/porsche-macan.webp"
    },
    {   
        id:6,
        model : "Porsche Jeep",
        price : 63300,
        image: "images/porsche-jeep.webp"
    },
    {   
        id:6,
        model : "Cayenne",
        price : 63300,
        image: "images/porsche-small-gray.webp"
    },
]
const getModels = () => {
    for (let i = 0 ; i < modelsArr.length ; i++){
        const modelsWrapper = document.getElementById("modelsWrapper")
        const modelText = document.createElement("h2")
        modelText.textContent = "Models"
        const modelsWrapperDiv = document.createElement("div")
        modelsWrapperDiv.classList.add("modelwrapperBlocks")
        modelsWrapperDiv.innerHTML = 
        `
        <h5>${modelsArr[i].model}</h5>
        <h6>${modelsArr[i].price}$</h6>
        <img src = ${modelsArr[i].image}>`
        
        const detailsButton = document.createElement("button")
        detailsButton.textContent = "Details"
        modelsWrapperDiv.appendChild(detailsButton)

        if( modelsWrapper){
           modelsWrapper.appendChild(modelsWrapperDiv)
        }
        // modelsWrapper.appendChild(modelsWrapperDiv)
    

        detailsButton.addEventListener("click",()=> {
            if("click"){
                window.open("porscheModels.html")
                return true;
            }else {
                return false;
            }
        })
    }
}
getModels();



const porscheDetailsArray = [
    {
      "city_mpg": 18,
      "class": "coupe",
      "combination_mpg": 21,
      "cylinders": 8,
      "displacement": 2.2,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 26,
      "make": "toyota",
      "model": "camry",
      "transmission": "a",
      "year": 1993,
    }
]    


const getPorscheDetails = () => {

    for(let i = 0 ; i < porscheDetailsArray.length; i++){
        const porsche911Detail = document.getElementById("text911")
        const porsche911DetailDiv = document.createElement("div")
        porsche911DetailDiv.classList.add("porsche-details-div")
        porsche911DetailDiv.innerHTML = `
         <h3>The New Carrera 911</h3>
         <span class="porsche-911-span">city MPG : ${porscheDetailsArray[i].city_mpg}</span>
         <span>class : ${porscheDetailsArray[i].class}</span>
         <span>combination MPG : ${porscheDetailsArray[i].combination_mpg} </span>
         <span> cylinders : ${porscheDetailsArray[i].cylinders} </span>
         <span> displacement : ${porscheDetailsArray[i].displacement} </span>
         <span>drive : ${porscheDetailsArray[i].drive}</span>
         <span> fuel type : ${porscheDetailsArray[i].fuel_type} </span>
         <span> highway MPG : ${porscheDetailsArray[i].highway_mpg} </span>
         <span> model : ${porscheDetailsArray[i].drive}</span>
         <span>transmission : ${porscheDetailsArray[i].transmission}</span>
         <span>year : ${porscheDetailsArray[i].year}</span>
        `
        porsche911Detail.appendChild(porsche911DetailDiv)

    }
}


if(window.location.href === "http://127.0.0.1:5500/porscheModels.html"){
    getPorscheDetails();
}

console.log(window.location.href)