const jeepDetails = [
    {
        "city_mpg": 12,
        "class": "SUV",
        "combination_mpg": 25,
        "cylinders": 6,
        "displacement": 2.4,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 21,
        "make": "posrche",
        "model": "jeep",
        "transmission": "a",
        "year": 2012,
    }

]

const getJeepDetails = () => {

    for(let i = 0 ; i < jeepDetails.length ; i++){
        const jeepText = document.getElementById("jeepText")
        jeepText.classList.add("jeep-text")
        const porscheJeepDetailDiv = document.createElement("div")
        porscheJeepDetailDiv.classList.add("porsche-details-div")
        porscheJeepDetailDiv.innerHTML = `
         <h3>The New Porsche Jeep</h3>
         <span class="porsche-911-span">city MPG : ${jeepDetails[i].city_mpg}</span>
         <span>class : ${jeepDetails[i].class}</span>
         <span>combination MPG : ${jeepDetails[i].combination_mpg} </span>
         <span> cylinders : ${jeepDetails[i].cylinders} </span>
         <span> displacement : ${jeepDetails[i].displacement} </span>
         <span>drive : ${jeepDetails[i].drive}</span>
         <span> fuel type : ${jeepDetails[i].fuel_type} </span>
         <span> highway MPG : ${jeepDetails[i].highway_mpg} </span>
         <span> model : ${jeepDetails[i].drive}</span>
         <span>transmission : ${jeepDetails[i].transmission}</span>
         <span>year : ${jeepDetails[i].year}</span>
        `

        jeepText.appendChild(porscheJeepDetailDiv)
    }
}
getJeepDetails();