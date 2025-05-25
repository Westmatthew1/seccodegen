function generateSecretCode() {
  let name = document.getElementById("nameInput").value.trim();
  let number = document.getElementById("numberInput").value.trim();

  // Process name: remove spaces, uppercase, reverse, and replace some letters
  let cleanName = name
    .toUpperCase()
    .replaceAll("E", "A")
    .replaceAll("O", "0")
    .replaceAll("$", "E");
  let reversed = cleanName.split("").reverse().join("");

  // Add number logic (like multiplying or adding something secret)
  let finalNumber = (Number(number) * 3) / 6;

  // Combine to create the secret code
  let secretCode = `${reversed}${finalNumber}`;

  // Show result
  document.getElementById("resultBox").textContent =
    "Secret Code: " + secretCode;
}
