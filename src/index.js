const init = () => {
    // Form Handler
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', (event) => {
        // Handle form
        event.preventDefault()
        const input = event.target.querySelector('input#searchByID')
        console.log(input)

        // Fetch data
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
            // Display data
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            title.textContent = data.title
            summary.textContent = data.summary
        })
    })
}

document.addEventListener('DOMContentLoaded', init)