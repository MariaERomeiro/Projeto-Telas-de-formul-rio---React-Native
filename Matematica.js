import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Matematica({ navigation }) {
  const [resultado, setResultado] = useState(0)
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
    if (textAnswer1 && textAnswer1 == 5){
      newResultado++;
    }

    if (textAnswer2 && textAnswer2 == 3.14){
        newResultado++;
    }

    if (checkboxAnswer11){
        newResultado++;
    }

      if (checkboxAnswer21){
        newResultado++;
    }

      if (radioAnswer1 && radioAnswer1 == 4){
        newResultado++;
    }

       if (radioAnswer2 && radioAnswer2 == 8){
        newResultado++;
    }

       if (pickerAnswer1 && pickerAnswer1 == 175.00){
        newResultado++;
    }

       if (pickerAnswer2 && pickerAnswer2 == 12){
        newResultado++;
    }

    setResultado(newResultado)

    navigation.navigate('Biologia', {
Matematica: resultado, 
 });
  };

  return (
       <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Matemática</Text>
      <Text style={styles.label}>1. Julia tinha 8 maçãs, ela comeu uma no intervalo e deu 2 para seu amigo Gustavo, quantas maçãs Julia tem? </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua resposta"
        value={textAnswer1}
        onChangeText={setTextAnswer1}
      />

      <Text style={styles.label}>2. Qual o valor arredondado de PI?</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua resposta"
        value={textAnswer2}
        onChangeText={setTextAnswer2}
      />

      <Text style={styles.label}>3. Qual é a soma de 5 e 3?</Text>
      <CheckBox
        title="8"
        checked={checkboxAnswer11}
        onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
      />
      <CheckBox
        title="9"
        checked={checkboxAnswer12}
        onPress={() => setCheckboxAnswer12(!checkboxAnswer12)}
      />

      <Text style={styles.label}>4. Qual é o resultado de 10 - 4?</Text>
      <CheckBox
        title="6"
        checked={checkboxAnswer21}
        onPress={() => setCheckboxAnswer21(!checkboxAnswer21)}
      />
      <CheckBox
        title="8"
        checked={checkboxAnswer22}
        onPress={() => setCheckboxAnswer22(!checkboxAnswer22)}
      />

      <Text style={styles.label}>5. Qual é o próximo número na sequência: 1, 2, 3, ___?</Text>
      <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
        <View style={styles.radioContainer}>
          <Text>4</Text>
          <RadioButton value="4" />
        </View>
        <View style={styles.radioContainer}>
          <Text>5</Text>
          <RadioButton value="5" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}>6. Se você tem 12 balas e come 4, quantas balas restam?</Text>
      <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
        <View style={styles.radioContainer}>
          <Text>8</Text>
          <RadioButton value="8" />
        </View>
        <View style={styles.radioContainer}>
          <Text>6</Text>
          <RadioButton value="6" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}>7. Se você comprar 3 camisetas que custam R$ 25,00 cada e um par de tênis que custa R$ 100,00, qual será o total da compra?</Text>
      <Picker
        selectedValue={pickerAnswer1}
        style={styles.picker}
        onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
      >
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="175.00" value="175.00" />
        <Picker.Item label="200.00" value="200.00" />
      </Picker>

      <Text style={styles.label}>8. Uma pessoa tem R$ 150,00 e quer comprar o máximo de cadernos possível, sendo que cada caderno custa R$ 12,00. Quantos cadernos ela pode comprar?</Text>
      <Picker
        selectedValue={pickerAnswer2}
        style={styles.picker}
        onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
      >
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="10" value="8" />
        <Picker.Item label="12" value="10" />
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
