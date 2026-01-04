import { useState } from "react";
import QrArea from "../components/QrArea";
import styles from "../styles/SmsToQr.module.css";

const SmsToQr = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const smsString =
    phone
      ? `SMSTO:${phone}:${message}`
      : "";

  return (
    <div className={styles.container}>
      <div>
      <h2>SMS Message</h2>
      <p>Generate a QR code for sending pre-filled text messages.</p>
      
      <input
        className={styles.inputs}
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        placeholder="Message (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      </div>
      <div><QrArea data={smsString} /></div>
      
    </div>
  );
};

export default SmsToQr;
