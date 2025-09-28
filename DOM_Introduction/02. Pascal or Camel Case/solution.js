function solve() {
  let text = document.getElementById("text").value.toLowerCase().split(" ");
  let type = document.getElementById("naming-convention").value;
  let result = "";

  if (type == "Camel Case") {
    result = text
      .map((word, index) =>
        index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  } else if (type == "Pascal Case") {
    result = text
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  } else {
    result = "Error!"
  }

  document.getElementById("result").textContent = result;

}