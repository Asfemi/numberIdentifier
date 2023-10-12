


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


function handleFormSubmission(event) {
    event.preventDefault();
    const phoneNumberField = document.getElementById("phoneNumber");
    const carrierSelect = document.getElementById("carrierSelect");
    const selectedCarrier = carrierSelect.value;
    const phoneNumber = phoneNumberField.value;
    
    if (!/^[\d+]+$/.test(phoneNumber)) {

        alert("Phone number should contain only digits.");
    } else if (phoneNumber.length !== 14 ) { 
        if ( phoneNumber.length !== 13){
            if( phoneNumber.length !== 11){
               alert("Phone number should be 11 digits long.");
            }
        }
        
    } else if (!validatePhoneNumber(phoneNumber, selectedCarrier)) {
       
        alert(`Invalid phone number for ${selectedCarrier}. Please enter a valid number.`);
    } else {
        
        alert(`Valid phone number for ${selectedCarrier}. Proceeding with the submission.`);
    }
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