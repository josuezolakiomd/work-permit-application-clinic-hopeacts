const pdfDate = document.querySelector(".pdf-date");
const pdfName = document.querySelector(".pdf-name");
const buttonPdf = document.querySelector(".btn-pdf");

let displayDivs = {
  lastName: document.querySelector(".last-name"),
  firstName: document.querySelector(".first-name"),
  middleName: document.querySelector(".middle-name"),
  otherNames: document.querySelector(".other-names"),
  inCareOf: document.querySelector(".in-care-of"),
  streetNumberName: document.querySelector(".street-number-name"),
  aptNumber: document.querySelector(".apt-number"),
  cityTown: document.querySelector(".city-town"),
  state: document.querySelector(".state"),
  zipCode: document.querySelector(".zip-code"),
  alienNumber: document.querySelector(".alien-number"),
  uscisAccountNumber: document.querySelector(".uscis-account-number"),
  gender: document.querySelector(".gender"),
  maritalStatus: document.querySelector(".marital-status"),
  fatherLastName: document.querySelector(".father-last-name"),
  fatherFirstName: document.querySelector(".father-first-name"),
  motherLastName: document.querySelector(".mother-last-name"),
  motherFirstName: document.querySelector(".mother-first-name"),
  country: document.querySelector(".country"),
  cityTownBirth: document.querySelector(".city"),
  stateProvinceBirth: document.querySelector(".state-province-birth"),
  countryBirth: document.querySelector(".country-birth"),
  dateBirth: document.querySelector(".date-birth"),
  i94Number: document.querySelector(".i-94-number"),
  passportNumber: document.querySelector(".passport-number"),
  travelDocumentNumber: document.querySelector(".travel-document-number"),
  countryIssuedPassport: document.querySelector(".country-issued-passport"),
  expirationDatePassport: document.querySelector(".expiration-date-passport"),
  lastArrivalUSDate: document.querySelector(".last-arrival-us-date"),
  lastPlaceArrivalUS: document.querySelector(".last-place-arrival-us"),
  immigrationStatusArrival: document.querySelector(
    ".immigration-status-arrival"
  ),
  currentImmigrationStatus: document.querySelector(
    ".current-immigration-status"
  ),
};

let firstAndLastName;

const getData = () => {
  const dateBirthInput = document.querySelector("#date-birth").value;
  const LastArrivalDateInput = document.querySelector(
    "#last-arrival-us-date"
  ).value;
  const passportExpirationInput = document.querySelector(
    "#expiration-date-passport"
  ).value;

  const genderOptions = ["none", "male", "female"];
  const maritalStatusOptions = [
    "none",
    "single",
    "married",
    "divorced",
    "widowed",
  ];

  const getGender = () => {
    if (document.querySelector("#genders").value === "1") {
      return genderOptions[1];
    } else if (document.querySelector("#genders").value === "2") {
      return genderOptions[2];
    } else {
      return genderOptions[0];
    }
  };

  const getMaritalStatus = () => {
    if (document.querySelector("#marital-status").value === "1") {
      return maritalStatusOptions[1];
    } else if (document.querySelector("#marital-status").value === "2") {
      return maritalStatusOptions[2];
    } else if (document.querySelector("#marital-status").value === "3") {
      return maritalStatusOptions[3];
    } else if (document.querySelector("#marital-status").value === "4") {
      return maritalStatusOptions[4];
    } else {
      return maritalStatusOptions[0];
    }
  };

  function formatDate(dateInput) {
    if (dateInput) {
      const date = new Date(dateInput);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate() + 1).padStart(2, "0");
      const year = String(date.getFullYear()).slice();

      const formattedDate = `${month}/${day}/${year}`;
      return formattedDate;
    }
  }

  const data = {
    lastName: document.querySelector("#last-name").value,
    firstName: document.querySelector("#first-name").value,
    middleName: document.querySelector("#middle-name").value || "N/A",
    otherNames: document.querySelector("#other-names").value || "N/A",
    inCareOf: document.querySelector("#in-care-of").value || "N/A",
    streetNumberName: document.querySelector("#street-number-name").value,
    aptNumber: document.querySelector("#apt-number").value || "N/A",
    city: document.querySelector("#city").value,
    state: document.querySelector("#state").value,
    zipCode: document.querySelector("#zip-code").value,
    alienNumber: document.querySelector("#alien-number").value || "N/A",
    uscisAccountNumber:
      document.querySelector("#uscis-account-number").value || "N/A",
    gender: getGender().toUpperCase(),
    maritalStatus: getMaritalStatus().toUpperCase(),
    fatherLastName:
      document.querySelector("#father-last-name").value || "UNKNOWN",
    fatherFirstName:
      document.querySelector("#father-first-name").value || "UNKNOWN",
    motherLastName:
      document.querySelector("#mother-last-name").value || "UNKNOWN",
    motherFirstName:
      document.querySelector("#mother-first-name").value || "UNKNOWN",
    country: document.querySelector("#country").value,
    cityTownBirth: document.querySelector("#city-town").value,
    stateProvinceBirth: document.querySelector("#state-province-birth").value,
    countryBirth: document.querySelector("#country-birth").value,
    dateBirth: formatDate(dateBirthInput) || "N/A",
    i94Number: document.querySelector("#i-94-number").value || "N/A",
    passportNumber: document.querySelector("#passport-number").value || "N/A",
    travelDocumentNumber:
      document.querySelector("#travel-document-number").value || "N/A",
    countryIssuedPassport:
      document.querySelector("#country-issued-passport").value || "N/A",
    expirationDatePassport: formatDate(passportExpirationInput) || "N/A",
    lastArrivalUSDate: formatDate(LastArrivalDateInput) || "N/A",
    lastPlaceArrivalUS: document.querySelector("#last-place-arrival-us").value,
    immigrationStatusArrival:
      document.querySelector("#immigration-status-arrival").value ||
      "NO STATUS",
    currentImmigrationStatus:
      document.querySelector("#current-immigration-status").value ||
      "ASYLUM PENDING",
  };

  firstAndLastName = `${data.firstName} ${data.lastName}`;

  console.log(data);

  if (
    data.lastName &&
    data.firstName &&
    data.streetNumberName &&
    data.city &&
    data.state &&
    data.zipCode &&
    data.country &&
    data.cityTownBirth &&
    data.stateProvinceBirth &&
    data.countryBirth &&
    data.dateBirth &&
    data.lastArrivalUSDate
  ) {
    displayDivs.lastName.textContent = data.lastName;
    displayDivs.firstName.textContent = data.firstName;
    displayDivs.middleName.textContent = data.middleName;
    displayDivs.otherNames.textContent = data.otherNames;
    displayDivs.inCareOf.textContent = data.inCareOf;
    displayDivs.streetNumberName.textContent = data.streetNumberName;
    displayDivs.aptNumber.textContent = data.aptNumber;
    displayDivs.cityTown.textContent = data.city;
    displayDivs.state.textContent = data.state;
    displayDivs.zipCode.textContent = data.zipCode;
    displayDivs.alienNumber.textContent = data.alienNumber;
    displayDivs.uscisAccountNumber.textContent = data.uscisAccountNumber;
    displayDivs.gender.textContent = data.gender;
    displayDivs.maritalStatus.textContent = data.maritalStatus;
    displayDivs.fatherLastName.textContent = data.fatherLastName;
    displayDivs.fatherFirstName.textContent = data.fatherFirstName;
    displayDivs.motherLastName.textContent = data.motherLastName;
    displayDivs.motherFirstName.textContent = data.motherFirstName;
    displayDivs.country.textContent = data.country;
    displayDivs.cityTownBirth.textContent = data.cityTownBirth;
    displayDivs.stateProvinceBirth.textContent = data.stateProvinceBirth;
    displayDivs.countryBirth.textContent = data.countryBirth;
    displayDivs.dateBirth.textContent = data.dateBirth;
    displayDivs.i94Number.textContent = data.i94Number;
    displayDivs.passportNumber.textContent = data.passportNumber;
    displayDivs.travelDocumentNumber.textContent = data.travelDocumentNumber;
    displayDivs.countryIssuedPassport.textContent = data.countryIssuedPassport;
    displayDivs.expirationDatePassport.textContent =
      data.expirationDatePassport;
    displayDivs.lastArrivalUSDate.textContent = data.lastArrivalUSDate;
    displayDivs.lastPlaceArrivalUS.textContent = data.lastPlaceArrivalUS;
    displayDivs.immigrationStatusArrival.textContent =
      data.immigrationStatusArrival;
    displayDivs.currentImmigrationStatus.textContent =
      data.currentImmigrationStatus;

    // Hide the first div
    document.querySelector(".form-page").style.display = "none";

    // Show the second div
    document.querySelector(".pdf-file").style.display = "block";

    // Create a new PDF

    window.print();
  } else {
    alert("Please fill out all required fields");
  }
};

function getTodaysDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const year = String(today.getFullYear()).slice();
  return `${month}/${day}/${year}`;
}

buttonPdf.addEventListener("click", getData);

pdfDate.textContent = getTodaysDate();
pdfName.innerHTML = firstAndLastName
  ? `i-765-${firstAndLastName}-${getTodaysDate()}.pdf`
  : `i-765-${getTodaysDate()}.pdf`;
