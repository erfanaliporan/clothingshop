function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById('datetime').innerText = `${date}  ${time}`;

    updateGreeting(now);
}
updateDateTime();
setInterval(updateDateTime, 1000);

function updateGreeting(date) {
    const hours = date.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById('greeting').innerText = greeting;
}



document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

document.body.classList.add('light'); 
