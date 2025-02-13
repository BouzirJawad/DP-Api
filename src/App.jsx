import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Userpage from "./Userpage";
import Adminpage from "./Adminpage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow mt-3">
          <Routes> 
            <Route path="/" element={<Userpage />}/>
            <Route path="/admin" element={<Adminpage />}/>
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
