let divContainer = document.querySelector('div')

async function getResponse() {
    divContainer.innerHTML = ''
    let httpresponse = await fetch('https://jsonplaceholder.typicode.com/users ')
    console.log(httpresponse)
    let response = await httpresponse.json()
    console.log(response)
    displayUsers(response)
}

function displayUsers(paramArray){
    
    
    let users = paramArray
    for (let user of users){
        let line = document.createElement('div')
        line.innerHTML = user.name
        divContainer.appendChild(line)
    }
}



