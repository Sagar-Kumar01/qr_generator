import { useState } from "react";
import QrArea from "../components/QrArea";

const SmsToQr = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const smsString =
    phone
      ? `SMSTO:${phone}:${message}`
      : "";

  return (
    <div>
      <h2>SMS Message</h2>
      <p>Generate a QR code for sending pre-filled text messages.</p>

      <input
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

      <QrArea data={smsString} />
    </div>
  );
};

export default SmsToQr;
