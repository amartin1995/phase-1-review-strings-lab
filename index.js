const currentUser = 'Memphis';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;//When I used single quotes instead of backticks, interpolation did not work for me. Today I learned!
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;