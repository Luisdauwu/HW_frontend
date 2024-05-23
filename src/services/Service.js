async function fetchCars(){
    try {
        const response= await fetch("https://hw-backend-2sgk.onrender.com/cars")
        const cars= await response.json()
    } catch (error) {
        console.error(error)
        
    }
}
export default fetchCars