import React, { useEffect, useState } from "react";

const App = () => {
	const [search, setSearch] = useState("");
	const [searchRelatedValue, setSearchRelatedValue] = useState([]);
	const [showSug, setShowSug] = useState(false);
	const [cache, setCache] = useState({});

	async function fetchSearchRelatedData(search) {
		const res = await fetch(
			`https://dummyjson.com/recipes/search?q=${search}`,
		);

		const data = await res.json();

		setSearchRelatedValue(data.recipes);
		setCache((prev) => ({ ...prev, [search]: data.recipes }));
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			if (cache[search]) {
				return setSearchRelatedValue(cache[search]);
			} else {
				fetchSearchRelatedData(search);
			}
		}, 400);

		return () => clearTimeout(timer);
	}, [search]);

	return (
		<div className="search-box">
			<h1>Autocomplete Search Box</h1>
			<input
				type="text"
				placeholder="Seacrh here..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onFocus={() => setShowSug(true)}
				onBlur={() => setShowSug(false)}
			/>
			<div className="related-box">
				{showSug &&
					searchRelatedValue?.map((elem) => (
						<p key={elem.id}>{elem.name}</p>
					))}
			</div>
		</div>
	);
};

export default App;
