import * as React from "react";
import i18next from "i18next";
import global_en from "../../translations/english/global.json";
import global_sp from "../../translations/spanish/global.json";
import { I18nextProvider } from "react-i18next";
import Layout from "../layout";
import Main from "../main";
const Recommendations = React.lazy(() => import("../recommendations"));
const Technologies = React.lazy(() => import("../technologies"));
const Portfolio = React.lazy(() => import("../portfolio"));
const Footer = React.lazy(() => import("../footer"));
const ContactMe = React.lazy(() => import("../social"));
const Loading = React.lazy(() => import("../loading"));

const Union = () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  const [language, setLanguage] = React.useState("en");
  React.useEffect(() => {
    if (localStorage.getItem("language") === "en") {
      setLanguage("en");
    }
    else {
      setLanguage("sp");
    }
  }, [])

  i18next.init({
    interpolation: { escapeValue: false },
    lng: language,
    resources: {
      en: {
        global: global_en,
      },
      sp: {
        global: global_sp,
      },
    },
  });

  return (
    <React.Suspense fallback={<Loading />}>
      <I18nextProvider i18n={i18next}>
        <Layout>
          <Main />
          <Technologies />
          <Portfolio />
          <Recommendations />
          <ContactMe />
          <Footer />
        </Layout>
      </I18nextProvider >
    </React.Suspense>
  );
};

export default Union;
