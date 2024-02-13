import { useState, useEffect } from "react";

import Layout from "components/layout";
import MainSection from "components/sections/main";
import CardsSection from "components/sections/cards";
import FeaturesSection from "components/sections/features";
import DropdownTextsSection from "components/sections/dropdownTexts";
import FooterSection from "components/sections/footer";

import { LandingContext as Context } from "global/context";

import { scrollTo } from "helpers/navigation";
import Animations from "components/animations";

function App() {
  const [page, setPage] = useState("inicio");
  const [globalState, setGlobalState] = useState({});

  useEffect(() => {
    scrollTo(page);
  }, [page]);

  return (
    <Context.Provider value={{ page, setPage, globalState, setGlobalState }}>
      <Animations />
      <Layout>
        <MainSection />
        <FeaturesSection />
        <CardsSection />
        <DropdownTextsSection />
        <FooterSection />
      </Layout>
    </Context.Provider>
  );
}

export default App;
