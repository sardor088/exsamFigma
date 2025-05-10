const contactUl = document.querySelector('.contact_item')
const contactName = document.querySelector('contact_name').value
const contactMessage = document.querySelector('contact_message').value
const contactBtn = document.querySelector('.contact_btn')

contactBtn.addEventListener('click', () => {
    const li = document.createElement('li')
    li.classList.add('contact_list')
    li.textContent = contactName
    contactUl.appendChild(li)
})