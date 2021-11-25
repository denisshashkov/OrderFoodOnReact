import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length >= 5;

const Checkout = (props) => {
  const [formValid, setFormValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsvalid = !isEmpty(enteredName);
    const enteredStreetIsvalid = !isEmpty(enteredStreet);
    const enteredCityIsvalid = !isEmpty(enteredCity);
    const enteredPostalCodeIsvalid = isFiveChars(enteredPostal);

    setFormValid({
      name: enteredNameIsvalid,
      street: enteredStreetIsvalid,
      postalCode: enteredPostalCodeIsvalid,
      city: enteredCityIsvalid,
    });

    const formIsValid =
      enteredNameIsvalid &&
      enteredStreetIsvalid &&
      enteredCityIsvalid &&
      enteredPostalCodeIsvalid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formValid.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formValid.street ? "" : classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    formValid.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formValid.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValid.name && <p>Please Enter Valid Name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValid.street && <p>Please Enter Valid Street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formValid.postalCode && (
          <p>Please Enter Valid Postal Code (5 character long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValid.city && <p>Please Enter Valid City Name!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
