import { useState } from "react";
import QrArea from "../components/QrArea";

const WifiToQr = () => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("WPA");
  const [hidden, setHidden] = useState(false);

  const wifiString =
    ssid
      ? `WIFI:T:${security};S:${ssid};P:${password};H:${hidden};;`
      : "";

  return (
    <div>
      <h2>Wi-Fi to QR</h2>

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

      <select
        value={security}
        onChange={(e) => setSecurity(e.target.value)}
      >
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

      <QrArea data={wifiString} />
    </div>
  );
};

export default WifiToQr;
