import { useEffect, useRef, useState } from "react";
import QrArea from "../components/QrArea";
import styles from "../styles/TextToQr.module.css";

const TextToQr = () => {
  let [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <div>
      <h2>Plain Text QR Code</h2>
      <p>Generate a QR code containing any text content. Perfect for messages, codes, or instructions.</p>
      <textarea
        placeholder="Text message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      </div>
      <div> <QrArea data={text} /> </div>
    </div>
  );
};

export default TextToQr;
