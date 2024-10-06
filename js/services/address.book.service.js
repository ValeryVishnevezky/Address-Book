'use strict'

function getContactsInfo(cb) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            cb(ans)
        }
    }
    xhr.open('GET', 'http://filltext.com/?rows=6&fname={firstName}&lname={lastName}&phone={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}', true)
    xhr.send()
}
