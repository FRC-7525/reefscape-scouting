import { StyleSheet, Text, View } from 'react-native';
import MathButton from '../components/MathButton';
import Separator from '../components/Separator';

function AlgaeView() {
  return (
    <>
        <Separator />
        <View>
            <Text>Algae</Text>

            <Text>
                <MathButton operation="-" idToEdit="algaeInNet" minOrMax={0}/>
                In Net 
                <Text id="algaeInNet">0</Text>
                <MathButton operation="+" idToEdit="algaeInNet"/>
            </Text>
            

            <Text>
                <MathButton operation="-" idToEdit="algaeInProcessor" minOrMax={0}/>
                In Processor 
                <Text id="algaeInProcessor">0</Text>
                <MathButton operation="+" idToEdit="algaeInProcessor"/>
            </Text>
        
        </View>
    </>
  )
}

export default AlgaeView;