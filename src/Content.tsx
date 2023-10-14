import React from "react";
import { useTranslation } from "react-i18next";
import Top from "./Top";
import HowToUse from "./HowToUse";
import FAQ from "./FAQ";
import "./Content.css";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <Top />
      <div className="section">
        <a className="anchor" id="who_is_it_for" />
        <p className="title">{t("who_is_it_for")}</p>
        <ul className="users">
          <li>{t("user1")}</li>
          <li>{t("user2")}</li>
          <li>{t("user3")}</li>
        </ul>
      </div>
      <HowToUse />
      <FAQ />
    </div>
  );
}
