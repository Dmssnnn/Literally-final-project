const livePorsche = [
    {
        image : "images/blue-gts-porsche.webp",

    },
    {
        image : "images/orange-porsche.webp",


    },
    {
        image : "images/red-porsche.webp",
    },
    {
        image : "images/blue-porsche.webp",

    },
    {
        image : "images/old-porsche.webp",

    },
    {
        image : "images/old-red-porsche.webp",

    },
    {
        image : "images/dzagli.webp",

    },
    {
        image : "images/suv-porsche.webp",

    }
]

const getLivePorsche = (livePorsche) => {
    for(let i = 0; i < livePorsche.length; i++ ){
        const porscheLive = document.getElementById("porscheLive")
        const insideDiveOfPorscheLive = document.createElement("div")
        insideDiveOfPorscheLive.classList.add("inside-dive-of-live")
        insideDiveOfPorscheLive.innerHTML =`
        <img src = ${livePorsche[i].image}>
        `
        const instagramIcon = document.createElement("image")
        instagramIcon.classList.add("instagram-icon")
        instagramIcon.innerHTML = `<img src =images/instagram.png>`
        insideDiveOfPorscheLive.appendChild(instagramIcon)
        porscheLive.appendChild(insideDiveOfPorscheLive)

        insideDiveOfPorscheLive.addEventListener("click",() => {
            if("click"){
                window.open("https://www.porsche.com/central-eastern-europe/en/_georgia_/#!/id:64a68cd3df198373f57d6e58/2340porsche23911/")
                return true;
            }else {
                return false;
            }
        })
    }
}
getLivePorsche(livePorsche);

