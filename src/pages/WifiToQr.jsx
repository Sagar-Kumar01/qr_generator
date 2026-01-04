import { useState } from "react";
import QrArea from "../components/QrArea";
import styles from "../styles/WifiToQr.module.css";

const WifiToQr = () => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("WPA");
  const [hidden, setHidden] = useState(false);

  const wifiString = ssid
    ? `WIFI:T:${security};S:${ssid};P:${password};H:${hidden};;`
    : "";

  return (
    <div className={styles.container}>
      
      <div>
      <h2>WiFi Network Sharing</h2>
      <p>
        Allow others to connect to your WiFi network by scanning the QR code.
      </p>

      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Wi-Fi Name (SSID)"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={security} onChange={(e) => setSecurity(e.target.value)}>
          <option value="WPA">WPA / WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">No Password</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={hidden}
            onChange={() => setHidden(!hidden)}
          />
          Hidden Network
        </label>
      </div>

      </div>
      <div>
        <QrArea data={wifiString} />
      </div>
    </div>
  );
};

export default WifiToQr;
