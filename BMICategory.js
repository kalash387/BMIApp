import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BMICategory = ({ bmiValue }) => {

  // Function to categorize BMI based on the value provided
  const categorizeBMI = () => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <View>
      {bmiValue && (
        <View style={styles.card}>
          <Text style={styles.resultText}>Your BMI: {bmiValue}</Text>
          <Text style={styles.categoryText}>Category: {categorizeBMI()}</Text>
        </View>
      )}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>BMI Categories:</Text>
        <Text style={styles.bmiCategory}>Underweight = {"<"} 18.5</Text>
        <Text style={styles.bmiCategory}>Normal weight = 18.5–24.9</Text>
        <Text style={styles.bmiCategory}>Overweight = 25–29.9</Text>
        <Text style={styles.bmiCategory}>Obesity = BMI of 30 or greater</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  bmiCategory: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BMICategory;
