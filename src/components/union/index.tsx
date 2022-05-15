import * as React from "react";
import Layout from "../layout";
import Main from "../main";
import Recommendations from "../recommendations";
import Technologies from "../technologies";
import Portfolio from "../portfolio";
import ContactMe from "../social";
import Footer from "../footer";
const Union = () => {
  return (
    <Layout>
      <Main />
      <Technologies />
      <Portfolio />
      <Recommendations />
      <ContactMe />
      <Footer />
    </Layout>
  );
};

export default Union;
