export const setupTabs = () => {
  const homeTab = document.querySelector('a[data-tab="home"]');
  const converterTab = document.querySelector('li[data-tab="converter"]');
  const homeSection = document.getElementById('home');
  const converterSection = document.getElementById('converter');

  // Function to remove active class from all tabs
  const removeActiveClasses = () => {
    if (homeTab) homeTab.classList.remove('active');
    if (converterTab) converterTab.classList.remove('active');
  };

  if (homeTab) {
    homeTab.addEventListener('click', (e) => {
      e.preventDefault();
      converterSection.classList.add('hidden');
      homeSection.classList.remove('hidden');
      
      removeActiveClasses();
      homeTab.classList.add('active');
    });
  }

  if (converterTab) {
    converterTab.addEventListener('click', (e) => {
      e.preventDefault();
      homeSection.classList.add('hidden');
      converterSection.classList.remove('hidden');

      removeActiveClasses();
      converterTab.classList.add('active');
    });
  }
};
