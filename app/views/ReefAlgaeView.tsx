import { getMatchData, updateReefScores } from '../api/data';
import MathBlock from '../components/MathBlock';
import { View } from 'react-native';

interface ReefAlgaeViewProps {
    phase: "teleop" | "autonomous";
};

function ReefAlgaeView({ phase }: ReefAlgaeViewProps) {
    const getLevelData = async (level: "L4" | "L3" | "L2" | "L1") => {
        return getMatchData().then((data) => data[phase]["reef"][level]);
    };

    return (
        <View>
            <MathBlock label="L4" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L4", count);
            }} oldCount={getLevelData("L4")} />

            <MathBlock label="L3" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L3", count);
            }} oldCount={getLevelData("L3")} />

            <MathBlock label="L2" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L2", count);
            }} oldCount={getLevelData("L2")} />
            
            <MathBlock label="L1" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L1", count);
            }} oldCount={getLevelData("L1")} />
        </View>
        
    )

}

export default ReefAlgaeView;
