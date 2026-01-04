import { useState } from "react";
import QrArea from "../components/QrArea";
import styles from "../styles/PhoneToQr.module.css";

const PhoneToQr = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (value) => {
    const regex = /^\+?[0-9]{10,15}$/;

    if (!value) {
      setError("");
      return false;
    }

    if (!regex.test(value)) {
      setError("Enter a valid phone number (10–15 digits)");
      return false;
    }

    setError("");
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setPhone(value);
    validatePhone(value);
  };

  const qrData = error || !phone ? "" : `tel:${phone}`;

  return (
    <div className={styles.container}>
      <div>
      <h2>Phone Number</h2>
      <p>Create a QR code for instant phone dialing.</p>

      <input
        className={styles.inputs}
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChange}
      />

      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      </div>

      <div><QrArea data={qrData} /></div>

    </div>
  );
};

export default PhoneToQr;
