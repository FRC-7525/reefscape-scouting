import { DataTable } from "react-native-paper";
import TableHeader from "../components/TableHeader";
import { View } from "react-native";
import { getMatchData } from "../api/data";
import TableRow from "../components/TableRow";

// makes data point human friendly (true/false -> yes/no)
function makeHumanFriendly(data: any) {
    data = data.toString();

    if (data == "true") {
        data = "Yes";
    } else if (data == "false") {
        data = "No";
    }

    return data;
}

function SummaryTableView() {
    return (
        <View>
            <DataTable>
                <TableHeader titles={["Match Summary"]} />
                <TableRow label="Scouter" data={getMatchData().then((data) => data["scouterName"])} />
                <TableRow label="Match Number" data={getMatchData().then((data) => data["matchNumber"].toString())} />
                <TableRow label="Start Position" data={getMatchData().then((data) => data["autonomous"]["startPosition"])} />
                <TableRow label="Left Start" data={getMatchData().then((data) => makeHumanFriendly(data["autonomous"]["leftStart"]))} />
                <TableRow label="Climb Type" data={getMatchData().then((data) => data["teleop"]["climb"].toString())} />
            </DataTable>
        </View>
    )
}

export default SummaryTableView;
