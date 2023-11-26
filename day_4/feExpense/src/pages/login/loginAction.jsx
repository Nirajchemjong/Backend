import axios from "axios";
import {Constant} from "../../utils/Constant"
export const loginUser = async (formData)=>{
try {
    
    const {data} = await axios.post(Constant.LOGIN_URL, formData); 
    console.log(data)
    if(data?.status){
        alert("you're logged in");
    }

} catch (error) {
    console.error("message Error", error)
}

}