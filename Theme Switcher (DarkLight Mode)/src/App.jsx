import React, { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const App = () => {
	const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

	function handleTheme() {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	}

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div>
			<h1 className="text-center text-4xl font-semibold mt-5 dark:bg-red-500">
				Theem changer
			</h1>

			<div className="flex justify-center items-center mt-6">
				<button
					className="bg-blue-500 text-white px-6 py-2  rounded-lg"
					onClick={handleTheme}
				>
          {
            theme === "dark" ? <FaRegSun/> : <FaRegMoon/>
          }
				</button>
			</div>
		</div>
	);
};

export default App;
