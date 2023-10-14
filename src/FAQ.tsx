import React from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

export default function FAQ() {
  const { t } = useTranslation();

  const qa = (question: string, answer: string) => {
    return (
      <div className="qa-box">
        <div className="qa">
          <p className="mark">Q.</p>
          <p className="text">{question}</p>
        </div>
        <div className="qa">
          <p className="mark">A.</p>
          <p className="text">{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="section">
      <a className="anchor" id="faq" />
      <p className="title">{t("faq")}</p>
      {qa(t("question1"), t("answer1"))}
      {qa(t("question2"), t("answer2"))}
    </div>
  );
}
