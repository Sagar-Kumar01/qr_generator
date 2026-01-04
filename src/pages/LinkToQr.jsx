import { useState } from "react";
import QrArea from "../components/QrArea";

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
    <div>
      <h2>Link to QR</h2>

      <input
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

      <QrArea data={qrData} />
    </div>
  );
};

export default LinkToQr;