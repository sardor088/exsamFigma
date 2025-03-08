const apiEvent = "https://api.39ortomekteb.info/api/blog";
const evtList = document.querySelector('.event_list');
fetch(apiEvent)
    .then((res) => res.json())
    .then((events) => {
        events = events.data;
        events.forEach((item) => {
            const liEvt = document.createElement('li');
            liEvt.classList.add('eventList');
            let wrap = JSON.parse(`${item.body}`);
            liEvt.innerHTML = `
                <img class="event_img" src="${item.image}" alt=""> 
                <p class="event_date">${item.createdAt}</p>
                <p class="event_name">${item.title}</p> 
            `;
            evtList.appendChild(liEvt);
        });
    })
    .catch((err) => console.log("ошибка", err));