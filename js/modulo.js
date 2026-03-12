document.getElementById('myButton').addEventListener('click', function() {{
    const input = this.querySelector('input[type="checkbox"]');
    input.checked = !input.checked;
    this.classList.toggle('selected', input.checked);   
}});

document.querySelectorAll('.check-label').forEach(label => {
  label.addEventListener('click', () => {
    const input = label.querySelector('input');

    if (input.type === 'radio') {
      document.querySelectorAll(`input[name="${input.name}"]`).forEach(r => {
        r.closest('.check-label').classList.remove('selected-radio');
      });
        input.checked = true;
        label.classList.add('selected-radio');
        } else {
        input.checked = !input.checked;
        label.classList.toggle('selected', input.checked);
    }
  });   
}
);