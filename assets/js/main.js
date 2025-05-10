const API = "https://api.39ortomekteb.info/api/teachers";
const apiEvent = "https://api.39ortomekteb.info/api/blog";
const galleryAPI = "https://api.39ortomekteb.info/api/gallery";
const list = document.querySelector('.teach_api');
const evtList = document.querySelector('.event_list');
const galleryItem = document.querySelector('.gallery_list');

// Fetch teachers data
fetch(API)
    .then((res) => res.json())
    .then((teachers) => {
        teachers = teachers.data;
        teachers.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add('teach_li');
            li.innerHTML = `
                <img class="teach_img" src="${item.image}" alt="">
                <p class="teach_name">${item.full_name}</p> 
                <p class="teach_name">${item.subject}</p> 
            `;
            console.log(item);
            list.appendChild(li);
        });
    })
    .catch((err) => console.log("ошибка", err));

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

fetch(galleryAPI)
    .then((res) => res.json())  
    .then((data) => {
        data.forEach((item) => {
            const galleryList = document.createElement('li');
            galleryList.classList.add('gallery_list');
            galleryList.innerHTML = `
                <img class="event_img" src="${item.image}" alt="">                  <p class="event_date">${item.createdAt}</p>
            `;
            galleryItem.appendChild(galleryList);
        });
    })
    .catch((err) => console.log("ошибка", err));
