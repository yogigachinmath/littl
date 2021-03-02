import "./styles.css";
import { IntlProvider } from "react-intl";
import { getLocaleData } from "./i18n/getLocalData";
import { flatten } from "flat";

export default function App() {
  // from the redux store we will get the locale,
  //  which will be passed to the intelProvider
  const localeData = getLocaleData("en");

  return (
    <IntlProvider
      locale={localeData.locale}
      messages={flatten(localeData.message)}
      defaultLocale="en"
    >
      {/* previous verison 
    <IntlProvider locale = {localeData.locale} messages = {localeData.message} defaultLocale="en" >
   */}
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </IntlProvider>
  );
}
