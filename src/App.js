import "./App.css";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Logos from "./components/Logos";



const App = () => {

    return (
        <div className="App">
            <Header />
            <Logos />
            <Form />
            <Copyright />
            <Footer />
        </div>
    )
}

export default App;