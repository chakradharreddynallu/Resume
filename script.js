function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function toggleShowMore(button) {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    if (moreText.style.display === 'none' || !moreText.style.display) {
      moreText.style.display = 'inline';
      button.textContent = 'Show Less';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Show More';
    }
  }