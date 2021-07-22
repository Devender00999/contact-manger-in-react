import "./App.css";
import ContactManager from "./components/ContactManager";
import { createStore } from "redux";
import { Provider } from "react-redux";
function App() {
  const initialState = {
    contacts: [
      { id: 0, name: "Devender", number: "9873455981" },
      { id: 1, name: "Deepak Kumar", number: "9873455982" },
      { id: 2, name: "Raj Kumar", number: "9873455983" },
    ],
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_CONTACT":
        return { ...state, contacts: [...state.contacts, action.contact] };
      case "DELETE_CONTACT":
        return {
          ...state,
          contacts: [
            ...state.contacts.filter(
              (contact) => contact.id !== action.contact.id
            ),
          ],
        };
      default:
        return state;
    }
  }

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <ContactManager />
    </Provider>
  );
}

export default App;
