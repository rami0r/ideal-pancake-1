import axios from "axios"

export const get = async () => {
 const result = await axios.get('http://localhost:3001/todos');
 return result.data;
}
