import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import ReceiptPage from "./pages/ReceiptPage";

function App() {
  const myState = useSelector((state) => state.userState);
  console.log("Logged from App.js:", myState);

  return (
    <div className="relative h-screen">
      {myState && <Header />}
      <div className="absolute flex justify-center items-center top-20 w-screen h-4/5">
        {myState === false && <LoginPage />}
        {myState && <ReceiptPage />}
      </div>
      {myState && <Footer />}
    </div>
  );
}

export default App;
