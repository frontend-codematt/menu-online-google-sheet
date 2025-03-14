'use client';
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

// Legge la variabile d'ambiente
const DEFAULT_URL = process.env.NEXT_PUBLIC_QR_URL || "https://default.com";

export default function QRCodeGenerator() {
  const [text, setText] = useState(DEFAULT_URL);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const qrRef = useRef(null);

  // Funzione per scaricare il QR Code come immagine
  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Generatore di QR Code</h1>

      {/* Input per la personalizzazione colori */}
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col items-center">
          <label className="block text-sm">Colore QR:</label>
          <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} />
        </div>
        <div className="flex flex-col items-center">
          <label className="block text-sm">Colore Sfondo:</label>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
        </div>
      </div>

      {/* Contenitore del QR Code */}
      <div className="relative p-4 bg-white shadow-lg rounded-lg" ref={qrRef}>
        <QRCodeCanvas
          value={text}
          size={200}
          bgColor={bgColor}
          fgColor={fgColor}
          level="H"
        />
      </div>

      {/* Pulsante per scaricare il QR Code */}
      <button
        onClick={downloadQRCode}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Scarica QR Code
      </button>
    </div>
  );
}
