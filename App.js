import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import BMICategory from './BMICategory'; // Import BMICategory component

export default function App() {

  // State variables to hold height, weight, unit, and calculated BMI
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [bmi, setBmi] = useState(null);

  // Function to calculate BMI based on user inputs
  const calculateBMI = () => {
    if (!unit) {
      Alert.alert('Unit not selected', 'Please select a measurement unit before calculating BMI.');
      return;
    }

    let h = parseFloat(height);
    let w = parseFloat(weight);
    let bmiValue;


    // Convert height and weight based on the selected unit
    if (unit === 'imperial') {
      h = h * 0.0254; // Convert inches to meters
      w = w * 0.453592; // Convert lbs to kg
    } else {
      h = h / 100; // Convert cm to meters
    }

    // Calculate BMI if valid height and weight are provided
    if (h && w) {
      bmiValue = w / (h * h);
      setBmi(bmiValue.toFixed(1));
    } else {
      Alert.alert('Invalid Input', 'Please enter valid height and weight values.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>BMI Calculator</Text>

        <RNPickerSelect
          onValueChange={(value) => setUnit(value)}
          items={[
            { label: 'SI (kg, cm)', value: 'metric' },
            { label: 'Imperial (lb, in)', value: 'imperial' },
          ]}
          placeholder={{ label: "Select Measurement System", value: null }}
          style={{ inputIOS: pickerSelectStyles.input, inputAndroid: pickerSelectStyles.input }}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter height (in cm or in)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          editable={unit !== ''}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter weight (in kg or lbs)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          editable={unit !== ''}
        />

        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>

        <BMICategory bmiValue={bmi} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D7EAEF',
    padding: 0,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#004D79',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

const pickerSelectStyles = {
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
};
