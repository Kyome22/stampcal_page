import React from "react";
import { useTranslation } from "react-i18next";
import "./Top.css";

export default function Top() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const imgs = (images: string[]) => {
    return images.map((value, i) => (
      <img
        className="screen-shot"
        key={`img-${i}`}
        src={`images/${lang}/${value}`}
      />
    ));
  };

  return (
    <div className="section top">
      <div className="app">
        <img className="app-icon" src="images/icon.png" alt="" />
        <span className="app-name">{t("app_name")}</span>
      </div>
      <h2 className="catchcopy">{t("catchcopy")}</h2>
      <div>{imgs(["stamps.png", "logs.png"])}</div>
      <img
        className="download-icon"
        src={`images/${i18n.language}/download_on_the_App_Store.svg`}
        alt=""
        onClick={() => {
          window.location.href = t("download_url");
        }}
      />
    </div>
  );
}
