import axios from "axios";
import {Constant} from "../../utils/Constant"
export const loginUser =  (formData, navigate  )=>async ()=>{
try {
    
    const {userData} = await axios.post(Constant.LOGIN_URL, formData); 
    // console.log(data)
    if( !userData || userData?.status==="Success"){
        alert("you're logged in");
        navigate("/dashboard");
    //    const {data} = userData;

    //    console.log(data)
        const data = await userData?.data?._id;
        console.log(data)

    }else{
        alert("your credentials didn't match please try again")
        // alert("LOGIN ERROR, Please check your email and password", error?.response?.data?.message)
    }

} catch (error) {
    if(error?.response?.data?.message==='Login Error'){
        alert("LOGIN ERROR, Please check your email and password", error?.response?.data?.message)
    }else{
        alert("Internal server Error")
    }
    console.error("Please check your email and password", error)
}

}

/* NOTE */
//redux-thunk
//dispatch