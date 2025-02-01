import MathBlock from '../components/MathBlock';
import { View } from 'react-native';

function ReefAlgaeView() {
    return (
        <View>
            <MathBlock label="L4" min={0} max={10} />
            <MathBlock label="L3" min={0} max={10} />
            <MathBlock label="L2" min={0} max={10} />
            <MathBlock label="L1" min={0} max={10} />
        </View>
        
    )

}

export default ReefAlgaeView;
