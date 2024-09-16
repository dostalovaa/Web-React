import { employees } from "../../assets/assets";

import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs-wrapper">
      <h2>You can contact us here</h2>
      <div className="contactUs-content">
        {employees.map((oneEmployee) => {
          return (
            <div className="contactUs-card">
              <div className="contactUs-left">
                <img src={oneEmployee.img} alt="" />
              </div>
              <div className="contactUs-right">
                <h4>Name: {oneEmployee.name}</h4>
                <p>
                  <b>Email:</b> {oneEmployee.email}
                </p>
                <p>
                  <b>Phone:</b> {oneEmployee.phone}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
