import {useState, useEffect} from 'react' 

function FetchData (endpoint) {
    const [data] = useState([])
  useEffect(()=>{
    
    fetch(endpoint)

    .then((response)=>{
        return response.json()
    })
    
    .then((data)=>{
        console.log(data)
        set(data)
    })
    
    .catch((err)=>{
        console.log(err)
    })
    
  }, [endpoint])
  
  return 
    {data}
  }
  





export default FetchData