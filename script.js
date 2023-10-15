// Define your regex patterns
const mtnPattern = /^(\+234|0)(803|806|703|903|906|806|706|813|810|814|816|913|916)\d{7}$/;
const gloPattern = /^(\+234|0)(805|705|905|807|815|811|915)\d{7}$/;
const airtelPattern = /^(\+234|0)(802|902|701|808|708|812|901|907)\d{7}$/;
const etisalatPattern = /^(\+234|0)(809|909|817|818|908)\d{7}$/;

// Get elements
const phoneNumberInput = document.getElementById("phoneNumber");
const networkIcons = document.querySelector('.showcase-logo');
const resetButton = document.getElementById('reset');

// stored the Logo images as an object for easy retrieval
const logoImages = {
  'generalCarrier': './assets/generalCarrier.png',
  'mtn': './assets/mtnlogo.png',
  'glo': './assets/Globacom-Limited-Logo.svg',
  'airtel': './assets/Airtel_Networks_Limited-Logo.wine.svg',
  'etisalat': './assets/9mobile-Logo.svg',
};

// Function to update the background image and hide logos
function updateBackgroundImage(imageURL) {
  networkIcons.style.backgroundImage = `url('${imageURL}')`;
  networkIcons.style.backgroundRepeat = 'no-repeat';
  networkIcons.style.backgroundSize = 'cover';
  networkIcons.style.backgroundPosition = 'center';

  // Hide all logo images
  const logoElements = document.querySelectorAll('.showcase-logo img');
  logoElements.forEach(logo => {
    logo.style.display = 'none';
  });
}

// This na Event listener for input changes
phoneNumberInput.addEventListener('input', function () {
  const phoneNumber = phoneNumberInput.value;

  if (mtnPattern.test(phoneNumber)) {
    updateBackgroundImage(logoImages['mtn']);
  } else if (gloPattern.test(phoneNumber)) {
    updateBackgroundImage(logoImages['glo']);
  } else if (airtelPattern.test(phoneNumber)) {
    updateBackgroundImage(logoImages['airtel']);
  } else if (etisalatPattern.test(phoneNumber)) {
    updateBackgroundImage(logoImages['etisalat']);
  } else {
    // If none of the patterns match, show the default background image
    updateBackgroundImage(logoImages['generalCarrier']);
  }
});

// Reset button
resetButton.addEventListener('click', function () {
  phoneNumberInput.value = '';
  updateBackgroundImage(logoImages['generalCarrier']);
});

// Function to identify carrier when the Check Carrier button is clicked
function identifyCarrier() {
    const phoneNumber = phoneNumberInput.value;
    const carrierResult = document.getElementById("carrierResult");
    const mtnLogo = document.querySelector('.mtn-logo img');  // Select the img element
    const gloLogo = document.querySelector('.glo-logo img');
    const airtelLogo = document.querySelector('.airtel-logo img');
    const eMobileLogo = document.querySelector('.mobile-logo img');
    const noCarrierLogo = document.querySelector('.nocarrier-logo img');
  
    if (mtnPattern.test(phoneNumber)) {
      carrierResult.textContent = "This number belongs to MTN Network Provider!!";
      carrierResult.style.color = '#f57100'
      mtnLogo.style.display = 'block';
    } else if (gloPattern.test(phoneNumber)) {
      carrierResult.textContent = "This number belongs to GLO Network Provider!!";
      carrierResult.style.color = 'green'
      gloLogo.style.display = 'block';
    } else if (airtelPattern.test(phoneNumber)) {
      carrierResult.textContent = "This number belongs to Airtel!!";
      carrierResult.style.color = '#FF0000'
      airtelLogo.style.display = 'block';
    } else if (etisalatPattern.test(phoneNumber)) {
      carrierResult.textContent = "This number belongs to 9mobile Network Provider!!";
      carrierResult.style.color = '#006F53'
      eMobileLogo.style.display = 'block';
    } else {
      carrierResult.textContent = "Carrier not recognized 😭😭🥵";
      noCarrierLogo.style.display = 'block';

    }
  }
//   TO GOD BE THE GLORY!!! WE CAN STILL DO CHANGES