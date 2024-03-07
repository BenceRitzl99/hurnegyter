const aoldalInput = document.querySelector("#aoldal")
const boldalInput = document.querySelector("#boldal")
const coldalInput = document.querySelector("#coldal")
const doldalInput = document.querySelector("#doldal")
const calcButton = document.querySelector
("#calcButton")

const teruletInput = document.querySelector("#terulet")


calcButton.addEventListener('click', () => {
    startCalc();
})

function startCalc(){
    let aoldal = Number(aoldalInput.value)
    let boldal = Number(boldalInput.value)
    let coldal = Number(coldalInput.value)
    let doldal = Number(doldalInput.value)
    let terulet = calcTerulet(aoldal,boldal,coldal,doldal)
    teruletInput.value = terulet.toFixed(2)
    
    
}

function calcTerulet(aoldal,boldal,coldal,doldal){
    var kerulet = (aoldal + boldal + coldal + doldal);
    var felkerulet = kerulet / 2;
    return Math.sqrt((felkerulet - aoldal) * (felkerulet - boldal) * (felkerulet - coldal) * (felkerulet - doldal));

    
    
}



