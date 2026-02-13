function openModule(module) {
  console.log(`Opening ${module} module`);
  
  // Map module names to URLs
  const urls = {
    'ASC': 'https://emis.dhis2nigeria.org.ng',
    'Learner Registry': 'https://registry.dhis2nigeria.org.ng/dhis',
    'Knowledgebase': '#',
    'Safe Schools Tool': 'https://emis.dhis2nigeria.org.ng'
  };

  const url = urls[module];
  if (url && url !== '#') {
    window.open(url, '_blank');
  } else {
    alert(`${module} module is coming soon!`);
  }
}

// Add smooth scrolling and other interactions
document.addEventListener('DOMContentLoaded', function() {
  // Optional: Add keyboard navigation
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        card.click();
      }
    });
  });
});