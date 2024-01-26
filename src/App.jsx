import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import NotepadHome from "./Pages/Notepad/NotepadHome";
import "./App.css";
import SignUp from "./Pages/Login_Flow/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="">
        <Route index element={<NotepadHome />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
