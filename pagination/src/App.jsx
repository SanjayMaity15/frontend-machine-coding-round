import React, { useEffect, useState } from "react";
import { PAGE_SIZE } from "../constant/constant";

const App = () => {
	const [productData, setProductData] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	let start = currentPage * PAGE_SIZE;
	let end = start + PAGE_SIZE;



	async function fetchProducts() {
		try {
			const response = await fetch(
				"https://dummyjson.com/products?limit=194",
			);

			const data = await response.json();
			setProductData(data.products);
			setTotalPage(Math.ceil(data.products.length / PAGE_SIZE));
		} catch (error) {
			console.log(error);
		}
	}

	// function showPageBtn() {
	// 	const pages = []

	// 	if (currentPage > 0) {
	// 		let prev = currentPage - 1
	// 		pages.push(prev)
	// 	}

	// 	pages.push(currentPage)

	// 	if(currentPage < totalPage-2)
	// 	{
	// 		let next = currentPage + 1
	// 		pages.push(next)
	// 	}

	// 	return pages

	// }

	useEffect(() => {
		fetchProducts();
	}, []);



	// console.log(productData)
	console.log(currentPage);
	// console.log(totalPage)
	return (
		<div>
			<h1 className=" heading ">PAGINATION</h1>

			<ul className="card-container">
				{productData?.slice(start, end).map((item) => (
					<li key={item.id} className="card">
						<img src={item.thumbnail} alt={item.title} />
						<span>{item.title}</span>
					</li>
				))}
			</ul>

			{/* paginaion button */}
			<div className="page-div">
				<button
					disabled={currentPage === 0}
					onClick={() => setCurrentPage((prev) => prev - 1)}
				>
					Prev
				</button>
				<div>
					{Array.from({ length: totalPage }).map((_, index) => (
						<button onClick={() => setCurrentPage(index)} style={{backgroundColor: currentPage === index && "green"}}>
							{index + 1}
						</button>
					))}
				</div>

				{/* <div>
					{showPageBtn()?.map((index) => (
						<button
							key={index}
							onClick={() => setCurrentPage(index)}
							style={{
								backgroundColor:
									currentPage === index && "green",
							}}
						>
							{index + 1}
						</button>
					))}
				</div> */}
				<button
					disabled={currentPage === totalPage - 1}
					onClick={() => setCurrentPage((prev) => prev + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default App;
