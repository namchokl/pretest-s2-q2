import classes from './ListTable.moduel.css';

const ListTable = ({ items }) => {
	let tableRows = null;

	if (items && items.length) {
		tableRows = items.map((item, index) => {
			return (
				<tr key={item}>
					<td>{index}</td>
					<td>{item}</td>
				</tr>
			);
		});
	}

	return (
		<div>
			{tableRows && (
				<table>
					<thead>
						<tr>
							<td>No.</td>
							<td>Name</td>
						</tr>
					</thead>
					<tbody>{tableRows}</tbody>
				</table>
			)}

			{!tableRows && <h3>-No items-</h3>}
		</div>
	);
};

export default ListTable;
