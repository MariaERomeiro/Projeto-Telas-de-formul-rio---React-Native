import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

export default function Biologia({ route, navigation }) {
    const { Matematica } = route.params;
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

    if (textAnswer1 && textAnswer1.toLowerCase() === ' medula espinhal ') {
      newResultado++;
    }

    if (textAnswer2 && textAnswer2.toLowerCase() === 'clorofila') {
      newResultado++;
    }

    if (checkboxAnswer11) {
      newResultado++;
    }

    if (checkboxAnswer22) {
      newResultado++;
    }

    if (radioAnswer1 && radioAnswer1 === 'cachorro') {
      newResultado++;
    }

    if (radioAnswer2 && radioAnswer2 === 'material genético') {
      newResultado++;
    }

    if (pickerAnswer1 && pickerAnswer1 === 'coração') {
      newResultado++;
    }

    if (pickerAnswer2 && pickerAnswer2 === 'peixe') {
      newResultado++;
    }

    setResultado(newResultado);

    navigation.navigate('Portugues', {
      Biologia: newResultado,
      Matematica
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Prova de Biologia</Text>

        <Text style={styles.label}>1. Qual parte do sistema nervoso é responsável por enviar sinais ao corpo?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer1}
          onChangeText={setTextAnswer1}
        />

        <Text style={styles.label}>2. Qual é o principal pigmento responsável pela cor verde das plantas?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua resposta"
          value={textAnswer2}
          onChangeText={setTextAnswer2}
        />

        <Text style={styles.label}>3. Qual dos seguintes organismos realiza a fotossíntese?</Text>
        <CheckBox
          title="Plantas"
          checked={checkboxAnswer11}
          onPress={() => setCheckboxAnswer11(!checkboxAnswer11)}
        />

        <CheckBox
          title="Animais"
          checked={checkboxAnswer12}
          onPress={() => setCheckboxAnswer12(!setCheckboxAnswer12)}
        />

        <Text style={styles.label}>4. Qual parte da planta é responsável pela absorção de água?</Text>
      <CheckBox
        title="Folhas"
        checked={checkboxAnswer21}
        onPress={() => setCheckboxAnswer21(!checkboxAnswer21)}
      />
      <CheckBox
        title="Raízes"
        checked={checkboxAnswer22}
        onPress={() => setCheckboxAnswer22(!checkboxAnswer22)}
      /> 

        <Text style={styles.label}>5. Qual dos seguintes é um exemplo de um mamífero?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer1} value={radioAnswer1}>
          <View style={styles.radioContainer}>
            <Text>Sapo</Text>
            <RadioButton value="sapo" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Cachorro</Text>
            <RadioButton value="cachorro" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>6. O que é DNA?</Text>
        <RadioButton.Group onValueChange={setRadioAnswer2} value={radioAnswer2}>
          <View style={styles.radioContainer}>
            <Text>Material genético</Text>
            <RadioButton value="material genético" />
          </View>
          <View style={styles.radioContainer}>
            <Text>Tipo de célula</Text>
            <RadioButton value="tipo de célula" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>7. Qual parte do corpo humano é responsável pela circulação do sangue?</Text>
        <Picker
          selectedValue={pickerAnswer1}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer1(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Coração" value="coração" />
          <Picker.Item label="Pulmões" value="pulmões" />
        </Picker>

        <Text style={styles.label}>8. Qual dos seguintes é um exemplo de vertebrado?</Text>
        <Picker
          selectedValue={pickerAnswer2}
          style={styles.picker}
          onValueChange={(itemValue) => setPickerAnswer2(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Aranha" value="aranha" />
          <Picker.Item label="Peixe" value="peixe" />
          <Picker.Item label="Inseto" value="inseto" />
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
