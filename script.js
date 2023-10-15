
document.getElementById("phoneForm").addEventListener("submit", function handleFormSubmission(event) {
    event.preventDefault()
    const phoneNumberField = document.getElementById("phoneNumber");
    const phoneNumber = phoneNumberField.value.trim();
    const provider = validateAndDisplayProvider(phoneNumber);
    const displayNetworkImg = document.getElementById("displayNetworkImg");
  
    if (provider === "Unknown" || provider === "Invalid Phone Number") {
      alert("Invalid or unknown phone number. Please enter a valid Nigerian phone number.");
    } else {
      // Set the image source based on the provider
      switch (provider) {
        case "airtel":
          displayNetworkImg.src = "./assets/Airtel_Networks_Limited-Logo.wine.svg";
          break;
        case "mtn":
          displayNetworkImg.src = "./assets/mtnlogo.png";
          break;
        case "glo":
          displayNetworkImg.src = "./assets/Globacom-Limited-Logo.svg";
          break;
        case "9mobile":
          displayNetworkImg.src = "./assets/9mobile-Logo.svg";
          break;
        default:
          displayNetworkImg.src = "./assets/Favicon.png";
      }
    }
  });

document.getElementById("resetButton").addEventListener("click", function () {
    const displayNetworkImg = document.getElementById("displayNetworkImg");
    displayNetworkImg.src ="./assets/Favicon.png"; // Set to the default image path
});


function validateAndDisplayProvider(phoneNumber) {
    // Remove any non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, '');

    let firstFourDigits = ""
    if ((phoneNumber.startsWith('0')) || (phoneNumber.length === 11)) {
        firstFourDigits = phoneNumber.substring(1, 4);
    }else if ((phoneNumber.startsWith('234')) || (phoneNumber.length === 13)){
        firstFourDigits = phoneNumber.substring(3,6)
    }else{
        return "Invalid Phone Number";
    }

    // Network patterns
    const gloPattern = ["805", "807", "705", "815", "811", "905","915"];
    const airtelPattern = ["802", "808", "708", "812", "701", "902", "901", "904", "907", "912"];
    const mtnPattern = ["803", "806", "703", "706", "813", "816", "810", "814", "903", "906", "913", "916", "7025", "7026", "704"];
    const nineMobilePattern = ["809", "818", "817", "909", "908"];

    // validation for the first four digits match the network patterns
    if (gloPattern.includes(firstFourDigits)) {
        return "glo";
    } else if (airtelPattern.includes(firstFourDigits)) {
        return "airtel";
    } else if (mtnPattern.includes(firstFourDigits)) {
        return "mtn";
    } else if (nineMobilePattern.includes(firstFourDigits)) {
        return "9mobile";
    } else {
        return "Unknown Network";
    }
}
