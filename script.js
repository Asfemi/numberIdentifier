function identifyCarrier() {
    const phoneNumberInput = document.getElementById("phoneNumber");
    const carrierResult = document.getElementById("carrierResult");
    const phoneNumber = phoneNumberInput.value;

    //well i know some of this logic is fixed with enabling only the number keypad 
    //but for cases where you cant restrict the users input its good to work on the logic
    //plus it would be extra fun

    //todo: check if the formfield contains other characters asides digits
    //todo: if so remove them and then add the digits together
    //todo: eg: (ds&klkn1.3jhs4#587ksjf *  oefisj498) would turn to (134587498)

    //todo: and then we'd check if the number length is within the designated length(that is too short or too long)

    //todo: Add validation - Use the pattern attribute of the HTML form field to restrict phone numbers to a certain carrier, 
    //todo: e.g restrict to only Airtel such that entering an MTN/GLO number would be invalid

    //todo: Support +XYZ country codes (e.g +234 for Nigeria) - 
    //todo: Still detect the carrier even if the user prefixed the number with their +XYZ country code

    // Regular expressions to match phone number patterns
    const mtnPattern = /^(?:\+234|0)[7-9]\d{9}$/;
    const gloPattern = /^(?:\+234|0)[5]\d{9}$/;
    const airtelPattern = /^(?:\+234|0)[8]\d{9}$/;
    const etisalatPattern = /^(?:\+234|0)[9]\d{9}$/;


    if (mtnPattern.test(phoneNumber)) {
        carrierResult.textContent = "MTN";
        alert('MTN line');
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
