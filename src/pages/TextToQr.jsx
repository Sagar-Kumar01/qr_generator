import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import QrArea from "../components/QrArea";

const TextToQr = () => {
  let [text, setText] = useState("");

  return (
    <div>
      <h2>Text to QR</h2>
      <input
        type="text"
        placeholder="write sort message..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <QrArea data={text} />
    </div>
  );
};

export default TextToQr;
