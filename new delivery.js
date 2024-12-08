// Function to simulate estimated cost calculation based on delivery option
function calculateEstimatedCost() {
    const deliveryOption = document.getElementById('del_op').value;
    let estimatedCost = 0;

    switch(deliveryOption) {
        case 'standard':
            estimatedCost = 10; // $10 for standard
            break;
        case 'express':
            estimatedCost = 20; // $20 for express
            break;
        case 'overnight':
            estimatedCost = 30; // $30 for overnight
            break;
    }

    document.getElementById('es_cost').value = estimatedCost;
}

// Function to simulate continue to payment
function continueToPayment() {
    alert("Redirecting to payment...");
    // You can replace the alert with actual logic to redirect to payment page
}

// Initialize the estimated cost on page load
window.onload = calculateEstimatedCost;