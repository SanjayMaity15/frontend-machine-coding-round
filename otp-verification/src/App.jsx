import React, { useRef, useState } from "react";

const App = () => {
	const otpLength = 6;

	const [otpInput, setOtpInput] = useState(new Array(otpLength).fill(""));
	const otpRef = useRef([]);

	function handleOtpInputChange(val, index) {
		if (isNaN(val)) {
			return;	
		}

		const newOTPArray = [...otpInput];
		newOTPArray[index] = val;
		setOtpInput(newOTPArray);

		if (val !== "" && index < otpInput.length - 1) {
			otpRef.current[index + 1].focus();
		}
	}

	function handleKeyDown(key, index) {
		if (key === "Backspace") {
			const newOTP = [...otpInput];
			if (newOTP[index] !== "") {
				newOTP[index] = "";
				
			} else if (index > 0) {
				newOTP[index - 1] = "";
				otpRef.current[index - 1].focus();
				
			}
			setOtpInput(newOTP);
		}
	}

	return (
		<div>
			<h1>OTP VERIFICATION</h1>
			<div className="flex">
				{otpInput.map((item, index) => (
					<input
						key={index}
						type="text"
						maxLength={1}
						ref={(el) => (otpRef.current[index] = el)}
						
						autoFocus={index === 0}
						onChange={(e) =>
							handleOtpInputChange(e.target.value, index)
						}
						onKeyDown={(e) => handleKeyDown(e.key, index)}
					></input>
				))}
			</div>
		</div>
	);
};

export default App;
