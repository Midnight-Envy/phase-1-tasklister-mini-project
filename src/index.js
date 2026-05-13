document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`form`).addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector(`input`);
    const value = input.value;
    input.value = "";
    const li = document.createElement(`li`);
    li.textContent = value;
    document.querySelector(`ul`).appendChild(li);
})
})
