import React, { useState } from "react";

import { GlobalContext as Context } from "global/context";

import Layout from "components/Layout/Layout";

import MainSection from "pages/main";
import CardsSection from "pages/cards";
import FeaturesSection from "pages/features";
import DropdownTextsSection from "pages/dropdownTexts";

import PT_BR from "i18n/pt_br.json";
import EN_US from "i18n/en_us.json";
import { I18nContext } from "context/i18n";

const stateModel = {
  pages: [
    { name: "Home", id: "home" },
    { name: "my Skills", id: "features" },
    { name: "my XP", id: "cards" },
    { name: "more", id: "dropdowns" },
  ],
  activePage: "features",
  language: "PT_BR"
}

function App() {
  const [state, setState] = useState({ ...stateModel });
  const { activePage } = state;

  return (
    <Context.Provider value={{ state, setState }}>
      <I18nContext.Provider value={{ i18n: state.language === "PT_BR" ? PT_BR : EN_US }}>
        <Layout>
          {
            activePage === "home"
              ? <MainSection />
              : activePage === "features"
                ? <FeaturesSection />
                : activePage === "cards"
                  ? <CardsSection />
                  : activePage === "dropdowns"
                    ? <DropdownTextsSection />
                    : <></>
          }
        </Layout>
      </I18nContext.Provider>
    </Context.Provider>
  );
}

export default App;
