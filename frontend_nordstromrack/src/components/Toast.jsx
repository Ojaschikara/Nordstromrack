const toast= (message, type = 'info')=> {
    // Determine color based on type
    const typeColors = {
      success: 'border-green-500 text-green-500',
      error: 'border-red-500 text-red-500',
      info: 'border-blue-500 text-blue-500',
      warning: 'border-yellow-500 text-yellow-500',
    };
  
    const colors = typeColors[type] || typeColors.info;
  
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'fixed top-4 right-4 space-y-4';
      document.body.appendChild(toastContainer);
    }
  
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `flex items-center max-w-sm w-full bg-white shadow-lg rounded-lg border-l-4 p-4 ${colors}`;
    toast.innerHTML = `
      <!-- Icon -->
      <div class="flex-shrink-0">
        <svg class="w-6 h-6 ${colors.split(' ')[1]}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0 0h-1m4-1h1m-1 1h-1m2-2h1m-1 1h-1m1 3h-1" />
        </svg>
      </div>
      <!-- Message -->
      <div class="ml-3">
        <p class="text-sm text-gray-700">${message}</p>
      </div>
      <!-- Close Button -->
      <button class="ml-auto text-gray-400 hover:text-gray-600">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    `;
  
    // Close toast on button click
    toast.querySelector('button').onclick = () => {
      toast.remove();
    };
  
    // Append toast to container
    toastContainer.appendChild(toast);
  
    // Auto-remove after 5 seconds
    setTimeout(() => {
      toast.remove();
    }, 5000);
  }
  
  export default toast;

//   showToast('Data saved successfully!', 'success');
// showToast('An error occurred!', 'error');
// showToast('This is an informational message.', 'info');
// showToast('Warning: Check your input!', 'warning');