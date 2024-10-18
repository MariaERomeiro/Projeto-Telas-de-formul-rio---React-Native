import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Portugues({ route, navigation }) {
   const { Matematica, Biologia } = route.params;
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

    if (textAnswer1 && textAnswer1.toLowerCase() === '5') {
      newResultado++;
    }

    if (textAnswer2 && textAnswer2.toLowerCase() === '26') {
      newResultado++;
    }

    if (checkboxAnswer11) {
      newResultado++;
    }

    if (checkboxAnswer21) {
      newResultado++;
    }

    if (radioAnswer1 && radioAnswer1 === 'Ele vai ao cinema.') {
      newResultado++;
    }

    if (radioAnswer2 && radioAnswer2 === 'aventura') {
      newResultado++;
    }

    if (pickerAnswer1 && pickerAnswer1 === 'vamos') {
      newResultado++;
    }

    if (pickerAnswer2 && pickerAnswer2 === 'pássaros') {
      newResultado++;
    }

    setResultado(newResultado);

    navigation.navigate('Quimica', {
      Portugues: newResultado,
      Matematica,
      Biologia
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Português</Text>
        
        <Text style={styles.label}>1. Quantas vogais existem no alfabeto?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer1}
          onChangeText={setTextAnswer1}
        />

        <Text style={styles.label}>2. Quantas letras existem no alfabeto?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer2}
          onChangeText={setTextAnswer2}
        />

        <Text style={styles.label}>3. Qual é a forma correta do verbo na frase: Ela ___ ao mercado.</Text>
        <CheckBox
          title="vai"
          checked={checkboxAnswer11}
          onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
        />
        <CheckBox
          title="vou"
          checked={checkboxAnswer12}
          onPress={() => setCheckboxAnswer12(!checkboxAnswer12)}
        />

        <Text style={styles.label}>4. Qual é a forma correta do plural da palavra "maçã"?</Text>
        <CheckBox
          title="maçãs"
          checked={checkboxAnswer21}
          onPress={() => setCheckboxAnswer21(!checkboxAnswer21)}
        />
        <CheckBox
          title="maçães"
          checked={checkboxAnswer22}
          onPress={() => setCheckboxAnswer22(!checkboxAnswer22)}
        />

        <Text style={styles.label}>5. Qual das frases está correta?
        </Text>
        <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
          <View style={styles.radioContainer}>
            <Text>Eles vai ao cinema.</Text>
            <RadioButton value="Eles vai ao cinema." />
          </View>
          <View style={styles.radioContainer}>
            <Text>Ele vai ao cinema.</Text>
            <RadioButton value="Ele vai ao cinema." />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>6.Complete a frase: "Eu gosto de ler livros de ____."</Text>
        <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
          <View style={styles.radioContainer}>
            <Text>aventura</Text>
            <RadioButton value="aventura" />
          </View>
          <View style={styles.radioContainer}>
            <Text>aventurá</Text>
            <RadioButton value="aventurá" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>7. Qual é a forma correta do verbo na frase: "Nós ___ ao parque amanhã."</Text>
        <Picker
          selectedValue={pickerAnswer1}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Vai" value="vai" />
          <Picker.Item label="Vamos" value="vamos" />
        </Picker>

        <Text style={styles.label}>8. Qual a forma correta da palavra no plural: "pássaro"?</Text>
        <Picker
          selectedValue={pickerAnswer2}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Pássaros" value="pássaros" />
          <Picker.Item label="Pássares" value="pássares" />
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
