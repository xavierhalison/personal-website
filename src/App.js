import React, { useState } from "react";

import { GlobalContext as Context } from "global/context";

import Layout from "components/Layout/Layout";

import MainSection from "pages/main";
import CardsSection from "pages/cards";
import FeaturesSection from "pages/features";
import DropdownTextsSection from "pages/dropdownTexts";


const stateModel = {
  pages: [
    { name: "Home", id: "home" },
    { name: "my Skills", id: "features" },
    { name: "my XP", id: "cards" },
    { name: "more", id: "dropdowns" },
  ],
  activePage: "features"
}

function App() {
  const [state, setState] = useState({ ...stateModel });
  const { activePage } = state;


  return (
    <Context.Provider value={{ state, setState }}>
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
    </Context.Provider>
  );
}

export default App;
