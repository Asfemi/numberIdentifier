// script.js



// script.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('phoneForm');
    form.addEventListener('submit', handleFormSubmission);
});

function updateCarrierIcon() {
    const carrierSelect = document.getElementById("carrierSelect");
    const displayNetworkImg = document.getElementById("displayNetworkImg");
    const selectedCarrier = carrierSelect.value;

    if (selectedCarrier === "airtel") {
        displayNetworkImg.src = "./assets/Airtel_Networks_Limited-Logo.wine.svg";
    } else if (selectedCarrier === "mtn") {
        displayNetworkImg.src = "./assets/mtnlogo.png";
    } else if (selectedCarrier === "glo") {
        displayNetworkImg.src = "./assets/Globacom-Limited-Logo.svg";
    } else if (selectedCarrier === "9mobile") {
        displayNetworkImg.src = "./assets/9mobile-Logo.svg";
    } else if (selectedCarrier === "General"){
        displayNetworkImg.src = "./assets/generalCarrier.png";
    }

    const selectElement = document.getElementById("carrierSelect");
    selectElement.style.display = "none";
}

const carrierSelect = document.getElementById("carrierSelect");
carrierSelect.addEventListener("change", updateCarrierIcon);

function isPhoneNumberValidForCarrier(phoneNumber, carrier) {
    switch (carrier) {
      case 'airtel':
        return airtelRegex.test(phoneNumber);
      case 'mtn':
        return mtnRegex.test(phoneNumber);
      case 'glo':
        return gloRegex.test(phoneNumber);
      case '9mobile':
        return mobileRegex.test(phoneNumber);
      default:
        return false;
    }
  }

function handleFormSubmission(event) {
    event.preventDefault();
    var phoneNumber = document.getElementById('phoneNumber').value;
    var selectedValue = document.getElementById('carrierSelect').value;
    var carrierResult = document.getElementById('carrierResult');

    // Regular expressions for different carrier numbers
    var airtelRegex = /^(\\+?234)?(0)?(802|803|806|812|814)[0-9]{7}$/;
    var mtnRegex = /^(\\+?234)?(0)?(803|806|810|813|814|816|903|906)[0-9]{7}$/;
    var gloRegex = /^(\\+?234)?(0)?(805|807|811|815|905)[0-9]{7}$/;
    var mobileRegex = /^(\\+?234)?(0)?(809|810|0810|0811|0812|0813|0814|0815|0816)[0-9]{7}$/;

    var displayNetworkImg = document.getElementById('displayNetworkImg');

    if (selectedValue === "General") {
        // If the "General" carrier is selected, check to see which carrier the phone number belongs to
        if (airtelRegex.test(phoneNumber)) {
          carrierResult.innerHTML = `This is an Airtel number`;
        } else if (mtnRegex.test(phoneNumber)) {
          carrierResult.innerHTML = `This is an MTN number`;
        } else if (gloRegex.test(phoneNumber)) {
          carrierResult.innerHTML = `This is a GLO number`;
        } else if (mobileRegex.test(phoneNumber)) {
          carrierResult.innerHTML = `This is a 9mobile number`;
        } else {
          carrierResult.innerHTML = `This is a number from an unidentified carrier`;
        }
      } else {
        // If a specific carrier is selected, check if the number is valid for it
        if (isPhoneNumberValidForCarrier(phoneNumber, selectedValue)) {
          carrierResult.innerHTML = `This is a ${selectedValue} number`;
        } else {
          carrierResult.innerHTML = `Invalid ${selectedValue} number`;
        }
      }
}

// function toggleSelect() {
//     var carrierSelect = document.getElementById('carrierSelect');
//     carrierSelect.click();
// }

function toggleSelect() {
    // Get a reference to the select element
    const selectElement = document.getElementById("carrierSelect");

    // Toggle the display property
    if (selectElement.style.display === "none") {
        selectElement.style.display = "block";
        selectElement.click();

    } else {
        selectElement.style.display = "none";
    }
}

// You can add more functionality here as needed for further validation and support of country codes.
