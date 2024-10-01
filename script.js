// Task Distribution Data for 3 weeks with alternating rest days
const weeks = [
    {
        'Ankur': {
            tasks: {
                monday: { morning: 'Morning Dishes', evening: '—' },
                tuesday: { morning: '—', evening: 'Evening Dishes' },
                wednesday: { morning: 'Morning Dishes', evening: '—' },
                thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
                friday: { morning: '—', evening: 'Evening Dishes' },
                saturday: { morning: 'Morning Dishes', evening: '—' },
                sunday: { morning: '—', evening: 'Evening Dishes' }
            }
        },
        'Shreyash': {
            tasks: {
                monday: { morning: '—', evening: 'Evening Dishes' },
                tuesday: { morning: 'Morning Dishes', evening: '—' },
                wednesday: { morning: '—', evening: 'Evening Dishes' },
                thursday: { morning: 'Morning Dishes', evening: '—' },
                friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
                saturday: { morning: '—', evening: 'Evening Dishes' },
                sunday: { morning: 'Morning Dishes', evening: '—' }
            }
        },
        'Kartikey': {
            tasks: {
                monday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
                tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
                wednesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
                thursday: { morning: '—', evening: '—' },
                friday: { morning: 'Morning Dishes', evening: '—' },
                saturday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
                sunday: { morning: '—', evening: '—' }
            }
        }
    },
    // Week 2 and Week 3 similar logic
];

// Calculate current week
const currentWeek = Math.floor((new Date() - new Date(2024, 0, 1)) / (7 * 24 * 60 * 60 * 1000)) % 3;
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const currentDayIndex = new Date().getDay();
const tomorrowDayIndex = (currentDayIndex + 1) % 7;

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    if (username) {
        login(username);
    }
});

// Login and show tasks for today and tomorrow
function login(username) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('task-section').style.display = 'block';
    document.getElementById('user-name').textContent = username;

    const todayTasks = weeks[currentWeek][username].tasks[days[currentDayIndex]];
    const tomorrowTasks = weeks[currentWeek][username].tasks[days[tomorrowDayIndex]];

    const taskTableBody = document.getElementById('user-tasks');
    taskTableBody.innerHTML = `
        <tr>
            <td>${days[currentDayIndex].charAt(0).toUpperCase() + days[currentDayIndex].slice(1)}</td>
            <td>${todayTasks.morning || '—'}</td>
            <td>${todayTasks.evening || '—'}</td>
        </tr>
        <tr>
            <td>${days[tomorrowDayIndex].charAt(0).toUpperCase() + days[tomorrowDayIndex].slice(1)}</td>
            <td>${tomorrowTasks.morning || '—'}</td>
            <td>${tomorrowTasks.evening || '—'}</td>
        </tr>
    `;
}

// Logout function to reset everything
function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('task-section').style.display = 'none';
    document.getElementById('login-form').reset();
}
