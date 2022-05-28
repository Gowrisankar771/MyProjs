if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let inputNumber = document.getElementById('input');
    let lenValue = document.getElementById("length");
    let volValue = document.getElementById('volume');
    let massValue = document.getElementById('mass');
    inputNumber.addEventListener('change', updateValues);

    function updateValues(event) {
        var input = event.target;
        if ((input.value == NaN) || (input.value <= 0)) {
            input.value = 1
        }
        let val = input.value;
        console.log(val);
        let feet = Math.round(3.28 * val *100)/100;
        let meter = Math.round(0.3048 * val *100)/100;
        let gallon = Math.round(0.264 * val *100)/100;
        let liter = Math.round(3.76 * val *100)/100;
        let pound = Math.round(2.2 * val *100)/100;
        let kilo = Math.round(0.454 * val *100)/100;
        lenValue.innerText = `${val} meters = ${feet} feet | ${val} feet = ${meter} meters`
        volValue.innerText = `${val} liters = ${gallon} gallons | ${val} gallons = ${liter} liters`
        massValue.innerText = `${val} kilograms = ${pound} pounds | ${val} pounds = ${kilo} kilograms`
    }
}
