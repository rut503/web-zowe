import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JCLFiles from "./pages/JCLFiles";
import JobDetails from "./pages/JobDetails";

function App() {
	return (
	<div className="App">
		<Router>
			{/* <div className="nav-content"> */}
				<NavBar />
			{/* </div> */}
			<div className="main-content">
				<Switch>
					<Route exact path={"/"} component={JCLFiles}/>
					<Route exact path={"/details"} component={JobDetails}/>
				</Switch>
			</div>
			{/* <div className="footer-content"> */}
				<Footer />
			{/* </div> */}
		</Router>
	</div>
	);
}

export default App;
