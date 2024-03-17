import React from "react";
import i18n from "i18next";
import "./Terrier.css";

export default function Terrier() {
  const lang = i18n.language;

  return (
    <div className="terrier">
      <a href={`https://kyome.io/?lang=${lang}`}>
        <img
          className="terrier-target"
          src="https://kyome.io/images/kyome_terrier.png"
          alt="dog icon"
        />
      </a>
    </div>
  );
}
