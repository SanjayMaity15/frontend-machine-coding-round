import React, { useState } from "react";

const App = () => {
	const [userData, setUserData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState({});

	function validate(userData) {
		const newError = {};

		if (!userData.username) {
			newError.username = "Username is required";
		} else if (userData.username.length < 6) {
			newError.username = "Username must be 6 char or greater";
		}

		if (!userData.email) {
			newError.email = "Email is required";
		}

		if (!userData.password) {
			newError.password = "Password is required";
		} else if (userData.password.length < 8) {
			newError.password = "Password must be 8 char or above";
		}


    return newError
	}

	function handleFormInput(e) {
		const { name, value } = e.target;
		setUserData((prev) => ({ ...prev, [name]: value }));
	}

	function handleFormSubmit(e) {
		e.preventDefault()
    const validateError = validate(userData)
    if (Object.keys(validateError).length > 0) {
      setError(validateError)
      return;
    }

    console.log(userData);
	}

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleFormSubmit}>
				<h1>Form Validation</h1>
				<div>
					<label htmlFor="username">Username : </label>
					<input
						type="text"
						id="username"
						name="username"
						required
						value={userData.username}
						onChange={handleFormInput}
					/>
					{error.username && <p>{error.username}</p>}
				</div>
				<div>
					<label htmlFor="email">Email : </label>
					<input
						type="email"
						id="email"
						name="email"
						required
						value={userData.email}
						onChange={handleFormInput}
					/>
					{error.email && <p>{error.email}</p>}
				</div>
				<div>
					<label htmlFor="pass">Password : </label>
					<input
						type="password"
						id="pass"
						name="password"
						required
						value={userData.password}
						onChange={handleFormInput}
					/>
					{error.password && <p>{error.password}</p>}
				</div>

				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default App;
