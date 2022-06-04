"use strict"

function handleClick(event) {

    const output = document.getElementById("output")
    const input = document.querySelector("#input").value

    let sanitaziedPhoneNumber;

    if(/[^0-9()-\s]/g.test(input)) {
        output.innerHTML = "The number contains special characters that should not be used (other than "-")"
    } else if(input.startsWith("-", "(", ")") || input.endsWith("-", "(", ")")) {
        output.innerHTML = "This number starts or ends with characters that should not be used at the beginning/end of the number"
    } else {
        sanitaziedPhoneNumber = input;
    }

    console.log(input)

    let numberOfDashes = (sanitaziedPhoneNumber.match(/-/g) || '').length


    if(numberOfDashes >= 3 ) {
        return false;    
    }

const dashSpacesRemoved = sanitaziedPhoneNumber.replace(/[-" "]/g, "");

if(dashSpacesRemoved.charAt(0) == 1 && dashSpacesRemoved.length == 11) {
        output.innerHTML = "This format is correct"
    } else if (dashSpacesRemoved.charAt(0) == 1 && dashSpacesRemoved.charAt(1) == "(" && dashSpacesRemoved.charAt(5) == ")" && dashSpacesRemoved.length == 13) {
        output.innerHTML = "This format is correct"
    } else if(dashSpacesRemoved.charAt(0) == "(" && dashSpacesRemoved.charAt(4) == ")" && dashSpacesRemoved.length == 12) {
        output.innerHTML = "This format is correct"
    } else if(dashSpacesRemoved.length == 11 && dashSpacesRemoved.charAt(0) == 1) {
        output.innerHTML = "This format is correct"
    } else if (dashSpacesRemoved.length == 10)  {
        output.innerHTML = "This format is correct"
    } else if (dashSpacesRemoved.length < 10 || dashSpacesRemoved.lenght > 13) {
        output.innerHTML = "This format is not correct"
    } else {
        output.innerHTML = "This format is not correct"

    }

    event.preventDefault
}

function handleReset() {
    let input = document.getElementById("input")
    input.value = input.defaultValue
    let output = document.getElementById("output")
    output.value = output.defaultValue
}


