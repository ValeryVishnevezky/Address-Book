'use strict'

function onInit() {
    getContactsInfo(renderContacts)
}

function renderContacts(contacts) {
    if (!contacts) return
    const elContactsList = document.querySelector('.contacts')
    const strHtmls = contacts.map(contact => `
        <div class="contact">
      <div class="name">${contact.fname} ${contact.lname}</div>
      <div class="contact-box">
      <img src="https://robohash.org/${contact.zip}"></img>
      <div class="contact-info">
      <div class="phone">Phone: ${contact.phone}</div>
      <div class="address">Address: ${contact.address}</div>
      <div class="city">City: ${contact.city}</div>
      <div class="state">State: ${contact.state}</div>
      <div class="zip">Zip: ${contact.zip}</div>
      </div>
      </div>
    </div>`
    )
    elContactsList.innerHTML = strHtmls.join('')
}
