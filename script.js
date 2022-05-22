let textToSearch = document.getElementById("text-to-search");
let paragraph = document.getElementById("paragraph");

textToSearch.addEventListener("input", search);

function search() {
  let inputValue = textToSearch.value;
  console.log(inputValue);
  // Characters to be escaped [.*+?^${}()|[\]\\] (There characters should not be searched in the text)
}
