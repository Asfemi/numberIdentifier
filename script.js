


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
            pattern = /^(\+234|0)\d{10}$/; 
            break;
    }
    return pattern.test(phoneNumber);
}


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

function handleFormSubmission(event) {
    event.preventDefault();
    const phoneNumberField = document.getElementById("phoneNumber");
    const carrierSelect = document.getElementById("carrierSelect");
    const selectedCarrier = carrierSelect.value;
    const phoneNumber = phoneNumberField.value;

    let identifiedCarrier; // Initialize the identifiedCarrier variable

    if (phoneNumber.length !== 14) {
        if (phoneNumber.length !== 13) {
            if (phoneNumber.length !== 11) {
                alert("Phone number should be 11 digits long.");
            }
        }
    } else if (!validatePhoneNumber(phoneNumber, selectedCarrier)) {
        identifiedCarrier = selectedCarrier; // Set identifiedCarrier to the selectedCarrier value
        alert(`Invalid phone number for ${selectedCarrier}. Please enter a valid number.`);
    } else {
        identifiedCarrier = selectedCarrier; // Set identifiedCarrier to the selectedCarrier value
        alert(`Valid phone number for ${selectedCarrier}. Proceeding with the submission.`);
    }

    // Call the identifyCarrier function and pass the identifiedCarrier variable
    identifyCarrier(identifiedCarrier);
}




document.getElementById("phoneForm").addEventListener("submit", handleFormSubmission);



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

    const selectElement = document.getElementById("carrierSelect");
    selectElement.style.display = "none";
}


const carrierSelect = document.getElementById("carrierSelect");
carrierSelect.addEventListener("change", updateCarrierIcon);

function identifyCarrier(identifiedCarrier) {

    // Update the carrier result div and logos
    const carrierResultDiv = document.getElementById("carrierResult");
    const carrierLogos = document.querySelectorAll(".fancy-bg > div");
    const allCarriers = ["mtn", "glo", "9mobile", "airtel"]; // List of all carriers

    if (allCarriers.includes(identifiedCarrier)) {
        carrierResultDiv.textContent = identifiedCarrier.toUpperCase();
        // Hide all logos
        for (let logo of carrierLogos) {
            logo.style.display = "none";
        }
        // Show the identified carrier's logo
        const identifiedLogo = document.querySelector(`.${identifiedCarrier}-logo`);
        if (identifiedLogo) {
            identifiedLogo.style.display = "block";
        }
    } else {
        carrierResultDiv.textContent = "Carrier not recognized";
        // Show the default carrier logo
        const defaultLogo = document.querySelector(".nocarrier-logo");
        if (defaultLogo) {
            defaultLogo.style.display = "block";
        }
    }
}



updateCarrierIcon();


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