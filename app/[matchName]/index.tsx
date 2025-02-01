import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function MatchPage() {
  const { matchName } = useLocalSearchParams();
  
  return (
    <View>
      <Text style={{'color':'white'}}>Match: {matchName}</Text>
    </View>
  );
}