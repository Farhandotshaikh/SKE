// src/data/institutions/index.js
import gssCollege from "./gss-college";
import rpdDegree from "./rpd-degree";
import gssPuc from "./gss-puc";
import rpdPuc from "./rpd-puc";
import bcaChandgad from "./bca-chandgad";

// Registry: slug -> institution data
export const INSTITUTIONS = {
  [gssCollege.slug]: gssCollege,
  [rpdDegree.slug]: rpdDegree,
  [gssPuc.slug]: gssPuc,
  [rpdPuc.slug]: rpdPuc,
  [bcaChandgad.slug]: bcaChandgad,
};

// Lookup used by InstitutionLayout; returns undefined for an unknown slug
export const getInstitution = (slug) => INSTITUTIONS[slug];

// Handy for the Institutions listing page and sitemaps
export const ALL_INSTITUTIONS = Object.values(INSTITUTIONS);

// Page keys (everything except "main", which is always available).
// These must match the URL segment, the navbar keys and the TEMPLATES keys.
export const ALL_PAGES = [
  "about",
  "academics",
  "facilities",
  "admissions",
  "iqac",
  "organisational-structure",
  "placements",
  "student-corner",
  "student-information",
  "department",
  "exam-prep",
];

// Titles for the "coming soon" screen and for page headings
export const PAGE_TITLES = {
  main: "Home",
  about: "About",
  academics: "Academics",
  facilities: "Facilities",
  admissions: "Admissions",
  iqac: "IQAC",
  "organisational-structure": "Organisational Structure",
  placements: "Placements",
  "student-corner": "Student Corner",
  "student-information": "Student Information",
  department: "Departments",
  "exam-prep": "Exam Preparation",
};