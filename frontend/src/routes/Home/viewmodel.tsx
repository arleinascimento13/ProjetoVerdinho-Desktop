import React from "react";
import Card from "../../components/card/Card";

const Dashboard: React.FC = () => {
	return (
		<div className="d-flex">
			<div className="flex-grow-1">
				<div className="container-fluid">
					<div className="row bg-primary text-white p-3">
						<div className="col">
							<h2>Dashboard</h2>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-md-3">
							<Card totalPets={100} CorDoCard="bg-info" corDoTexto="text-white" iconName="PawPrint" />
						</div>
						<div className="col-md-3">
							<Card totalPets={100} CorDoCard="bg-danger" corDoTexto="text-white" iconName="Bone" />
						</div>
						<div className="col-md-3">
							<Card totalPets={100} CorDoCard="bg-info" corDoTexto="text-white" iconName="Bird" />
						</div>
						<div className="col-md-3">
							<Card totalPets={100} CorDoCard="bg-warning" corDoTexto="text-white" iconName="Turtle" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
