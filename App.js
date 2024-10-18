import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Matematica from './components/Matematica';
import Biologia from './components/Biologia';
import Portugues from './components/Portugues';
import Quimica from './components/Quimica';
import Resultado from './components/Resultado';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Matematica" component={Matematica} />
        <Stack.Screen name="Biologia" component={Biologia} />
        <Stack.Screen name="Portugues" component={Portugues} />
        <Stack.Screen name="Quimica" component={Quimica} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}