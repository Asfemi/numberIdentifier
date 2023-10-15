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
    }

    const selectElement = document.getElementById("carrierSelect");
    selectElement.style.display = "none";
}

function updateCarrierIcon() {
    var selectedValue = document.getElementById('carrierSelect').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var backgroundSection = document.querySelector('.background-section');
    var carrierResult = document.getElementById('carrierResult');
  
    // Regular expressions for different carrier numbers
    var airtelRegex = /^(\\+?234)?(0)?(802|803|806|812|814)[0-9]{7}$/;
    var mtnRegex = /^(\\+?234)?(0)?(803|806|810|813|814|816|903|906)[0-9]{7}$/;
    var gloRegex = /^(\\+?234)?(0)?(805|807|811|815|905)[0-9]{7}$/;
    var mobileRegex = /^(\\+?234)?(0)?(809|810|0810|0811|0812|0813|0814|0815|0816)[0-9]{7}$/;
  
    var carrierIcon = document.createElement('img');
  
    switch (selectedValue) {
      case 'airtel':
        if (airtelRegex.test(phoneNumber)) {
          carrierIcon.src = './assets/Airtel_Networks_Limited-Logo.wine.svg';
          backgroundSection.innerHTML = '';
          backgroundSection.appendChild(carrierIcon);
          carrierResult.innerHTML = 'This is an Airtel number';
          backgroundSection.innerHTML = `<div class="fancy-bg">
                                        <div class="airtel-logo">
                                          <img src="./assets/Airtel_Networks_Limited-Logo.wine.svg" alt="" />
                                        </div>
                                      </div>`;
        } else {
          backgroundSection.innerHTML = '';
          carrierResult.innerHTML = 'Invalid Airtel number';
        }
        break;
      case 'mtn':
        if (mtnRegex.test(phoneNumber)) {
          carrierIcon.src = './assets/mtnlogo.png';
          backgroundSection.innerHTML = '';
          backgroundSection.appendChild(carrierIcon);
          carrierResult.innerHTML = 'This is an MTN number';
          backgroundSection.innerHTML = `<div class="fancy-bg">
                                        <div class="mtn-logo">
                                          <img src="./assets/mtnlogo.png" alt="" />
                                        </div>
                                      </div>`;
        } else {
          backgroundSection.innerHTML = '';
          carrierResult.innerHTML = 'Invalid MTN number';
        }
        break;
      case 'glo':
        if (gloRegex.test(phoneNumber)) {
          carrierIcon.src = './assets/Globacom-Limited-Logo.svg';
          backgroundSection.innerHTML = '';
          backgroundSection.appendChild(carrierIcon);
          carrierResult.innerHTML = 'This is a GLO number';
          backgroundSection.innerHTML = `<div class="fancy-bg">
                                        <div class="glo-logo">
                                          <img src="./assets/Globacom-Limited-Logo.svg" alt="" />
                                        </div>
                                      </div>`;
        } else {
          backgroundSection.innerHTML = '';
          carrierResult.innerHTML = 'Invalid GLO number';
        }
        break;
      case '9mobile':
        if (mobileRegex.test(phoneNumber)) {
          carrierIcon.src = './assets/9mobile-Logo.svg';
          backgroundSection.innerHTML = '';
          backgroundSection.appendChild(carrierIcon);
          carrierResult.innerHTML = 'This is a 9mobile number';
          backgroundSection.innerHTML = `<div class="fancy-bg">
                                        <div class="mobile-logo">
                                          <img src="./assets/9mobile-Logo.svg" alt="" />
                                        </div>
                                      </div>`;
        } else {
          backgroundSection.innerHTML = '';
          carrierResult.innerHTML = 'Invalid 9mobile number';
        }
        break;
      default:
        backgroundSection.innerHTML = '';
        carrierResult.innerHTML = 'This is a number from an unidentified carrier';
        backgroundSection.innerHTML = `<div class="fancy-bg">
                                        <div class="nocarrier-logo">
                                          <img src="./assets/generalCarrier.png" alt="" />
                                        </div>
                                      </div>`;
    }
  }

const carrierSelect = document.getElementById("carrierSelect");
carrierSelect.addEventListener("change", updateCarrierIcon);

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

    switch (selectedValue) {
        case 'airtel':
            if (airtelRegex.test(phoneNumber)) {
                displayNetworkImg.src = './assets/Airtel_Networks_Limited-Logo.wine.svg';
                carrierResult.innerHTML = 'This is an Airtel number';
            } else {
                displayNetworkImg.src = './assets/generalCarrier.png';
                carrierResult.innerHTML = 'Invalid Airtel number';
            }
            break;
        case 'mtn':
            if (mtnRegex.test(phoneNumber)) {
                displayNetworkImg.src = './assets/mtnlogo.png';
                carrierResult.innerHTML = 'This is an MTN number';
            } else {
                displayNetworkImg.src = './assets/generalCarrier.png';
                carrierResult.innerHTML = 'Invalid MTN number';
            }
            break;
        case 'glo':
            if (gloRegex.test(phoneNumber)) {
                displayNetworkImg.src = './assets/Globacom-Limited-Logo.svg';
                carrierResult.innerHTML = 'This is a GLO number';
            } else {
                displayNetworkImg.src = './assets/generalCarrier.png';
                carrierResult.innerHTML = 'Invalid GLO number';
            }
            break;
        case '9mobile':
            if (mobileRegex.test(phoneNumber)) {
                displayNetworkImg.src = './assets/9mobile-Logo.svg';
                carrierResult.innerHTML = 'This is a 9mobile number';
            } else {
                displayNetworkImg.src = './assets/generalCarrier.png';
                carrierResult.innerHTML = 'Invalid 9mobile number';
            }
            break;
        default:
            displayNetworkImg.src = './assets/generalCarrier.png';
            carrierResult.innerHTML = 'This is a number from an unidentified carrier';
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
