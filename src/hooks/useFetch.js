import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api/posts";

const useFetch = (path) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const soure = CancelToken.source();
    
        const fetchPosts = async () => {
          setError(null);
          try {
            const response = await api.get(path, { CancelToken: soure.token });
            setData(response.data)
          } catch (error) {
            if (axios.isCancel(error)) {
              console.log("Request cancelled by the use:", error.message);
            } else {
              console.error(error.message);
              setError(error.message);
            }
          } finally {
            setLoading(false);
          }
        };
        setTimeout(fetchPosts, 2000);
        // fetchPosts()
    
        return () => {
          soure.cancel("Fetch posts cancelled by the user")
        }
      }, [])
  return {data,setData, loading, error}
};
export default useFetch