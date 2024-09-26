import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import JobsList from "./components/jobslist";


const language = navigator.language.split(/[-_]/)[0];

console.log(language)
ReactDOM.render(
    <IntlProvider locale={language} >
        <JobsList lenguaje={language} />
    </IntlProvider>,
    document.getElementById("root")
);
