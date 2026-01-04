import { useState } from "react";
import QrArea from "../components/QrArea";

const LocationToQr = () => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [error, setError] = useState("");

  const validate = (latitude, longitude) => {
    if (!latitude || !longitude) {
      setError("");
      return false;
    }

    const latNum = Number(latitude);
    const lngNum = Number(longitude);

    if (
      Number.isNaN(latNum) ||
      Number.isNaN(lngNum) ||
      latNum < -90 || latNum > 90 ||
      lngNum < -180 || lngNum > 180
    ) {
      setError("Enter valid latitude (-90 to 90) and longitude (-180 to 180)");
      return false;
    }

    setError("");
    return true;
  };

  const handleLatChange = (e) => {
    const value = e.target.value;
    setLat(value);
    validate(value, lng);
  };

  const handleLngChange = (e) => {
    const value = e.target.value;
    setLng(value);
    validate(lat, value);
  };

  const qrData =
    error || !lat || !lng
      ? ""
      : `geo:${lat},${lng}`;

  return (
    <div>
      <h2>GPS Location</h2>
      <p>Share GPS coordinates that open in mapping applications.</p>

      <input
        type="number"
        step="any"
        placeholder="Latitude (e.g. 28.6139)"
        value={lat}
        onChange={handleLatChange}
      />

      <input
        type="number"
        step="any"
        placeholder="Longitude (e.g. 77.2090)"
        value={lng}
        onChange={handleLngChange}
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

export default LocationToQr;