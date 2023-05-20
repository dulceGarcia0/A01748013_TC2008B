// const result_p = document.getElementById('fetch_result')
// // no sabemos cuanto se va a tardar en responder el servidor 
// // por eso la promesa --> await
// const request_result = await fetch('api/hello')

// result_p,innerHTML = await request_result.text()

// console.log(request_result)


const response = await fetch('api/hello', {
    method:'GET'
})

if(response.ok)
{
    const message = await response.text()

    console.log(message)

    const resultDiv = document.getElementById('result_basic')
    resultDiv.innerHTML = message
}
else
    console.log(`HTTP Error: ${response.status}`)


const params = new URLSearchParams({
    name:'Octavio',
    surname:'Navarro'
})

const response_parameters = await fetch('api/hello?' + params, {
    method:'GET',
})

if(response_parameters.ok)
{
    const message = await response_parameters.text()

    console.log(message)
    const resultDiv = document.getElementById('fetch_result')
    resultDiv.innerHTML = message
}
else
    console.log(`HTTP Error: ${response_parameters.status}`)


const response_json = await fetch('/api/json_test', {
    method:'GET'
})

if(response_json.ok)
{
    const message = await response_json.json()

    console.log(message)
}
else
    console.log(`HTTP Error: ${response_json.status}`)


// const response_db = await fetch('http://localhost:3000/api/users', {
//     method:'GET',
//     headers: 
//     {
//         'accept':'application/json'
//     }
// })

// if(response_db.ok)
// {
//     const results = await response_db.json()

//     console.log(results)
// }
// else
// {
//     console.log("Error")
// }