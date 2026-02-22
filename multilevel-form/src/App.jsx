import React, { useState } from "react";

const App = () => {
	const [step, setStep] = useState(1);

	const [userFormData, setUserFormData] = useState({
		username: "",
		age: "",
		email: "",
		mpMarks: "",
		hsMarks: "",
		highestQualification: "",
		term: false,
	});

	function handleFormInputChange(e) {
		const { name, value, type, checked } = e.target;

		setUserFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log("submitting");
		if (userFormData.term) {
			console.log(userFormData);
		}
	}

	console.log(userFormData);

	return (
		<div className="container">
			{/* top multilevel form flow */}
			<div className="step-container">
				<div className={`step ${step >= 1 && "active"}`}>1</div>
				<div className={`line ${step > 1 && "active"}`}></div>
				<div className={`step ${step >= 2 && "active"}`}>2</div>
				<div className={`line ${step > 2 && "active"}`}></div>
				<div className={`step ${step >= 3 && "active"}`}>3</div>
			</div>

			{/* form */}
			<form onSubmit={handleSubmit}>
				{step === 1 && (
					<div>
						<h1 className="form-heading">Personal Details</h1>

						<div>
							<label htmlFor="uname">Username: </label>
							<input
								type="text"
								id="uname"
								name="username"
								value={userFormData.username}
								onChange={(e) => handleFormInputChange(e)}
							/>
						</div>

						<div>
							<label htmlFor="age">Age: </label>
							<input
								type="text"
								id="age"
								name="age"
								value={userFormData.age}
								onChange={(e) => handleFormInputChange(e)}
							/>
						</div>

						<div>
							<label htmlFor="email">Email: </label>
							<input
								type="text"
								id="email"
								name="email"
								value={userFormData.email}
								onChange={(e) => handleFormInputChange(e)}
							/>
						</div>

						<div className="btn-container">
							<button
								type="button"
								onClick={() => setStep((prev) => prev + 1)}
							>
								Next
							</button>
						</div>
					</div>
				)}

				{step === 2 && (
					<div>
						<h1 className="form-heading">Educational Details</h1>

						<div>
							<label htmlFor="mp">MP Marks: </label>
							<input
								type="text"
								id="mp"
								name="mpMarks"
								value={userFormData.mpMarks}
								onChange={(e) => handleFormInputChange(e)}
							/>
						</div>

						<div>
							<label htmlFor="hs">HS Marks: </label>
							<input
								type="text"
								id="hs"
								name="hsMarks"
								value={userFormData.hsMarks}
								onChange={(e) => handleFormInputChange(e)}
							/>
						</div>

						<div>
							<label htmlFor="high">
								Highest Qualification:{" "}
							</label>
							<select
								name="highestQualification"
								id="high"
								value={userFormData.highestQualification}
								onChange={(e) => handleFormInputChange(e)}
							>
								<option value="">Select Option</option>
								<option value="b.tech">B.Tech</option>
								<option value="m.tech">M.Tech</option>
								<option value="diploma">Diploma</option>
							</select>
						</div>

						<div className="btn-container">
							<button
								type="button"
								className="prev"
								onClick={() => setStep((prev) => prev - 1)}
							>
								Prev
							</button>
							<button
								type="button"
								onClick={() => setStep((prev) => prev + 1)}
							>
								Next
							</button>
						</div>
					</div>
				)}

				{step === 3 && (
					<div>
						<h1 className="form-heading">Confirmation</h1>

						<div className="flex">
							<input
								type="checkbox"
								name="term"
								id="term"
								onChange={(e) => handleFormInputChange(e)}
								value={userFormData.term}
							/>
							<label htmlFor="term">
								Please accept term and condition
							</label>
						</div>

						<div className="btn-container">
							<button type="submit">Submit</button>
						</div>
					</div>
				)}
			</form>
		</div>
	);
};

export default App;
