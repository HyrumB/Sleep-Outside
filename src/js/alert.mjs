export async function getAlertsData() {
  try {
    const response = await fetch("/json/alerts.json");

    if (!response.ok) {
      throw new Error(`Network response was not ok. ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);

    try {
      if (data.length > 0) {
        const alertSection = document.createElement("section");
        alertSection.classList.add("alert-list");

        data.forEach((alert) => {
          const alertMsg = document.createElement("p");
          alertMsg.textContent = alert.message;
          alertMsg.style.background = alert.background;
          alertMsg.style.color = alert.color;

          alertSection.appendChild(alertMsg);
        });

        const mainElement = document.querySelector("main");

        if (mainElement) {
          mainElement.prepend(alertSection);
        } else {
          console.error("No <main> element found in the document");
        }
      }
    } catch (error) {
      console.error("Error displaying data:", error);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
