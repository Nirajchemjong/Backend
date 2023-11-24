
import axios from "axios";
const URL = "http://localhost:3007/api/v1/user/";

export const createUser = async (formData) => {
    console.log(formData)
    const {data} = await axios.post(URL, formData)
    console.table("from createSUer", data);

        console.log(data.response?.data?.message)
}


