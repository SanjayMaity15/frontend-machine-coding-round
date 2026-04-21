import React, { useState } from "react";
import accordianData from "../src/utils/accordianData";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const App = () => {
	const [activateId, setActivateId] = useState(null);

	function handleClick(id) {
		setActivateId((prev) => (prev === id ? null : id));
	}

	return (
		<div className="flex justify-center items-center">
      <div>
        <h1 className="text-center text-4xl font-bold mt-4">Accordian</h1>
				<div className="flex flex-col gap-4 mt-5">
					{accordianData?.map((elem, index) => (
						<li
							key={elem.id}
							className="list-none bg-gray-200 p-2 w-150"
							onClick={() => handleClick(elem.id)}
						>
							<div className="flex justify-between">
								<h2 className="text-xl font-semibold">
									{elem.title}
								</h2>

								{elem.id === activateId ? (
									<FaAngleUp />
								) : (
									<FaAngleDown />
								)}
							</div>
							{elem.id === activateId && <p>{elem.content}</p>}
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
