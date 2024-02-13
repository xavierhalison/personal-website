import { createGlobalStyle } from "styled-components";

import MontserratReg from "assets/fonts/montserrat-v15-latin-regular.woff";
import MontserratReg2 from "assets/fonts/montserrat-v15-latin-regular.woff2";
import MontserratIt from "assets/fonts/montserrat-v15-latin-italic.woff";
import MontserratIt2 from "assets/fonts/montserrat-v15-latin-italic.woff2";
import Montserrat500 from "assets/fonts/montserrat-v15-latin-500.woff";
import Montserrat5002 from "assets/fonts/montserrat-v15-latin-500.woff2";
import Montserrat500It from "assets/fonts/montserrat-v15-latin-500italic.woff";
import Montserrat500It2 from "assets/fonts/montserrat-v15-latin-500italic.woff2";
import Montserrat600 from "assets/fonts/montserrat-v15-latin-600.woff";
import Montserrat6002 from "assets/fonts/montserrat-v15-latin-600.woff2";
import Montserrat600It from "assets/fonts/montserrat-v15-latin-600italic.woff";
import Montserrat600It2 from "assets/fonts/montserrat-v15-latin-600italic.woff2";
import Montserrat700 from "assets/fonts/montserrat-v15-latin-700.woff";
import Montserrat7002 from "assets/fonts/montserrat-v15-latin-700.woff2";
import Montserrat700It from "assets/fonts/montserrat-v15-latin-700italic.woff";
import Montserrat700It2 from "assets/fonts/montserrat-v15-latin-700italic.woff2";
import Montserrat800 from "assets/fonts/montserrat-v15-latin-800.woff";
import Montserrat8002 from "assets/fonts/montserrat-v15-latin-800.woff2";
import Montserrat800It from "assets/fonts/montserrat-v15-latin-800italic.woff";
import Montserrat800It2 from "assets/fonts/montserrat-v15-latin-800italic.woff2";
import Montserrat900 from "assets/fonts/montserrat-v15-latin-900.woff";
import Montserrat9002 from "assets/fonts/montserrat-v15-latin-900.woff2";
import Montserrat900It from "assets/fonts/montserrat-v15-latin-900italic.woff";
import Montserrat900It2 from "assets/fonts/montserrat-v15-latin-900italic.woff2";
import MontserratAltReg from "assets/fonts/montserrat-alternates-v12-latin-regular.woff";
import MontserratAltReg2 from "assets/fonts/montserrat-alternates-v12-latin-regular.woff2";
import MontserratAltIt from "assets/fonts/montserrat-alternates-v12-latin-italic.woff";
import MontserratAltIt2 from "assets/fonts/montserrat-alternates-v12-latin-italic.woff2";
import MontserratAlt700 from "assets/fonts/montserrat-alternates-v12-latin-700.woff";
import MontserratAlt7002 from "assets/fonts/montserrat-alternates-v12-latin-700.woff2";
import MontserratAlt700It from "assets/fonts/montserrat-alternates-v12-latin-700italic.woff";
import MontserratAlt700It2 from "assets/fonts/montserrat-alternates-v12-latin-700italic.woff2";
import MontserratAlt900 from "assets/fonts/montserrat-alternates-v12-latin-900.woff";
import MontserratAlt9002 from "assets/fonts/montserrat-alternates-v12-latin-900.woff2";
import MontserratAlt900It from "assets/fonts/montserrat-alternates-v12-latin-900italic.woff";
import MontserratAlt900It2 from "assets/fonts/montserrat-alternates-v12-latin-900italic.woff2";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    :root {
        --headings: radial-gradient(circle, #A339FF 0%, #474BFF 50%, #474961 100%);
        --main-text: #474961;
        --sub-text: #ffffff;
        --background: #ffffff;

        --linear-gradient-1: linear-gradient(135deg, #F2F6FB 0%, #E1E5F0 100%);
        --linear-gradient-2: linear-gradient(135deg, #DE3190 0%, #A339FF 100%);
        --linear-gradient-3: linear-gradient(135deg, #A339FF 0%, #474BFF 100%);
        --linear-gradient-4: linear-gradient(135deg, #474BFF 0%, #474961 100%);

        --linear-gradient-5: linear-gradient(180deg, #F2F6FB 0%, #E1E5F0 100%);
        --bg-main-section: linear-gradient(180deg, #FFFFFF 0%, #F2F6FB 100%);

        --radial-gradient-1: radial-gradient(circle, #FF5645 0%, #A339FF 50%, #474BFF 100%);
        --radial-gradient-2: radial-gradient(circle, #FFABA3 0%, #FFD79E 50%, #A9D3B7 100%);
        --radial-gradient-3: radial-gradient(circle, #FFCB3D 0%, #FF5645 50%, #DE3190 100%);

        --padding-sm: 1em;
        --padding-lg: 12em;
    }

    /* montserrat-regular - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url(${MontserratReg2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratReg}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-italic - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 400;
        src: local(''),
            url(${MontserratIt2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratIt}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-500 - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        src: local(''),
            url(${Montserrat5002}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat500}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-500italic - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 500;
        src: local(''),
            url(${Montserrat500It2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat500It}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-600 - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        src: local(''),
            url(${Montserrat6002}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat600}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-600italic - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 600;
        src: local(''),
            url(${Montserrat600It2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat600It}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-700 - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        src: local(''),
            url(${Montserrat7002}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat700}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-700italic - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 700;
        src: local(''),
            url(${Montserrat700It2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat700It}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-800 - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        src: local(''),
            url(${Montserrat8002}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat800}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-800italic - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 800;
        src: local(''),
            url(${Montserrat800It2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat800It}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-900 - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        src: local(''),
            url(${Montserrat9002}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat900}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-900italic - latin */
    @font-face {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 900;
        src: local(''),
            url(${Montserrat900It2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${Montserrat900It}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-alternates-regular - latin */
    @font-face {
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url(${MontserratAltReg2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratAltReg}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-alternates-italic - latin */
    @font-face {
        font-family: 'Montserrat Alternates';
        font-style: italic;
        font-weight: 400;
        src: local(''),
            url(${MontserratAltIt2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratAltIt}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-alternates-700 - latin */
    @font-face {
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 700;
        src: local(''),
            url(${MontserratAlt7002}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratAlt700}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-alternates-700italic - latin */
    @font-face {
        font-family: 'Montserrat Alternates';
        font-style: italic;
        font-weight: 700;
        src: local(''),
            url(${MontserratAlt700It2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratAlt700It}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-alternates-900 - latin */
    @font-face {
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 900;
        src: local(''),
            url(${MontserratAlt9002}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratAlt900}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-alternates-900italic - latin */
    @font-face {
        font-family: 'Montserrat Alternates';
        font-style: italic;
        font-weight: 900;
        src: local(''),
            url(${MontserratAlt900It2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url(${MontserratAlt900It}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
`;
