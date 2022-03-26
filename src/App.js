import "./App.css";
import Header from "./components/Header/Header";
import Ques from "./components/Q&A/Ques";
import Store from "./components/Store/Store";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Store></Store>
            <Ques></Ques>
        </div>
    );
}

export default App;
