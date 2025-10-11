const form = document.getElementById("fraudForm");
const resultBox = document.getElementById("result");
const message = document.getElementById("fraudMessage");
const indicator = document.getElementById("riskIndicator");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("txnDesc").value.toLowerCase();

  let risk = 0;

  // Simple keyword-based risk model (can be replaced with AI)
  const riskyWords = ["unknown", "wallet", "crypto", "urgent", "gift", "lottery", "refund", "unauthorized", "otp"];
  riskyWords.forEach(word => {
    if (text.includes(word)) risk += 20;
  });

  // Assign a result based on risk score
  let resultText, color;
  if (risk >= 60) {
    resultText = "⚠️ High Risk! Possible Fraudulent Transaction.";
    color = "#e53935"; // red
  } else if (risk >= 30) {
    resultText = "🟡 Moderate Risk. Please Verify Before Proceeding.";
    color = "#fbc02d"; // yellow
  } else {
    resultText = "🟢 Low Risk. Transaction Looks Safe.";
    color = "#43a047"; // green
  }

  resultBox.classList.remove("hidden");
  message.textContent = resultText;
  indicator.style.background = color;
  indicator.textContent = risk + "%";
});
