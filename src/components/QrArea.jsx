import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import styles from "./QrArea.module.css";

const QrArea = ({ data }) => {
  const canvasRef = useRef(null);

  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Clear canvas when data is empty
    if (!data) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    QRCode.toCanvas(canvas, data, {
      width: 200,
      margin: 2,
      errorCorrectionLevel: "H",
      color: {
        dark: qrColor,
        light: bgColor,
      },
    });
  }, [data, qrColor, bgColor]);

  const downloadQr = () => {
    if (!data) return;

    const canvas = canvasRef.current;
    const link = document.createElement("a");

    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className={styles.qrArea}>
      <h1>Live Preview</h1>
      <p>Real-time QR code generation with instant updates</p>
      <canvas ref={canvasRef} />

      {/* Controls */}
      <div className={styles.controls}>
        <label>
          QR Color:
          <input
            type="color"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
          />
        </label>

        <label>
          Background:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
      </div>

      <button
        onClick={downloadQr}
        disabled={!data}
        style={{ marginTop: "10px" }}
      >
        Download PNG
      </button>
    </div>
  );
};

export default QrArea;
