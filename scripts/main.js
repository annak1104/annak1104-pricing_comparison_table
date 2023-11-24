document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-btn');
  const cards = document.querySelectorAll('.card');

  function updatePrices() {
    const isMonthly = toggleBtn.checked;

    cards.forEach(card => {
      const priceElement = card.querySelector('.card__price');
      const monthlyPrice = priceElement.getAttribute('data-monthly');
      const yearlyPrice = priceElement.getAttribute('data-yearly');

      priceElement.innerText = isMonthly ? monthlyPrice : yearlyPrice;
    });
  }

  toggleBtn.addEventListener('change', updatePrices);

  updatePrices();
});
