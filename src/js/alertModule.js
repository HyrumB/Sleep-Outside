fetch('../json/alerts.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((alerts) => {
        if (alerts.length > 0) {
            const alertSection = document.createElement('section');
            alertSection.classList.add('alert-list');
            alerts.forEach((alert) => {
                const alertElement = document.createElement('p');
                alertElement.textContent = alert.message;
                alertElement.style.backgroundColor = alert.background;
                alertElement.style.color = alert.color;
                alertSection.appendChild(alertElement);

            const mainElement = document.querySelector('main');
            mainElement.prepend(alertSection);
            })
        } else {
            console.log('No alerts found');
        }
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });