import React from "react";

interface QRCodeDisplayProps {
  /** URL ou Base64 da imagem do QR code */
  qrCodeImage: string;
  /** Texto opcional para descrição ou instrução */
  altText?: string;
}

export const QRCodeImage: React.FC<QRCodeDisplayProps> = ({
  qrCodeImage,
  altText = "QR Code",
}) => {
  const base64String = qrCodeImage;
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img
        src={`data:image/png;base64,${base64String}`}
        alt={altText}
        className="w-48 h-48 object-contain"
      />
    </div>
  );
};
