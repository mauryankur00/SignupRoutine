const weeks = [
    // Week 1: Ankur gets 3 rest days
    {
        'Ankur': { tasks: {
            monday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            tuesday: { morning: 'Rest', evening: 'Rest' },
            wednesday: { morning: 'Rest', evening: 'Rest' },
            thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            friday: { morning: 'Rest', evening: 'Rest' },
            saturday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            sunday: { morning: 'Rest', evening: 'Rest' },
        }},
        'Shreyash': { tasks: {
            monday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            wednesday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            thursday: { morning: 'Rest', evening: 'Rest' },
            friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            saturday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        }},
        'Kartikey': { tasks: {
            monday: { morning: 'Rest', evening: 'Rest' },
            tuesday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            wednesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            friday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            saturday: { morning: 'Rest', evening: 'Rest' },
            sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        }},
    },
    // Week 2: Kartikey gets 3 rest days
    {
        'Ankur': { tasks: {
            monday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            wednesday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            friday: { morning: 'Rest', evening: 'Rest' },
            saturday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            sunday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
        }},
        'Shreyash': { tasks: {
            monday: { morning: 'Rest', evening: 'Rest' },
            tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            wednesday: { morning: 'Rest', evening: 'Rest' },
            thursday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            saturday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        }},
        'Kartikey': { tasks: {
            monday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            tuesday: { morning: 'Rest', evening: 'Rest' },
            wednesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            thursday: { morning: 'Rest', evening: 'Rest' },
            friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            saturday: { morning: 'Rest', evening: 'Rest' },
            sunday: { morning: 'Rest', evening: 'Rest' },
        }},
    },
    // Week 3: Shreyash gets 3 rest days
    {
        'Ankur': { tasks: {
            monday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            tuesday: { morning: 'Rest', evening: 'Rest' },
            wednesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            thursday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            saturday: { morning: 'Rest', evening: 'Rest' },
            sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        }},
        'Shreyash': { tasks: {
            monday: { morning: 'Rest', evening: 'Rest' },
            tuesday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            wednesday: { morning: 'Rest', evening: 'Rest' },
            thursday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            friday: { morning: 'Rest', evening: 'Rest' },
            saturday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            sunday: { morning: 'Rest', evening: 'Rest' },
        }},
        'Kartikey': { tasks: {
            monday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            tuesday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            wednesday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            thursday: { morning: 'Evening Dishes', evening: 'Morning Dishes' },
            friday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
            saturday: { morning: 'Rest', evening: 'Rest' },
            sunday: { morning: 'Morning Dishes', evening: 'Evening Dishes' },
        }},
    },
];

// Get the current week number (0 for Week 1, 1 for Week 2, 2 for Week 3)
const currentWeek = (Math.floor((new Date() - new Date(2024, 0,
