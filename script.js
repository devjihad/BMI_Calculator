function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");
  const category = document.getElementById("category");

  if (!height || !weight) {
    result.innerHTML = "Please enter both height and weight!";
    category.innerHTML = "";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  result.innerHTML = `Your BMI is ${bmi}`;

  if (bmi < 18.5) {
    category.innerHTML = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category.innerHTML = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category.innerHTML = "Overweight";
  } else {
    category.innerHTML = "Obese";
  }
}