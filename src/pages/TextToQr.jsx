import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import QrArea from "../components/QrArea";

const TextToQr = () => {
  let [text, setText] = useState("");

  return (
    <div>
      <h2>Plain Text QR Code</h2>
      <p>Generate a QR code containing any text content. Perfect for messages, codes, or instructions.</p>
      <textarea
        placeholder="Text message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <QrArea data={text} />
    </div>
  );
};

export default TextToQr;
