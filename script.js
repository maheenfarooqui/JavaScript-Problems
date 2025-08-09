// 1. Take two numbers from the user and display their sum.

function question1() {
  var num1 = Number(prompt("enter number"));
  var num2 = Number(prompt("eneter second number"));
  var sum = num1 + num2;

  alert("sum is :" + sum);
}

// 2. Write a program to add three numbers entered by the user.

function question2() {
  var num1 = Number(prompt("enter number"));
  var num2 = Number(prompt("enter number"));
  var num3 = Number(prompt("enter number"));
  var add = num1 + num2 + num3;

  alert("Result is: " + add);
}

// 3. Ask the user for two numbers, add them, and show the result using alert().

function question3() {
  var num1 = Number(prompt("enter number"));
  var num2 = Number(prompt("eneter second number"));
  var sum = num1 + num2;

  alert("sum is :" + sum);
}

// 4. Take two numbers and display their sum, difference, product, and quotient.

function question4() {
  var num1 = Number(prompt("enter number"));
  var num2 = Number(prompt("enter number"));
  var sum = num1 + num2;
  var difference = num1 - num2;
  var product = num1 * num2;
  var qoutient = num1 / num2;

  alert(
    "sum is : " +
       sum  +
      "Difference is : " +
       difference +
      "Product is : " +
       product +
      "Qoutient is : " +
       qoutient
  );
}

// 5. Take the user’s name and two numbers, then greet the user with the message and result of addition.

// Example: "Hello Afsah, the sum of 5 and 8 is 13"

function question5() {
  var userName = prompt("enter your name");
  var num1 = Number(prompt("enter number"));
  var num2 = Number(prompt("enter number"));
  var sum = num1 + num2;

  alert("Hello  " + userName + ", the sum of " + num1 + " and " + num2 + " is " + sum);
}

// 6. Take two numbers as input, convert them to integers, then add them and show the result in the console.

function question6() {
  var num1 = Number(prompt("enter number"));
  var num2 = Number(prompt("eneter second number"));
  var sum = num1 + num2;

  console.log("sum is : " + sum);
}

// 7.Take two numbers as input using prompt(), check if both are numbers, then add them. If not, show an error message.

function question7() {
  var num1 = Number(prompt("enter your first number"));
  var num2 = Number(prompt("enter your second number"));

  if (!isNaN(num1) && !isNaN(num2)) {
    alert("sum is: " + (num1 + num2));
  } else {
    alert("errror");
  }
}

// 8.Create a program where the user inputs a number and the program adds 10 to it and displays the result.
function question8() {
  var num1 = Number(prompt("enter a number"));
  alert(10 + num1);
}

// 9.Take two numbers and display whether their sum is even or odd.

function question9() {
  var num1 = Number(prompt("enter your first number"));
  var num2 = Number(prompt("enter your second number"));
  var sum = num1 + num2;

  if (sum % 2 == 0) {
    alert("sum is even");
  } else {
    alert("sum is odd");
  }
}

// 10.Create a simple calculator using prompt() that takes two numbers and an operator (+, -,* , /), and performs the correct operation.

function question10() {
  var num1 = Number(prompt("enter your first number"));
  var num2 = Number(prompt("enter your second number"));
  var operator = prompt("ente +, -, , / ");
  var answer;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      alert("sum is : " + answer);
      break;
    case "-":
      answer = num1 - num2;
      alert("minus is : " +answer);
      break;
    case "*":
      answer = num1 * num2;
      alert("multiply is : " +answer);
      break;
    case "/":
      answer = num1 / num2;
      alert("divide is : " +answer);
      break;

    default:
      alert("Invalid operator");
  }
}
