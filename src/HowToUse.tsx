import React from "react";
import { useTranslation } from "react-i18next";
import "./HowToUse.css";

export default function HowToUse() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const subtitle = (text: string) => {
    return (
      <div className="label">
        <img className="status-icon" src="images/status.png" />
        <p className="text">{text}</p>
      </div>
    );
  };

  const imgs = (images: string[]) => {
    return images.map((value, i) => (
      <img
        className="screen-shot"
        key={`img-${i}`}
        src={`images/${lang}/${value}`}
      />
    ));
  };

  const explain = (text: string, images: string[]) => {
    return (
      <div className="explain">
        {imgs(images)}
        <p className="limited-explain">{text}</p>
      </div>
    );
  };

  return (
    <div className="section">
      <a className="anchor" id="how_to_use" />
      <p className="title">{t("how_to_use")}</p>
      {subtitle(t("add_stamp"))}
      {explain(t("explain1"), ["add_stamp_1.png"])}
      {explain(t("explain2"), ["add_stamp_2.png", "add_stamp_3.png"])}
      {subtitle(t("record_on_calendar"))}
      {explain(t("explain3"), ["record_on_calendar_1.png"])}
      {explain(t("explain4"), [
        "record_on_calendar_2.png",
        "record_on_calendar_3.png",
      ])}
      {subtitle(t("remove_stamp"))}
      {explain(t("explain5"), ["remove_stamp.png"])}
    </div>
  );
}
