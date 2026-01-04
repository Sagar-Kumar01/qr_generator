import { useState } from "react";
import QrArea from "../components/QrArea";
import styles from "../styles/LinkToQr.module.css";

const LinkToQr = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const validateUrl = (value) => {
    const regex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

    if (!value) {
      setError("");
      return false;
    }

    if (!regex.test(value)) {
      setError("Enter a valid URL (http:// or https://)");
      return false;
    }

    setError("");
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setUrl(value);
    validateUrl(value);
  };

  const qrData =
    error || !url
      ? ""
      : url;

  return (
    <div className={styles.container}>
      <div>
      <h2>Website URL</h2>
      <p>Create a QR code that directs to any website or web page.</p>

      <input
        className={styles.inputs}
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={handleChange}
      />

      {error && (
        <p style={{ color: "red", fontSize: "14px" }}>
          {error}
        </p>
      )}
      </div>
      <div><QrArea data={qrData} /></div>
    </div>
  );
};

export default LinkToQr;