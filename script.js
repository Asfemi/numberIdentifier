

// Function to validate a phone number based on the selected carrier.
function validatePhoneNumber(phoneNumber, selectedCarrier) {
    let pattern;
    switch (selectedCarrier) {
        case "airtel":
            pattern = /^(\+234|0)[8]\d{9}$/;
            break;
        case "mtn":
            pattern = /^(\+234|0)[7-9]\d{9}$/;
            break;
        case "glo":
            pattern = /^(\+234|0)[5]\d{9}$/;
            break;
        case "9mobile":
            pattern = /^(\+234|0)[9]\d{9}$/;
            break;
        default:
            pattern = /^(\+234|0)\d{10}$/; // A generic pattern for other carriers in Nigeria.
            break;
    }
    return pattern.test(phoneNumber);
}

// Function to handle form submission.
function handleFormSubmission(event) {
    event.preventDefault();
    const phoneNumberField = document.getElementById("phoneNumber");
    const carrierSelect = document.getElementById("carrierSelect");
    const selectedCarrier = carrierSelect.value;
    const phoneNumber = phoneNumberField.value;
    
    if (!validatePhoneNumber(phoneNumber, selectedCarrier)) {
        // Phone number is invalid, display an error message or take appropriate action.
        alert(`Invalid phone number for ${selectedCarrier}. Please enter a valid number.`);
    } else {
        // Phone number is valid, you can proceed with the submission.
        alert(`Valid phone number for ${selectedCarrier}. Proceeding with the submission.`);
    }
}

// Attach the form submission handler.
document.getElementById("phoneForm").addEventListener("submit", handleFormSubmission);


// Function to update the carrier icon based on the selected carrier.
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
    }
}

// Attach the change event to the carrier select element.
const carrierSelect = document.getElementById("carrierSelect");
carrierSelect.addEventListener("change", updateCarrierIcon);

// Initial call to set the image based on the default selected carrier.
updateCarrierIcon();



//  resets the value of inputField
const RESET_BUTTON = document.getElementById("reset");
RESET_BUTTON,
  addEventListener("click", function () {
    phoneNumber = "";
    //this.alert('number has been reset')
  });
