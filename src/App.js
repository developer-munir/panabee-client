import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routers/router";

function App() {
  return (
    <div className="font-serif">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
