//https://developer.mozilla.org/en-US/docs/Web/API/Document/forms 
import React from "react";
let useFormSubmit = (form) => {
  form.preventDefault()
  const elements = document.forms['booking'].elements;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].localName !== 'button') {
      console.log("Name: " + elements[i].name + " - " + "ID:" + elements[i].value);
    }
  }
  return
}

export default useFormSubmit;
