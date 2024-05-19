async function fetchCars(){
    try {
        const response= await fetch("http://127.0.0.1:8000/cars")
        const cars= await response.json()
    } catch (error) {
        console.error(error)
        
    }
}
export default fetchCars