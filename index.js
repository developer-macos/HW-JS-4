
// Завдання 1: Перевірка заповнення текстових полів
let field1 = "Hello";
let field2 = "World";

if (field1 !== "" && field2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// Завдання 2: Обчислення суми двох чисел
let num1 = 7;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// Завдання 3: Перевірка наявності слова в тексті
let text = "I love programming in JavaScript!";

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// Завдання 4: Перевірка числа на входження в діапазон
let number = 15;

if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

// Завдання 5: Перевірка правильності заповнення форми
let name = "John";
let email = "john@example.com";
let password = "secret123";

if (name.length >= 3 && email.includes("@") && email.split("@")[1].includes(".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}
