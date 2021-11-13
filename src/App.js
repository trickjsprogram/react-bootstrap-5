import "./App.css";
import Datatable from "./component/Datatable";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
// import Tab from "./component/Tab";
// import Spinner from "./component/Spinner";
// import Badge from "./component/Badge";
// import ButtonMDB from "./component/ButtonMDB";
// import PopOver from "./component/PopOver";
// import ToolTip from "./component/ToolTip";
// import Modal from "./component/Modal";
// import Card from "./component/Card";
// import Collapse from "./component/Collapse";
// import Accordion from "./component/Accordion";
// import FormValidation from "./component/FormValidation";
// import ImageSlider from "./component/ImageSlider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h3>MDB Bootstrap 5 Table Component</h3>
      <Datatable />
      <Footer />
    </div>
  );
}

export default App;
