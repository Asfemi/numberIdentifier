function identifyCarrier() {
    const phoneNumberInput = document.getElementById("phoneNumber");
    const carrierResult = document.getElementById("carrierResult");
    const phoneNumber = phoneNumberInput.value;

    // Regular expressions to match phone number patterns
    const mtnPattern = /^(\+234|0)[7-9]\d{9}$/;
    //todo: acommodate other sort of numbers
    const gloPattern = /^(\+234|0)[5]\d{9}$/;
    const airtelPattern = /^(\+234|0)[8]\d{9}$/;
    const etisalatPattern = /^(\+234|0)[9]\d{9}$/;

    if (mtnPattern.test(phoneNumber)) {
        carrierResult.textContent = "MTN";
        // You can also display an MTN logo here
    } else if (gloPattern.test(phoneNumber)) {
        carrierResult.textContent = "GLO";
        // You can also display a GLO logo here
    } else if (airtelPattern.test(phoneNumber)) {
        carrierResult.textContent = "Airtel";
        // You can also display an Airtel logo here
    } else if (etisalatPattern.test(phoneNumber)) {
        carrierResult.textContent = "9mobile";
        // You can also display a 9mobile logo here
    } else {
        carrierResult.textContent = "Carrier not recognized";
    }
}
