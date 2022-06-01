import axios from "axios";
let config = {}

const gettingDepartamentsResources = async () => {
    try {
        config.url = "http://localhost:4000/departaments"; 
        config.method= "get"; 
        config.headers={'Content-Type': 'application/json'}
        console.log(config)
        let response = await axios(config); 
        console.info('LOG: gettingDepartamentsResources', response.data)
        return response.data; 

    } catch (error) {
        console.error('LOG: ERROR gettingDepartamentsResources', error.message); 
    }
}

const createDepartament = async () => {
    try {
        config.url = "http://localhost:4000/departaments"; 
        config.method= "get"; 
        config.headers={'Content-Type': 'application/json'}
        console.log(config)
        let response = await axios(config); 
        console.info('LOG: gettingDepartamentsResources', response.data)
        return response.data; 
    } catch (error) {
        
    }

}

const createSchedules = () => {

}

const gettingSchedules = () => {

}

export {
    gettingDepartamentsResources, 
    createDepartament,
    createSchedules,
    gettingSchedules
}