// Base Greeting
function greetUser() {
  console.log("Welcome to the project dashboard!");
}
greetUser();

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  console.log("Dark mode toggled.");
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("Scrolling to top...");
}

// Handle button clicks
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      console.log(Button ${index + 1} clicked!);
    });
  });
});

// -------------------------------------------
// 🔥 Extra Repeated Utility Functions 🔥
// These are dummy but add code lines
// -------------------------------------------

function calcSum(a, b) {
  return a + b;
}

function calcDifference(a, b) {
  return a - b;
}

function calcProduct(a, b) {
  return a * b;
}

function calcQuotient(a, b) {
  return b !== 0 ? a / b : "Error: Division by zero";
}

// Repeated dummy loops (for practice + line count)
for (let i = 1; i <= 10; i++) {
  console.log("Loop counter value: " + i);
}

// -------------------------------------------
// More Dummy Functions to Fill Script
// -------------------------------------------

function logMessage1() { console.log("This is log 1"); }
function logMessage2() { console.log("This is log 2"); }
function logMessage3() { console.log("This is log 3"); }
function logMessage4() { console.log("This is log 4"); }
function logMessage5() { console.log("This is log 5"); }
function logMessage6() { console.log("This is log 6"); }
function logMessage7() { console.log("This is log 7"); }
function logMessage8() { console.log("This is log 8"); }
function logMessage9() { console.log("This is log 9"); }
function logMessage10() { console.log("This is log 10"); }

// Call all logs
logMessage1(); logMessage2(); logMessage3();
logMessage4(); logMessage5(); logMessage6();
logMessage7(); logMessage8(); logMessage9();
logMessage10();

// -------------------------------------------
// Repeated Analytics Simulation Functions
// -------------------------------------------

function showAnalytics1() {
  console.log("Analytics Report 1: Users active = 120");
}
function showAnalytics2() {
  console.log("Analytics Report 2: Sales today = 50");
}
function showAnalytics3() {
  console.log("Analytics Report 3: Conversion rate = 12%");
}
function showAnalytics4() {
  console.log("Analytics Report 4: Errors found = 3");
}
function showAnalytics5() {
  console.log("Analytics Report 5: Page views = 450");
}

showAnalytics1();
showAnalytics2();
showAnalytics3();
showAnalytics4();
showAnalytics5();

// -------------------------------------------
// Even MORE filler functions
// -------------------------------------------

function featureAlpha() { console.log("Feature Alpha running..."); }
function featureBeta() { console.log("Feature Beta running..."); }
function featureGamma() { console.log("Feature Gamma running..."); }
function featureDelta() { console.log("Feature Delta running..."); }
function featureEpsilon() { console.log("Feature Epsilon running..."); }

featureAlpha();
featureBeta();
featureGamma();
featureDelta();
featureEpsilon();

// -------------------------------------------
// Dummy Event Listeners for Extra Lines
// -------------------------------------------

document.addEventListener("keydown", (event) => {
  console.log("Key pressed: " + event.key);
});

document.addEventListener("mousemove", (event) => {
  console.log(Mouse moved at X:${event.clientX}, Y:${event.clientY});
});

// -------------------------------------------
// Repeat similar utility to reach ~200 lines
// -------------------------------------------

function repeatFunction1() { console.log("Repeat function 1"); }
function repeatFunction2() { console.log("Repeat function 2"); }
function repeatFunction3() { console.log("Repeat function 3"); }
function repeatFunction4() { console.log("Repeat function 4"); }
function repeatFunction5() { console.log("Repeat function 5"); }
function repeatFunction6() { console.log("Repeat function 6"); }
function repeatFunction7() { console.log("Repeat function 7"); }
function repeatFunction8() { console.log("Repeat function 8"); }
function repeatFunction9() { console.log("Repeat function 9"); }
function repeatFunction10() { console.log("Repeat function 10"); }

repeatFunction1();
repeatFunction2();
repeatFunction3();
repeatFunction4();
repeatFunction5();
repeatFunction6();
repeatFunction7();
repeatFunction8();
repeatFunction9();
repeatFunction10();

// -------------------------------------------
// End of Script (~200+ lines)
// -------------------------------------------

// === Extra Script added in feature-script branch ===
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        console.log("Dark mode activated");
    } else {
        console.log("Light mode activated");
    }
}

// Attach it to a button if present
const themeBtn = document.querySelector("#themeBtn");
if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
}