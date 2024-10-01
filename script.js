// User data for demo purposes
const users = {
    'Ankur': { tasks: {
        monday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        wednesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        saturday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
    }},
    'Shreyash': { tasks: {
        monday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        wednesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        saturday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
    }},
    'Kartikey': { tasks: {
        monday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        wednesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        saturday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
    }},
};

// Get the current and next day in lowercase
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const currentDayIndex = new Date().getDay();
const tomorrowDayIndex = (currentDayIndex + 1) % 7;  // Wrap around to Sunday if today is Saturday
const currentDay = days[currentDayIndex];
const tomorrowDay = days[tomorrowDayIndex];

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    // Check if user was selected
    if (username) {
        login(username);
    }
});

// Login function
function login(username) {
    // Hide login section, show task section
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('task-section').style.display = 'block';
    
    // Set user name
    document.getElementById('user-name').textContent = username;

    // Display today's tasks for the logged-in user
    const todayTasks = users[username].tasks[currentDay];
    const tomorrowTasks = users[username].tasks[tomorrowDay];
    
    const taskTableBody = document.getElementById('user-tasks');
    taskTableBody.innerHTML = `
        <tr>
            <td>${currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}</td>
            <td>${todayTasks.morning}</td>
            <td>${todayTasks.evening}</td>
        </tr>
        <tr>
            <td>${tomorrowDay.charAt(0).toUpperCase() + tomorrowDay.slice(1)}</td>
            <td>${tomorrowTasks.morning}</td>
            <td>${tomorrowTasks.evening}</td>
        </tr>
    `;
}

// Logout function
function logout() {
    // Hide task section, show login section
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('task-section').style.display = 'none';

    // Clear form
    document.getElementById('login-form').reset();
}
