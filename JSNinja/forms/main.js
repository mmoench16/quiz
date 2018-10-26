const form = document.forms['search'];
const input = form.elements.searchInput;

form.addEventListener('submit', search, false);

input.value = "Search Here";

function search(event) {
  alert(`You searched for: ${input.value}`);
  event.preventDefault();
}

input.addEventListener('focus', function() {
  if (input.value === "Search Here") {
    input.value = ""
  }
}, false);

input.addEventListener('blur', function() {
  if(input.value === "") {
    input.value = "Search Here";
  }
}, false);
