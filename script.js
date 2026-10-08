const items = [];

function adicionarTarefa() {
  const input = document.getElementById('task-input');
  if (!input.value.trim()) return;
  items.push(input.value);
  document.getElementById('task-list').innerHTML = items.map(item => `<li>${item}</li>`).join('');
  input.value = '';
}