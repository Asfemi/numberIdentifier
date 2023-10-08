/*1. MTN NG

0803, 0806, 0703, 0903, 0906, 0806, 0706, 0813, 0810, 0814, 0816, 0913, 0916

2. GLO NG

0805, 0705, 0905, 0807, 0815, 0811, 0915

3. AIRTEL NG

0802, 0902, 0701, 0808, 0708, 0812, 0901, 0907

4. ETISALAT NG/9MOBILE

0809, 0909, 0817, 0818, 0908

5. VISAFONE

0704, 07025, 07026

6. MULTILINKS

0709, 07029

7. STARCOMMS

0819, 07028, 07029

8. NITEL

0804

9. ZOOM MOBILE

0707 */
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
    const mtnPattern = /^(\+234|0)(803|806|703|903|906|806|706|0813|0810|0814|816|913|916)\d{7}$/
    const gloPattern = /^(\+234|0)(805|705|905|807|815|811|915)\d{7}$/;
    const airtelPattern = /^(\+234|0)(802|902|701|808|708|812|901|907)\d{7}$/;
    const etisalatPattern = /^(\+234|0)(809|909|817|818|908)\d{7}$/;

    
    const gloLogo = document.querySelector('.glo-logo img');
    const mtnLogo = document.querySelector('.mtn-logo img');
    const airtelLogo = document.querySelector('.airtel-logo img');
    const eMobileLogo = document.querySelector('.mobile-logo img');
    const noCarrierLogo = document.querySelector('.nocarrier-logo img');


    if (mtnPattern.test(phoneNumber)) {
        carrierResult.textContent = "MTN";
        // You can also display an MTN logo here
        mtnLogo.style.display = 'block'
    } else if (gloPattern.test(phoneNumber)) {
        carrierResult.textContent = "GLO";
        // You can also display a GLO logo here
        gloLogo.style.display = 'block'
    } else if (airtelPattern.test(phoneNumber)) {
        carrierResult.textContent = "Airtel";
        // You can also display an Airtel logo here
        airtelLogo.style.display = 'block'
    } else if (etisalatPattern.test(phoneNumber)) {
        carrierResult.textContent = "9mobile";
        // You can also display a 9mobile logo here
        eMobileLogo.style.display = 'block'
    } else {
        carrierResult.textContent = "Carrier not recognized";
        noCarrierLogo.style.display = 'block';
    }
}
 
const RESET_BUTTON = document.getElementById('reset');
RESET_BUTTON,addEventListener('click', function(){
    phoneNumber = "";
})