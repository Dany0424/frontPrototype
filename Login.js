document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.username input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const label = this.parentElement.querySelector('label');
            if (this.value.trim() !== '') {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        });
    });
});
