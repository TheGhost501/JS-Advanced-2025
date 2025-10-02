function solve() {
  const input = document.getElementById("input").value;
  const outputRef = document.getElementById("output");

  const text = input.split(".").filter(x => !!x && x !== " ");

  for (let i = 0; i < text.length; i += 3) {
    let result = [];
    for (let y = 0; y < 3; y++) {
      if (!text[i + y]) {
        break;
      }
      result.push(text[i + y])

    }
    let buff = result.join(".") + ".";
    outputRef.innerHTML += `<p>${buff.trim()}</p>`;

  }
}