import {useTypedSelector} from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import { Fragment } from 'react';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({cells: {order, data}}) => {
        return order.map((id) => {
            return data[id];
        })
    });

    const renderedCells = cells.map(cell => (
        <Fragment key = {cell.id} >
            <AddCell nextCellId = {cell.id}/>
            <CellListItem cell = {cell}/>
        </Fragment>
    ))

    return (
    <div>
        {renderedCells}
        <div className= {cells.length === 0 ? 'force-visible' : ''}>
            <AddCell nextCellId={null}/>
        </div>
    </div>
    )
};

export default CellList;    