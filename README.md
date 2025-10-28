# 🧮 Simple Calculator

A **basic web-based calculator** built using **HTML, CSS, and JavaScript**.  
This project allows users to perform simple arithmetic operations like addition, subtraction, multiplication, division, and modulus.  
It also includes features like **clear**, **backspace**, and **real-time display of results**.

---

## 📂 Project Structure

📁 Simple-Calculator
│
├── index.html # The main HTML file that structures the calculator layout
├── script.js # Contains JavaScript logic for button interactions and calculations
└── style.css # (Optional) Inline styles are already included inside index.html

markdown
Copy code

> 💡 In this project, the CSS is written inside `<style>` tags in the HTML file itself.  
> Only one external file (`script.js`) is linked for JavaScript functionality.

---
ScreenShot:
    image -[image.png]

## 🖥️ Features

- ➕ **Basic Arithmetic Operations:** Add, Subtract, Multiply, Divide, and Modulus  
- 🔄 **Clear Button (C):** Resets the input and output screen  
- ⌫ **Backspace Button:** Deletes the last entered character  
- ✅ **Equals (=):** Evaluates and displays the result  
- ⚡ **Instant Updates:** Displays input dynamically as you type  
- 💅 **Clean and Responsive UI:** Styled using simple CSS for clarity and readability  

---

## 🧠 How It Works

### 1. **HTML (`index.html`):**
- Defines the calculator structure and layout.  
- Includes:
  - A display area (`.answer`) to show input and results.  
  - Number and operation buttons (`.num`).  
- Links to the external `script.js` for logic handling.

### 2. **CSS (inside `<style>`):**
- Centers the calculator using Flexbox.  
- Gives buttons consistent size, spacing, and hover effects.  
- Styles the display area to make the output clear and visually distinct.

### 3. **JavaScript (`script.js`):**
- Selects all calculator buttons and the display area.
- Uses `addEventListener()` to detect button clicks.
- Handles operations:
  - **Numbers/Operators:** Adds them to the current input.
  - **‘=’ Button:** Evaluates the current input using `eval()` (inside a `try...catch` for error handling).
  - **‘C’ Button:** Clears all input.
  - **‘⌫’ Button:** Deletes the last character.
- Displays results dynamically on the screen.

---

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/simple-calculator.git
Open the project folder:

bash
Copy code
cd simple-calculator
Run the project:

Open index.html in any web browser (Chrome, Firefox, Edge, etc.)

Start calculating!

🧩 Example
Input	Operation	Output
5 + 3	=	8
7 * 4	=	28
9 / 0	=	Error (handled)

🧑‍💻 Author
[Ganesh327]
A simple calculator project for practicing DOM manipulation and JavaScript event handling.

🏷️ License
This project is open-source and available under the MIT License.

💬 Quick Summary (for easy recall):
HTML → Structure

CSS → Styling

JS → Logic & Functionality

Buttons trigger JS events → display & evaluate expressions
