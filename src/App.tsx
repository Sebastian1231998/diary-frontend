import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { book } from "ionicons/icons";
import Diary from "./pages/Diary";
import Contacts from "./pages/Contacts";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/global.css";

/* Context */
import { DiaryProvider } from "./context/Diary/DiaryProvider";
import Contact from "./pages/Contact";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <DiaryProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/diary">
              <Diary />
            </Route>
            <Route exact path="/contact/:id">
              <Contact />
            </Route>
            <Route exact path="/contacts/:category">
              <Contacts />
            </Route>

            <Redirect exact from="/" to="/diary" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/diary">
              <IonIcon icon={book} />
              <IonLabel>Diary</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </DiaryProvider>
  </IonApp>
);

export default App;
