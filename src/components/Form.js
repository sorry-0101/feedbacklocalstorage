import React, { useEffect, useState } from "react";
import FromData from "./FromData.js";

const getDatafromLS = () => {
  const data = localStorage.getItem("feedbacks");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Form = () => {
  const [inputvalue, setInputValue] = useState(getDatafromLS());

  const [fname, setFname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [radio, setRadio] = useState("");

  const feedbackform = (event) => {
    event.preventDefault();

    let feedback = {
      fname,
      name,
      email,
      number,
      radio,
    };

    setInputValue([...inputvalue, feedback]);
    setFname("");
    setName("");
    setEmail("");
    setNumber("");
    setRadio("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(inputvalue));
  }, [inputvalue]);

  console.log(inputvalue);

  const PersonNames = inputvalue.map((feedback) => (
    <tr key={Math.random()}>
      <td>{feedback.from_name}</td>
      <td>{feedback.name}</td>
      <td>{feedback.email}</td>
      <td>{feedback.number}</td>
      <td>{feedback.radio}</td>
    </tr>
  ));
  return (
    <>
      <div className="row">
        <div className="card">
          <div className="card-header text-center">Aromatic Bar</div>
          <div className="card-body">
            <div className="col-md-12">
              <form
                className="row g-3 needs-validation"
                onSubmit={feedbackform}
                noValidate
              >
                <div className="col-md-6">
                  <label htmlFor="from_name" className="form-label">
                    From Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    value={fname}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Customer Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Email:
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="">
                      @
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    phone:
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="radiobutton" className="form-label">
                    Please rate your overall dining experience.
                  </label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      onChange={(e) => setRadio(e.target.value)}
                      value="Excellent"
                    />
                    <label className="form-check-label" htmlFor="excellent">
                      Excellent
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      onChange={(e) => setRadio(e.target.value)}
                      value="good"
                    />
                    <label className="form-check-label" htmlFor="goods">
                      Good
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      onChange={(e) => setRadio(e.target.value)}
                      value="Fair"
                    />
                    <label className="form-check-label" htmlFor="fair">
                      Fair
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      onChange={(e) => setRadio(e.target.value)}
                      value="Bed"
                    />
                    <label className="form-check-label" htmlFor="bed">
                      Bed
                    </label>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <button className="btn btn-primary" type="submit">
                    Submit Feedback Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {inputvalue.length > 0 && (
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>User Experience</th>
              </tr>
            </thead>

            <tbody>
              <FromData inputvalue={inputvalue} />
              {PersonNames}
            </tbody>
          </table>
        )}
        {inputvalue.length < 1 && <div>no data is aviable</div>}
        {/* <table className="table table-stripped">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>User Experience</th>
            </tr>
          </thead>

          <tbody>
            <FromData inputvalue={inputvalue} />
            {PersonNames}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default Form;
