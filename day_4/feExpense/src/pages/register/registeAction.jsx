
import axios from "axios";
import { Constant } from "../../utils/Constant";

export const createUser = async (formData,navigate) => {
    try {
        
    // console.log(formData)
    const {data} = await axios.post(Constant.URL, formData)
    // console.table("from createSUer", data);
// console.log(data?.data?._id,"data id ")
        console.log(data?.data?.message)
        if(data?.data?._id){
            navigate("/")
        }
    } catch (error) {
        return console.error("error", error)
    }
}


