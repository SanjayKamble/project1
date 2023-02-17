// import { CONFIG_FILES } from 'next/dist/shared/lib/constants';
import { useMemo } from 'react';
import { useTable} from 'react-table';
// import { useGlobalFilter, usePagination } from 'react-table';
import { COLUMNS } from './columns';
import db from '../../db.json'

// import MOCK_DATA from './MOCK_DATA.json'

const FilteringTable = ({data1,columns1 }) => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => db.Users, [])

    // const columns = useMemo(() => columns1, []);
    // const data = useMemo(() => data1, []);

    console.log(columns);
    console.log(data);

    const tableInstance = useTable({
        columns,
        data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      
    } = tableInstance;

    // console.log(searchable);
    // console.log(getTableProps());
    // console.log(getTableBodyProps());
    // console.log(headerGroups);
    // console.log(headerGroups[0].getHeaderGroupProps());
    // console.log(headerGroups[0].headers[0].getHeaderProps());
    // console.log(headerGroups[0].headers[0].render('HEADER'));
    // const { globalFilter } = state;
    return (
        <>
            <table {...getTableProps()}>
                {/* header */}
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('HEADER')}</th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>

                {/* body */}
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>

            </table>
           
        </>
    )
}

export default FilteringTable