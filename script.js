// Regular expressions to match phone number patterns
const carrierPatterns = {
    mtn: /^(0703|0706|0803|0806|0810|0813|0814|0816|0903|0906)\d{6}$/,
    glo: /^(0705|0805|0807|0811|0815|0905|0915)\d{6}$/,
    airtel: /^(0708|0802|0808|0812|0902|0907)\d{6}$/,
    _9mobile: /^(0809|0817|0818|0908|0909)\d{6}$/,
  };

  // Function to identify the carrier and update the carrier icon/logo
  function identifyCarrier(phoneNumber) {
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

    let carrier = "Unknown";
    for (const [carrierName, pattern] of Object.entries(carrierPatterns)) {
      if (phoneNumber.match(pattern)) {
        carrier = carrierName;
        break;
      }
    }
    return carrier;
  }

  // Event listener for form submission
  document
    .getElementById("phoneForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const phoneNumberInput = document.getElementById("phoneNumber");
      const carrierIcon = document.getElementById("carrierIcon");
      const phoneNumber = phoneNumberInput.value.trim();

      // Check if the phone number starts with a country code
      if (phoneNumber.startsWith("+")) {
        // Remove the country code and leading '0' if present
        phoneNumberInput.value = phoneNumber.replace(/^\+\d{1,4}0?/, "");
      }

      // Identify the carrier
      const carrier = identifyCarrier(phoneNumber);

      // Display the carrier icon/logo
      if (carrier !== "Unknown") {
        carrierIcon.innerHTML = `<img src="${carrier}.png" alt="${carrier}">`;
      } else {
        carrierIcon.innerHTML = "Carrier not recognized";
      }
    });