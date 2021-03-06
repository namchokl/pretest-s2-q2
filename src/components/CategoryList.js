import { useState, useEffect } from 'react';
import ListTable from './ListTable';

import classes from './CategoryList.module.css';

const CategoryList = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [loading, setLoading] = useState(false);

	const url = 'https://api.publicapis.org/categories';

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const res = await fetch(url);
				const data = await res.json();

				setData(data);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		}

		fetchData();
	}, []);

	useEffect(() => {
		if (keyword === '') {
			return setFilteredData(data.slice());
		}
		const filtered = data.filter((item) => {
			const regex = new RegExp(keyword, 'i');
			return item.match(regex);
		});
		setFilteredData(filtered);
	}, [keyword, data]);

	const keywordChangeHandler = (e) => {
		const filterKeyword = e.target.value;
		setKeyword(filterKeyword);
	};

	return (
		<div className={classes.container}>
			<label htmlFor='filter'>Filter:</label>
			<input
				id='filter'
				className={classes.filter_input}
				type='text'
				value={keyword}
				onChange={keywordChangeHandler}
				placeholder='enter a keyword'
			/>
			{!loading && <ListTable items={filteredData} />}
			{loading && <p>Loading data...</p>}
		</div>
	);
};

export default CategoryList;
