// src/pages/institution/InstitutionPage.jsx
import { useParams } from "react-router-dom";
import Main from "./Main";
import { TEMPLATES } from "./templates";

export default function InstitutionPage() {
  const { page } = useParams();
  if (!page) return <Main />;
  const Template = TEMPLATES[page];
  return Template ? <Template /> : null; // InstitutionLayout already handles unknown/disabled pages
}