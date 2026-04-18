import React, { useRef, useState } from "react";

const App = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));

	const inputRef = useRef([]);

	function handleInputChange(value, index) {
		const newOtp = [...otp];

		console.log(newOtp);
		newOtp[index] = value;

		console.log(newOtp);
		setOtp(newOtp);

		if (value && index < otp.length - 1) {
			inputRef.current[index + 1].focus();
		}
	}

	function handleKeyDown(e, index) {
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			inputRef.current[index - 1].focus();
		}
	}

	console.log(inputRef);

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-400">
			{/* Card */}
			<div className="w-[420px] bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-8">
				{/* Title */}
				<h1 className="text-center text-3xl font-bold text-white tracking-wide">
					OTP Verification
				</h1>

				<p className="text-center text-sm text-white/80 mt-2">
					Enter the 4-digit code sent to your phone
				</p>

				{/* OTP Inputs */}
				<div className="flex justify-between mt-10 gap-3">
					{otp.map((item, index) => (
						<input
							key={index}
							type="text"
							value={item}
							maxLength={1}
							autoFocus={index === 0}
							ref={(el) => (inputRef.current[index] = el)}
							onChange={(e) =>
								handleInputChange(e.target.value, index)
							}
							onKeyDown={(e) => handleKeyDown(e, index)}
							className="
              w-16 h-16
              text-center text-2xl font-bold
              bg-white/90
              border-2 border-transparent
              rounded-xl
              shadow-md
              focus:outline-none
              focus:border-pink-500
              focus:ring-4 focus:ring-pink-300
              transition-all duration-200
              caret-pink-500
            "
						/>
					))}
				</div>

				{/* Button (optional UI enhancement) */}
				<button className="w-full mt-10 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all">
					Verify OTP
				</button>
			</div>
		</div>
	);
};

export default App;
