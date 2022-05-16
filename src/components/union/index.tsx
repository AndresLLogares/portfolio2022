import * as React from "react";
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
  return (
    <React.Suspense fallback={<Loading />}>
      <Layout>
        <Main />
        <Technologies />
        <Portfolio />
        <Recommendations />
        <ContactMe />
        <Footer />
      </Layout>
    </React.Suspense>

  );
};

export default Union;
