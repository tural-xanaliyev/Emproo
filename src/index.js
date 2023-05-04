import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./root/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { studentsSlice } from "./features/redux/studentsSlice";
import { teachersSlice } from "./features/redux/teachersSlice";
import { usersSlice } from "./features/redux/usersSlice";
import { AuthProvider } from "./features/context/AuthProvider";
import { groupsSlice } from "./features/redux/groupSlice";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(teachersSlice.endpoints.getTeachers.initiate());
store.dispatch(studentsSlice.endpoints.getStudents.initiate());
store.dispatch(usersSlice.endpoints.getUsers.initiate());
store.dispatch(groupsSlice.endpoints.getgroups.initiate());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
