
const bill = document.querySelector(".card-one-bill-input")
const buttons = document.querySelectorAll(".button-percentage")
const custom = document.querySelector(".grid-custom")
const zero = document.querySelector(".zero")
const people = document.querySelector(".card-one-people-input")
const tipAmount = document.querySelector(".tip-amount")
const total = document.querySelector(".total-amount")

// Buttons Percentage

buttons.forEach((button) => {

    button.addEventListener("click", ((e)=>{
        let tip = e.target.textContent.slice(0,-1)

        if(bill.value === "0"|| bill.value === "" ){
            // Nothing

        }else if(bill.value >= 1 && (people.value === "0" || people.value === "")){
            people.style.border = "2px solid orange"
            zero.textContent = "Can't be zero"
            zero.style.fontFamily = "Space Mono, monospace"
            zero.style.color = "orange"
            zero.style.fontWeight = "700"

        }else{
            people.style.border = "2px solid var(--Very-light-grayish-cyan)"
            button.disabled = false
            total.textContent = "$" + ((Number(bill.value) * ((Number(tip)/100)+1)) / Number(people.value)).toFixed(2)
            tipAmount.textContent = "$" + ((Number(bill.value) * ((Number(tip)/100)+1)) / Number(people.value) - 
                                          Number(bill.value) / Number(people.value)).toFixed(2)
            zero.textContent = ""

        }

        
    }))
});

// Input Custom

custom.addEventListener("change", ((e) =>{
    total.textContent = "$" + ((Number(bill.value) * ((Number(e.target.value)/100)+1)) / Number(people.value)).toFixed(2)
    tipAmount.textContent = "$" + ((Number(bill.value) * ((Number(e.target.value)/100)+1)) / Number(people.value) - 
                                          Number(bill.value) / Number(people.value)).toFixed(2)
}))



