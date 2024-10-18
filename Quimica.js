import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Quimica({ route, navigation }) {
  const { Matematica, Biologia, Portugues } = route.params;
  const [resultado, setResultado] = useState(0);
  const [textAnswer1, setTextAnswer1] = useState('');
  const [textAnswer2, setTextAnswer2] = useState('');
  const [checkboxAnswer11, setCheckboxAnswer11] = useState(false);
  const [checkboxAnswer12, setCheckboxAnswer12] = useState(false);
  const [checkboxAnswer21, setCheckboxAnswer21] = useState(false);
  const [checkboxAnswer22, setCheckboxAnswer22] = useState(false);
  const [radioAnswer1, setRadioAnswer1] = useState('');
  const [radioAnswer2, setRadioAnswer2] = useState('');
  const [pickerAnswer1, setPickerAnswer1] = useState('');
  const [pickerAnswer2, setPickerAnswer2] = useState('');

  const handleNext = () => {
    let newResultado = 0;

    if (textAnswer1 && textAnswer1.toLowerCase() === 'oxigênio') {
      newResultado++;
    }

    if (textAnswer2 && textAnswer2.toLowerCase() === 'vira água') {
      newResultado++;
    }

    if (checkboxAnswer11) {
      newResultado++;
    }

    if (checkboxAnswer22) {
      newResultado++;
    }

    if (radioAnswer1 && radioAnswer1 === 'NaCl') {
      newResultado++;
    }

    if (radioAnswer2 && radioAnswer2 === 'sólido') {
      newResultado++;
    }

    if (pickerAnswer1 && pickerAnswer1 === 'Substância formada por dois ou mais elementos') {
      newResultado++;
    }

    if (pickerAnswer2 && pickerAnswer2 === 'Forma óxido') {
      newResultado++;
    }

    setResultado(newResultado);

    navigation.navigate('Resultado', {
      Quimica: newResultado,
      Matematica,
      Biologia,
      Portugues
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Química</Text>
        
        <Text style={styles.label}>1. Qual gás nós respiramos?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer1}
          onChangeText={setTextAnswer1}
        />

        <Text style={styles.label}>2. O que acontece quando o gelo derrete?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer2}
          onChangeText={setTextAnswer2}
        />

        <Text style={styles.label}>3. O que é um líquido?</Text>
        <CheckBox
          title="Algo que flui"
          checked={checkboxAnswer11}
          onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
        />
        <CheckBox
          title="Algo que é gasoso"
          checked={checkboxAnswer12}
          onPress={() => setCheckboxAnswer12(!checkboxAnswer12)}
        />

        <Text style={styles.label}>4. O que acontece ao ferver água?</Text>
        <CheckBox
          title="Fica fria"
          checked={checkboxAnswer21}
          onPress={() => setCheckboxAnswer21(!checkboxAnswer21)}
        />
        <CheckBox
          title=" Vira vapor"
          checked={checkboxAnswer22}
          onPress={() => setCheckboxAnswer22(!checkboxAnswer22)}
        />


        <Text style={styles.label}>5.Qual é a fórmula do sal de cozinha?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
          <View style={styles.radioContainer}>
            <Text>NaCl</Text>
            <RadioButton value="NaCl" />
          </View>
          <View style={styles.radioContainer}>
            <Text>KCl</Text>
            <RadioButton value="KCl" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>6. Qual é o estado da água ao ser congelada?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
          <View style={styles.radioContainer}>
            <Text>sólido</Text>
            <RadioButton value="sólido" />
          </View>
          <View style={styles.radioContainer}>
            <Text>gasoso</Text>
            <RadioButton value="gasoso" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>7. O que é um composto químico?</Text>
        <Picker
          selectedValue={pickerAnswer1}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Substância formada por dois ou mais elementos" value="Substância formada por dois ou mais elementos" />
          <Picker.Item label="Mistura de gases" value="Mistura de gases" />
        </Picker>

        <Text style={styles.label}>8. O que acontece quando um metal enferruja?</Text>
        <Picker
          selectedValue={pickerAnswer2}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Forma óxido" value="Forma óxido" />
          <Picker.Item label="Fica mais pesado" value="Fica mais pesado" />
        </Picker>

        <Button title="Avançar" onPress={handleNext} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF0F5',
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
