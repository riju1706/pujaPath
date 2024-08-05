import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function Forgot({ setLoginTab, setSignUpTab, setForgot }) {
  return (
    <>
      {/* <button */}
      <div>
        <button
          onClick={() => {
            setLoginTab(true);
            setSignUpTab(false);
            setForgot(false);
          }}
          className="btn btn-danger mb-4 "
        >
          Go Back
        </button>
        <Form>
          <PhoneInput
            country={"in"}
            enableSearch={true}
            // value={values.mobile}
            // onChange={(phone) => setPhone(phone)}
            inputProps={{
              name: "mobile",
            }}
            inputStyle={{
              height: "24px",
              marginBottom: "15px",
            }}
          />

          <Button variant="primary" type="submit">
            Get otp
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Forgot;
