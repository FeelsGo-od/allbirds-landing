export default function () {
  let tabsLinks = document.querySelectorAll('.tabs__link');
  let tabs = document.querySelectorAll('.tabs__blocks');

  function firstTab() {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.visibility = 'hidden';
    }

    tabs[0].style.visibility = 'visible';
  }

  firstTab();

  tabsLinks.forEach((tabsLink) => {
    tabsLink.addEventListener('click', (e) => {
      setActiveLink(e.target);
      openClickedTab(e.target.dataset.id);
    });
  });

  function setActiveLink(link) {
    if (!link.classList.contains('active')) {
      for (let i = 0; i < tabsLinks.length; i++) {
        tabsLinks.forEach((tabLink) => tabLink.classList.remove('active'));
      }

      link.classList.add('active');
    }
  }

  function openClickedTab(tab_number) {
    let currentTab = document.querySelector(`.tab-${tab_number}`);

    if (window.getComputedStyle(currentTab).visibility === 'hidden') {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.visibility = 'hidden';
        tabs[i].classList.remove('active');
      }

      currentTab.style.visibility = 'visible';
      currentTab.classList.add('active');
    }
  }
}
