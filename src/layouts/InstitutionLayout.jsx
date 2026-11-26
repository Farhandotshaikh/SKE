// src/layouts/InstitutionLayout.jsx
import { useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import InstitutionNavbar from "../components/institution/InstitutionNavbar";
import Footer from "../components/Footer";
import { getInstitution, PAGE_TITLES } from "../data/institutions";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ComingSoon({ title, backTo }) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-3 text-gray-600">This page is coming soon.</p>
      <Link
        to={backTo}
        className="mt-6 rounded-md bg-indigo-700 px-5 py-2.5 text-white hover:bg-indigo-800"
      >
        Back to home
      </Link>
    </section>
  );
}

export default function InstitutionLayout() {
  // In React Router v6 a parent layout also receives its child route's params
  const { institute, page } = useParams();
  const inst = getInstitution(institute);

  // Unknown institute slug
  if (!inst) {
    return (
      <>
        <ScrollToTop />
        <ComingSoon title="Institute not found" backTo="/institutions" />
        <Footer />
      </>
    );
  }

  const base = `/institute/${inst.slug}`;
  const pageKey = page || "main";
  const enabled = pageKey === "main" || inst.pages.includes(pageKey);

  return (
    <>
      <ScrollToTop />
      <InstitutionNavbar inst={inst} />
      <main>
        {enabled ? (
          <Outlet context={inst} />
        ) : (
          <ComingSoon
            title={PAGE_TITLES[pageKey] || "Page not available"}
            backTo={base}
          />
        )}
      </main>
      <Footer />
    </>
  );
}