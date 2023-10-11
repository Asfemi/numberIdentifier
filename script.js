

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


function updateCarrierIcon() {
    const carrierSelect = document.getElementById("carrierSelect");
    const carrierIcon = document.getElementById("carrierIcon");
    const selectedCarrier = carrierSelect.value;
    const selectedOption = carrierSelect.options[carrierSelect.selectedIndex];
    const iconUrl = selectedOption.getAttribute("data-icon");

    carrierIcon.style.backgroundImage = `url(${iconUrl})`;
}

document.getElementById("carrierSelect").addEventListener("change", updateCarrierIcon);


//  resets the value of inputField
const RESET_BUTTON = document.getElementById("reset");
RESET_BUTTON,
  addEventListener("click", function () {
    phoneNumber = "";
    this.alert('number has been reset')
  });
