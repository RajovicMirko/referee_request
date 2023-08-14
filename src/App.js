import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import I18NProvider from "./i18n";
import RouterProvider from "./router";
import MUIProvider from "./style/MUIProvider";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <I18NProvider>
          <MUIProvider>
            <RouterProvider />
          </MUIProvider>
        </I18NProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
