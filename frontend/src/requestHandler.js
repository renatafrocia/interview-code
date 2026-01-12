const backend_url = "http://localhost:8000"

function get_products() {
  return fetch(backend_url + "/products")
    .then((response) => {
        console.log(response)
        return response.json()
    })
}

export default get_products