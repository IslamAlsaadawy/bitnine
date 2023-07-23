import logo from './logo.svg';
import './App.css';
import FormInput from './components/user/formInput/formInput';
import SignUp from './components/user/signUp/signUp';
import Navbar from './components/home/navbar/navbar';
import BlueButton from './components/resusable/button/blueButtonLink';
import AgensSql from './components/home/agensSql/agensSql';
import Aep from './components/home/AEP package/aep';
import KeyFeatures from './components/home/keyFeatures/keyFeatures';

function App() {
  return (
    <main>
     {/* <Navbar></Navbar> */}
    <AgensSql></AgensSql>
    <Aep></Aep>
    <KeyFeatures></KeyFeatures>
    </main>
  );
}

export default App;
