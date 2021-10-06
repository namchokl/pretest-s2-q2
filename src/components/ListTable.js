import classes from './ListTable.moduel.css';

const ListTable = ({ items }) => {
	let tableRows = null;

	if (items && items.length) {
		tableRows = items.map((item) => {
			return (
				<tr key={item}>
					<td>{item}</td>
				</tr>
			);
		});
	}

	return (
		<div>
			{tableRows && (
				<table>
					<tbody>{tableRows}</tbody>
				</table>
			)}

			{!tableRows && <h3>-No items-</h3>}
		</div>
	);
};

export default ListTable;
