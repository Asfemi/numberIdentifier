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

    //todo: check if the formfield contains other characters asides digits
    //todo: if so remove them and then add the digits together
    
    //Filter the number inputted
    let filteredPhoneNo;
    //todo: eg: (ds&klkn1.3jhs4#587ksjf *  oefisj498) would turn to (134587498)
    phoneNumber[0] == 0 ? filteredPhoneNo = phoneNumber.replaceAll(/\D/g, "") : filteredPhoneNo = "+" + phoneNumber.replaceAll(/\D/g, "");

    //todo: and then we'd check if the number length is within the designated length(that is too short or too long)

    //todo: Support +XYZ country codes (e.g +234 for Nigeria) - 
    //todo: Still detect the carrier even if the user prefixed the number with their +XYZ country code

    // Regular expressions to match phone number patterns
    const mtnPattern = /^(\+234|0)(803|806|703|903|906|806|706|0813|0810|0814|816|913|916)\d{7}$/
    const gloPattern = /^(\+234|0)(805|705|905|807|815|811|915)\d{7}$/;
    const airtelPattern = /^(\+234|0)(802|902|701|808|708|812|901|907)\d{7}$/;
    const etisalatPattern = /^(\+234|0)(809|909|817|818|908)\d{7}$/;

    const airtelLogo = document.querySelector('.airtel-logo img');
    const noCarrierLogo = document.querySelector('.nocarrier-logo img');
    const displayNetworkImg = document.getElementById('displayNetworkImg'); //Img element
    
    //todo: Add validation - Use the pattern attribute of the HTML form field to restrict phone numbers to a certain carrier, 
    //todo: e.g restrict to only Airtel such that entering an MTN/GLO number would be invalid
    const errorMessage = document.getElementById('invalid');

    // checking for matched numbers
    if (mtnPattern.test(filteredPhoneNo)) {
        displayNetworkImg.src = "./assets/mtnlogo.png"; // Set the source (URL) of the image

        //Since only Airtel is Valid!
        errorMessage.style.display = 'block';
        carrierResult.textContent = "Error! Only Airtel is Valid!";
    } else if (gloPattern.test(filteredPhoneNo)) {
        displayNetworkImg.src = "./assets/Globacom-Limited-Logo.svg"; // Set the source (URL) of the image
        
        //Since only Airtel is Valid!
        errorMessage.style.display = 'none';
        carrierResult.textContent = "Error! Only Airtel is Valid!";
    } else if (airtelPattern.test(filteredPhoneNo)) {
        displayNetworkImg.src = "./assets/Airtel_Networks_Limited-Logo.wine.svg"; // Set the source (URL) of the image
        carrierResult.textContent = "Valid!";
        airtelLogo.style.display = 'block'; // You can also display an Airtel logo here
    } else if (etisalatPattern.test(filteredPhoneNo)) {
        displayNetworkImg.src = "./assets/9mobile-Logo.svg"; // Set the source (URL) of the image

        //Since only Airtel is Valid!
        errorMessage.style.display = 'none';
        carrierResult.textContent = "Error! Only Airtel is Valid!";
    } else {
        carrierResult.textContent = "Carrier not recognized";
        noCarrierLogo.style.display = 'block';
    }
}
//  resets the value of inputField
const RESET_BUTTON = document.getElementById('reset');
RESET_BUTTON,addEventListener('click', function(){
    phoneNumber = "";
})