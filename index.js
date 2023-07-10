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


const getLoginDisplayNone = () => {
    const  login = document.getElementById("login")
    const  createAccount = document.getElementById("registration")
    login.addEventListener("click", () => {
       if("click"){
        createAccount.style.display = "none";
       }else if(createAccount === `click`){
        login.style.display = "none"
       }
    })
}
getLoginDisplayNone();