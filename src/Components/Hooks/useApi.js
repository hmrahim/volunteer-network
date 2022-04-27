import axios from "axios"
import useData from "./useData"

const useApi = ()=> {
    const [services,setServices] = useData()
  
    const deleteData = async (id)=> {
        const url = `http://localhost:5000/service/${id}`
        const proced = window.confirm("are you sure to delete data")
        if(proced){
            const deleted = await axios.delete(url)
            const remening =  services.filter(data=> data._id !== id)
            setServices(remening)
            
        }

    
        

    }

    return {deleteData}

}

export default useApi