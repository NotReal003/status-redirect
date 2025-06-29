// Function to track visits
function trackVisit(pageType) {
  // Validate pageType to prevent invalid requests
  const allowedPageTypes = ['request', 'pay', 'social'];
  if (!allowedPageTypes.includes(pageType)) {
    console.error(`Invalid pageType: ${pageType}. Allowed types are: ${allowedPageTypes.join(', ')}`);
    return;
  }
  
fetch(`https://api.notreal003.org/collect/pay`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log(`OK`);
      } else {
        console.error('NO OK', data.message);
      }
    })
    .catch((error) => {
      console.error('Error tracking visit:', error);
    });
}

// Call the function with the page type
// Replace 'request' with the appropriate page type for each page
trackVisit('pay');
