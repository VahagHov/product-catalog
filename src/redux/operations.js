
import axios from "axios";
import { setProducts } from "./productslice";


 export const getProduct = () => {
  const apiURL = './mockData.json'
  return async (dispatch) => {
    await axios
                .get(apiURL).then((res) => {
                    console.log(res);
                    dispatch(setProducts(res))
            })
  } 
  
}

export default getProduct