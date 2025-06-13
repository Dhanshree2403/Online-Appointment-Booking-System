// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  const confirmation = document.getElementById('confirmation');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      if (name && email && service && date && time) {
        confirmation.textContent = `✅ Appointment booked successfully for ${name} on ${date} at ${time} for ${service}.`;
        form.reset();
      } else {
        confirmation.textContent = "❌ Please fill in all fields.";
        confirmation.style.color = "red";
      }
    });
  }
});
