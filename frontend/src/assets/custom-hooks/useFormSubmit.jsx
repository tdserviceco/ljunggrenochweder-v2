import React from "react";
let useFormSubmit = (form) => {
  form.preventDefault()
  const elements = document.forms['booking'].elements;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].localName !== 'button') {
      console.log(elements[i].name + " - " + elements[i].value);
    }
  }
  return
}

export default useFormSubmit;
