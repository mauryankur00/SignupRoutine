// User data for demo purposes (replace this with a real authentication system in production)
const users = {
    'Ankur': { tasks: {
        monday: { morning: 'Clean dishes', evening: 'Shape chapati' },
        tuesday: { morning: 'Make Daal & Sabji', evening: 'Bake chapati & make dough' },
        wednesday: { morning: 'Make Rice', evening: 'Cut vegetables & make sabji' },
        thursday: { morning: 'Clean dishes', evening: 'Bake chapati & make dough' },
        friday: { morning: 'Make Daal & Sabji', evening: 'Shape chapati' },
        saturday: { morning: 'Make Rice', evening: 'Bake chapati & make dough' },
        sunday: { morning: 'Clean dishes', evening: 'Cut vegetables & make sabji' },
    }},
    'Shreyash': { tasks: {
        monday: { morning: 'Make Daal & Sabji', evening: 'Bake chapati & make dough' },
        tuesday: { morning: 'Clean dishes', evening: 'Cut vegetables & make sabji' },
        wednesday: { morning: 'Make Daal & Sabji', evening: 'Shape chapati' },
        thursday: { morning: 'Make Rice', evening: 'Shape chapati' },
        friday: { morning: 'Clean dishes', evening: 'Bake chapati & make dough' },
        saturday: { morning: 'Make Daal & Sabji', evening: 'Cut vegetables & make sabji' },
        sunday: { morning: 'Make Daal & Sabji', evening: 'Bake chapati & make dough' },
    }},
    'Kartikey': { tasks: {
        monday: { morning: 'Make Rice', evening: 'Cut vegetables & make sabji' },
        tuesday: { morning: 'Make Rice', evening: 'Shape chapati' },
        wednesday: { morning: 'Clean dishes', evening: 'Bake chapati & make dough' },
        thursday: { morning: 'Make Daal & Sabji', evening: 'Cut vegetables & make sabji' },
        friday: { morning: 'Make Rice', evening: 'Cut vegetables & make sabji' },
        saturday: { morning: 'Clean dishes', evening: 'Shape chapati' },
        sunday: { morning: 'Make Rice', evening: 'Shape chapati' },
    }},
};

// Get the current day in lowercase
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const currentDay = days[new Date().getDay()];

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
    const tasks = users[username].tasks[currentDay];
    const taskTableBody = document.getElementById('user-tasks');
    taskTableBody.innerHTML = `
        <tr>
            <td>${currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}</td>
            <td>${tasks.morning}</td>
            <td>${tasks.evening}</td>
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
