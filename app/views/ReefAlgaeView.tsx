import { getMatchData, updateReefScores } from '../api/data';
import MathBlock from '../components/MathBlock';
import { View } from 'react-native';

interface ReefAlgaeViewProps {
    phase: "teleop" | "autonomous";
};

function ReefAlgaeView({ phase }: ReefAlgaeViewProps) {
    return (
        <View>
            <MathBlock label="L4" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L4", count);
            }} />

            <MathBlock label="L3" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L3", count);
            }} />

            <MathBlock label="L2" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L2", count);
            }} />
            
            <MathBlock label="L1" min={0} max={10} onPress={(count: number) => {
                updateReefScores(phase, "L1", count);
            }} />
        </View>
        
    )

}

export default ReefAlgaeView;
