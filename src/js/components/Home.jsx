import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div>
					<Jumbotron />
					<div className="row">
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
					</div>
				</div>
				
			</div>
			<Footer/>
		</div>
	);
};

export default Home;