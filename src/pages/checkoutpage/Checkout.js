import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import ProductSummary from "./ProductSummary";
const Checkout = ({ items, currentUser }) => {
  const [input, setInput] = useState({
    name: "",
    credit: "",
    exp: "",
    cvv: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  //name validation
  const [checkName, setCheckName] = useState(false);
  let regexName = /^[a-zA-Z ]+$/;
  const isNameValid = regexName.test(input.name) && input.name.length >= 3;

  useEffect(() => {
    if (input.name.length > 0 && isNameValid) {
      setCheckName(true);
    } else {
      setCheckName(false);
    }
  }, [input.name]);

  //creditcard validation
  const [checkCreditCard, setCheckCreditCard] = useState(false);
  let regexNumber = /^[0-9]+$/;
  const isCardValid =
    regexNumber.test(input.credit) && input.credit.length === 16;

  useEffect(() => {
    if (input.credit.length > 0 && isCardValid) {
      setCheckCreditCard(true);
    } else {
      setCheckCreditCard(false);
    }
  }, [input.card]);
  //date validation
  const [checkDate, setCheckDate] = useState(false);
  const isExpValid = () => {
    let dateToday = new Date();
    let month = dateToday.getMonth() + 1;
    let year = dateToday.getFullYear();
    if (month < 10) {
      month = "0" + month.toString();
    }
    return year.toString() + "-" + month <= input.exp;
  };
  useEffect(() => {
    if (input.exp.length > 0 && isExpValid()) {
      setCheckDate(true);
    } else {
      setCheckDate(false);
    }
  }, [input.exp]);
  //cvv validation
  const [checkCvv, setCheckCvv] = useState(false);
  const isCvvValid = regexNumber.test(input.cvv) && input.cvv.length === 3;

  useEffect(() => {
    if (input.cvv.length > 0 && isCvvValid) {
      setCheckCvv(true);
    } else {
      setCheckCvv(false);
    }
  }, [input.cvv]);
  //change class
  const inputClassName = (field) => {
    if (field === "name") {
      if (input.name.length === 0) {
        return "form-control";
      }
      if (isNameValid) {
        return "form-control is-valid";
      } else {
        return "form-control is-invalid";
      }
    } else if (field === "card") {
      if (input.credit.length === 0) {
        return "form-control";
      }
      if (isCardValid) {
        return "form-control is-valid";
      } else {
        return "form-control is-invalid";
      }
    } else if (field === "cvv") {
      if (input.cvv.length === 0) {
        return "form-control";
      }
      if (isCvvValid) {
        return "form-control is-valid";
      } else {
        return "form-control is-invalid";
      }
    } else if (field === "exp") {
      if (input.exp.length === 0) {
        return "form-control";
      }
      if (isExpValid()) {
        return "form-control is-valid";
      } else {
        return "form-control is-invalid";
      }
    }
  };
  console.log(input.exp)
  console.log(input.cvv)

  console.log(input.exp);
  const date = new Date();
  console.log(date.getMonth() + 1);
  return (
    <div>
      <form>
        <div className="container text-center mt-5">
          <h1>Checkout</h1>
          <div className="container my-5">
            <div className="row">
              {/* credit card info */}
              <div className="col">
                <div className="row">
                  <div className="col-12">
                    <label for="" className="form-label valid">
                      Name on card
                    </label>
                    <input
                      className={inputClassName("name")}
                      name="name"
                      type="text"
                      placeholder="e.g. BATMAN"
                      value={input.name}
                      onChange={handleChange}
                      autocomplete="cc-csc"
                      required
                    />
                  </div>
                  <div className="col mt-3">
                    <label for="" className="form-label">
                      Credit card number
                    </label>
                    <input
                      className={inputClassName("card")}
                      name="credit"
                      type="text"
                      placeholder="e.g. 1643 3211 2315 9191"
                      value={input.credit}
                      onChange={handleChange}
                      autocomplete="cc-csc"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-6 ">
                  <div className="col mt-3">
                    <label for="" className="form-label">
                      Expiration Date
                    </label>
                    <input
                      className={inputClassName("exp")}
                      type="month"
                      name="exp"
                      placeholder="MM YY"
                      value={input.exp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label for="" className="form-label">
                      CVV
                    </label>
                    <input
                    maxlength="3"
                      className={inputClassName("cvv")}
                      name="cvv"
                      type="text"
                      value={input.cvv}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <hr></hr>

                <div className="row mt-3">
                  {" "}
                  <button className="paynowbtn border bg-dark p-3 rounded-3">
                    {" "}
                    PAY NOW{" "}
                  </button>
                </div>
              </div>
              {/* show products */}
              <ProductSummary items={items} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
