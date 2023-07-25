import './App.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/home';
import SignIn from './components/user/signIn/signIn';
import SignUp from './components/user/signUp/signUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  
  },
  {
    path: "/signin",
    element:<SignIn/>
  },
  {
    path: "/signup",
    element:<SignUp/>
  }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;
