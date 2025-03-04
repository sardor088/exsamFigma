// const list = document.querySelector('.teach-list');
// const API = "https://api.39ortomekteb.info/api/teachers";

// fetch(API)
//     .then((res) => res.json())  
//     .then((data) => {
//         if (data.success) {
//             data.data.forEach(teacher => {  
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${teacher} (${teacher.type})`;  // Отображаем имя и должность
//                 list.appendChild(listItem);  
//             });
//         } else {
//             console.log('Ошибка: Не удалось получить данные');
//         }
//         console.log(data);
        
//     })
//     .catch((error) => {
//         console.error("Ошибка при загрузке данных:", error);
//     });
