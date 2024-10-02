// Get elements
const quoteBtn = document.getElementById('quoteBtn');
const modal = document.getElementById('quoteModal');
const currentDateElement = document.getElementById('currentDate');
const currentTimeElement = document.getElementById('currentTime');

// Function to show the modal
function showModal() {
    modal.style.display = 'flex'; // Show the modal with flexbox
    setTimeout(hideModal, 7000); // Hide modal after 5 seconds
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

// Function to get and display current date and time
function updateDateTime() {
    const now = new Date();

    // Get current date
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];    
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    currentDateElement.innerHTML = `${day}, ${date} ${month} ${year}`;

    // Get current time and format it
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    currentTimeElement.innerHTML = `Pukul: ${hours}:${minutes}:${seconds}`;
}

// Event listener to show modal when button is clicked
quoteBtn.addEventListener('click', showModal);

// Update the time every second
setInterval(updateDateTime, 1000);

// Display the current date and time when the page loads
updateDateTime();
