
const bill = document.querySelector(".card-one-bill-input")
const buttons = document.querySelectorAll(".button-percentage")
const custom = document.querySelector(".grid-custom")
const zeroBill = document.querySelector(".zero-bill")
const zeroPeople = document.querySelector(".zero-people")
const people = document.querySelector(".card-one-people-input")
const tipAmount = document.querySelector(".tip-amount")
const total = document.querySelector(".total-amount")
const reset = document.querySelector(".reset")

// Buttons Percentage
buttons.forEach((button, index) => {

    button.addEventListener("click", ((e) => {
        let tip = e.target.textContent.slice(0, -1)

        if (bill.value === "0" || bill.value === "") {
            // Nothing

        } else if (bill.value >= 1 && (people.value === "0" || people.value === "")) {
            people.style.border = "2px solid orange"
            zeroPeople.textContent = "Can't be zero"
            zeroPeople.style.fontFamily = "Space Mono, monospace"
            zeroPeople.style.color = "orange"
            zeroPeople.style.fontWeight = "700"

        } else {
            people.style.border = "2px solid var(--Very-light-grayish-cyan)"
            button.disabled = false
            total.textContent = "$" + ((Number(bill.value) * ((Number(tip) / 100) + 1)) / Number(people.value)).toFixed(2)
            tipAmount.textContent = "$" + ((Number(bill.value) * ((Number(tip) / 100) + 1)) / Number(people.value) -
                                            Number(bill.value) / Number(people.value)).toFixed(2)
            zeroPeople.textContent = ""
            buttons[index].style.backgroundColor = "var(--Strong-cyan)"
            buttons[index].style.border = "1px solid var(--Strong-cyan)"
            buttons[index].style.color = "var(--Very-dark-cyan)"

            if(index === 0){
                buttons[1].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[1].style.border = "var(--Very-dark-cyan)"
                buttons[1].style.color = "var(--White)"
                buttons[2].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[2].style.border = "var(--Very-dark-cyan)"
                buttons[2].style.color = "var(--White)"
                buttons[3].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[3].style.border = "var(--Very-dark-cyan)"
                buttons[3].style.color = "var(--White)"
                buttons[4].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[4].style.border = "var(--Very-dark-cyan)"
                buttons[4].style.color = "var(--White)"
            }
            if(index === 1){
                buttons[0].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[0].style.border = "var(--Very-dark-cyan)"
                buttons[0].style.color = "var(--White)"
                buttons[2].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[2].style.border = "var(--Very-dark-cyan)"
                buttons[2].style.color = "var(--White)"
                buttons[3].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[3].style.border = "var(--Very-dark-cyan)"
                buttons[3].style.color = "var(--White)"
                buttons[4].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[4].style.border = "var(--Very-dark-cyan)"
                buttons[4].style.color = "var(--White)"
            }
            if(index === 2){
                buttons[1].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[1].style.border = "var(--Very-dark-cyan)"
                buttons[1].style.color = "var(--White)"
                buttons[0].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[0].style.border = "var(--Very-dark-cyan)"
                buttons[0].style.color = "var(--White)"
                buttons[3].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[3].style.border = "var(--Very-dark-cyan)"
                buttons[3].style.color = "var(--White)"
                buttons[4].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[4].style.border = "var(--Very-dark-cyan)"
                buttons[4].style.color = "var(--White)"
            }
            if(index === 3){
                buttons[1].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[1].style.border = "var(--Very-dark-cyan)"
                buttons[1].style.color = "var(--White)"
                buttons[2].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[2].style.border = "var(--Very-dark-cyan)"
                buttons[2].style.color = "var(--White)"
                buttons[0].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[0].style.border = "var(--Very-dark-cyan)"
                buttons[0].style.color = "var(--White)"
                buttons[4].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[4].style.border = "var(--Very-dark-cyan)"
                buttons[4].style.color = "var(--White)"
            }
            if(index === 4){
                buttons[1].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[1].style.border = "var(--Very-dark-cyan)"
                buttons[1].style.color = "var(--White)"
                buttons[2].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[2].style.border = "var(--Very-dark-cyan)"
                buttons[2].style.color = "var(--White)"
                buttons[3].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[3].style.border = "var(--Very-dark-cyan)"
                buttons[3].style.color = "var(--White)"
                buttons[0].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[0].style.border = "var(--Very-dark-cyan)"
                buttons[0].style.color = "var(--White)"
            }

        }
    }))
});

// Input Custom

custom.addEventListener("input", ((e) => {

    if (bill.value === "0" || bill.value === "") {
        // Nothing
    } else {
        total.textContent = "$" + ((Number(bill.value) * ((Number(e.target.value) / 100) + 1)) / Number(people.value)).toFixed(2)
        tipAmount.textContent = "$" + ((Number(bill.value) * ((Number(e.target.value) / 100) + 1)) / Number(people.value) -
                                        Number(bill.value) / Number(people.value)).toFixed(2)
    }
}))

custom.addEventListener("click", ((e) => {

    if((people.value === "0" || people.value === "") && (bill.value === "0" || bill.value === "")){
        people.style.border = "2px solid orange"
        zeroPeople.textContent = "Can't be zero"
        zeroPeople.style.fontFamily = "Space Mono, monospace"
        zeroPeople.style.color = "orange"
        zeroPeople.style.fontWeight = "700"

        bill.style.border = "2px solid orange"
        zeroBill.textContent = "Can't be zero"
        zeroBill.style.fontFamily = "Space Mono, monospace"
        zeroBill.style.color = "orange"
        zeroBill.style.fontWeight = "700"

    }else if(bill.value === "0" || bill.value === ""){
        bill.style.border = "2px solid orange"
        zeroBill.textContent = "Can't be zero"
        zeroBill.style.fontFamily = "Space Mono, monospace"
        zeroBill.style.color = "orange"
        zeroBill.style.fontWeight = "700"  

        
    }else if (people.value === "0" || people.value === "") {
        people.style.border = "2px solid orange"
        zeroPeople.textContent = "Can't be zero"
        zeroPeople.style.fontFamily = "Space Mono, monospace"
        zeroPeople.style.color = "orange"
        zeroPeople.style.fontWeight = "700"

    }else {
        console.log("X")
        zeroPeople.textContent = ""
        people.style.border = "2px solid var(--Very-light-grayish-cyan)"
    }
}))



// Reset Bill
bill.addEventListener("input", ((e) => {
    
    if (bill.value >= 0) {
        reset.style.opacity = "1.0"
        reset.addEventListener("click", ((e) => {
            bill.value = ""
            people.value = ""
            custom.value = ""
            tipAmount.textContent = "$00.00"
            total.textContent = "$00.00"
            zeroPeople.textContent = ""
            people.style.border = "2px solid var(--Very-light-grayish-cyan)"
            for (let index = 0; index < buttons.length; index++) {
                buttons[index].style.backgroundColor = "var(--Very-dark-cyan)"
                buttons[index].style.border = "1px solid var(--Very-dark-cyan)"
                buttons[index].style.color = "var(--White)"
            }
            

        }))
    } else if( bill.value == "" || bill.value === 0) {
        reset.style.opacity = "0.3"

    }
}))


// Reset People
people.addEventListener("input", ((e) => {
    if (people.value >= 0) {

        reset.style.opacity = "1.0"
        reset.addEventListener("click", ((e) => {
            bill.value = ""
            people.value = ""
            custom.value = ""
            tipAmount.textContent = "$00.00"
            total.textContent = "$00.00"
            zeroPeople.textContent = ""
            people.style.border = "2px solid var(--Very-light-grayish-cyan)"

        }))
    } else {
        reset.style.opacity = "0.3"
    }
}))

// Reset Custom
custom.addEventListener("change", ((e) => {
    if (custom.value >= 0) {

        reset.style.opacity = "1.0"
        reset.addEventListener("click", ((e) => {
            bill.value = ""
            people.value = ""
            custom.value = ""
            tipAmount.textContent = "$00.00"
            total.textContent = "$00.00"
            zeroPeople.textContent = ""
            people.style.border = "2px solid var(--Very-light-grayish-cyan)"

        }))
    } else {
        reset.style.opacity = "0.3"
    }
}))

// Reset button percentage








