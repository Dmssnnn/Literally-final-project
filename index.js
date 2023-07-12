function loginFunc() {
    const login = document.getElementById("login")
    const loginForm = document.getElementById("forma")
    login.addEventListener('click', () => {
        loginForm.innerHTML = `
        <input id="email" type="email" placeholder="Enter Your Email">
        <input id="password" type="password" placeholder="Enter Your password">
        <button id="submit">Submit</button>
        `
        
    })
}
loginFunc();


const login = document.getElementById("login")
const createAccForm = document.getElementById("form")
const  logInForm = document.getElementById("forma")
const headerCreateAccount = document.getElementById("create-account")

const getLoginDisplayNone = () => {
    login.addEventListener('click', () => {
        if(logInForm){
            createAccForm.style.display = "none"
        }

    })
}
getLoginDisplayNone();

// const getCreateAccDisplayNone = () => {
//     login.addEventListener("click",() => {
//         if(logInForm){
//             createAccForm.style.display ="none"
//         }else if (logInForm.style.display = "none"){
//             createAccForm.style.display = "none"
//         }
//     })
// }
// getCreateAccDisplayNone();