import { useState } from "react";
import QrArea from "../components/QrArea";

const EmailToQr = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setError("");
      return false;
    }

    if (!regex.test(value)) {
      setError("Enter a valid email address");
      return false;
    }

    setError("");
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    setEmail(value);
    validateEmail(value);
  };

  const qrData =
    error || !email
      ? ""
      : `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      <h2>Email to QR</h2>

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={handleEmailChange}
      />

      <input
        type="text"
        placeholder="Subject (optional)"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <textarea
        placeholder="Message (optional)"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      {error && (
        <p style={{ color: "red", fontSize: "14px" }}>
          {error}
        </p>
      )}

      <QrArea data={qrData} />
    </div>
  );
};

export default EmailToQr;
