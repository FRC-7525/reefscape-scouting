// this is a really specific table row just for the summary page! hence the weirdish looking code

import { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";

interface TableRowProps {
    label: string;
    data: [ Promise<string>, Promise<string>? ];
}

function TableRow({ label, data }: TableRowProps) {
    const [ firstEntry, setFirstEntry ] = useState("");
    const [ secondEntry, setSecondEntry ] = useState("");

    useEffect(() => {
        const getEntries = async () => {
            setFirstEntry(await data[0] ?? "");
            setSecondEntry(await data[1] ?? "");
        }

        getEntries();
    }, []);

    return (
        <DataTable.Row>
            <DataTable.Cell>
                {label}
            </DataTable.Cell>
            <DataTable.Cell>
                {firstEntry}
            </DataTable.Cell>
            <DataTable.Cell>
                {secondEntry}
            </DataTable.Cell>
        </DataTable.Row>
    )
}

export default TableRow;