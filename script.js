

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

  const airtelLogo = document.querySelector(".airtel-logo img");
  const noCarrierLogo = document.querySelector(".nocarrier-logo img");
  const displayNetworkImg = document.getElementById("displayNetworkImg"); //Img element

  //todo: Add validation - Use the pattern attribute of the HTML form field to restrict phone numbers to a certain carrier,
  //todo: e.g restrict to only Airtel such that entering an MTN/GLO number would be invalid
  const errorMessage = document.getElementById("invalid");

  // checking for matched numbers
  if (mtnPattern.test(filteredPhoneNo)) {
    displayNetworkImg.src = "./assets/mtnlogo.png"; // Set the source (URL) of the image

    //Since only Airtel is Valid!
    errorMessage.style.display = "block";
    carrierResult.textContent = "Error! Only Airtel is Valid!";
  } else if (gloPattern.test(filteredPhoneNo)) {
    displayNetworkImg.src = "./assets/Globacom-Limited-Logo.svg"; // Set the source (URL) of the image

    //Since only Airtel is Valid!
    errorMessage.style.display = "none";
    carrierResult.textContent = "Error! Only Airtel is Valid!";
  } else if (airtelPattern.test(filteredPhoneNo)) {
    displayNetworkImg.src = "./assets/Airtel_Networks_Limited-Logo.wine.svg"; // Set the source (URL) of the image
    carrierResult.textContent = "Valid!";
    airtelLogo.style.display = "block"; // You can also display an Airtel logo here
  } else if (etisalatPattern.test(filteredPhoneNo)) {
    displayNetworkImg.src = "./assets/9mobile-Logo.svg"; // Set the source (URL) of the image

    //Since only Airtel is Valid!
    errorMessage.style.display = "none";
    carrierResult.textContent = "Error! Only Airtel is Valid!";
  } else {
    carrierResult.textContent = "Carrier not recognized";
    noCarrierLogo.style.display = "block";
    alert("Carrier not recognized");
  }
}
//  resets the value of inputField
const RESET_BUTTON = document.getElementById("reset");
RESET_BUTTON,
  addEventListener("click", function () {
    phoneNumber = "";
    this.alert('number has been reset')
  });
