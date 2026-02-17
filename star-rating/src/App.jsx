import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const App = () => {
	const starLength = 5;
	const [currentRating, setCurrentRating] = useState(null);
	const [hoverRating, setHoverRating] = useState(null);

	return (
		<div>
			<h1>Star Rating</h1>

			<div>
				{Array.from({ length: starLength }).map((_, index) => {
					return (
						<span
							key={index}
							onClick={() => setCurrentRating(index + 1)}
							onMouseEnter={() => setHoverRating(index + 1)}
							onMouseLeave={() => setHoverRating(null)}
							style={{
								color: `${index < currentRating ? "green" : ""}`,
							}}
						>
							{index < currentRating ? (
								<FaStar />
							) : (
								<FaRegStar />
							)}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default App;
