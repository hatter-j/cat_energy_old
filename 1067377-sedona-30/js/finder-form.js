const finderButton = document.querySelector(".hotel-finder-button");
const formContainer = document.querySelector(".form-container");
const searchForm = document.querySelector(".hotel-search-form");
const arrivalDate = searchForm.querySelector("[name=date-of-arrival]");
const departureDate = searchForm.querySelector("[name=date-of-departure]");
const adultsNumber = searchForm.querySelector("[name=number-of-adults]");
const childrenNumber = searchForm.querySelector("[name=number-of-children]");

let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adultsNumber");
  storageChildren = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
};

if (isStorageSupport) {
  if (storageAdults) {
    adultsNumber.value = storageAdults;
  };
  if (storageChildren) {
    childrenNumber.value = storageChildren;
  };
};

formContainer.classList.remove("form-container-show");

finderButton.addEventListener("click", function (evt) {
  formContainer.classList.toggle("form-container-show");
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    formContainer.classList.remove("form-container-error");
    formContainer.offsetWidth = formContainer.offsetWidth;
    formContainer.classList.add("form-container-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsNumber", adultsNumber.value);
      localStorage.setItem("childrenNumber", childrenNumber.value);
    }
  }
});
