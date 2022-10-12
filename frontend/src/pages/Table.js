import TableComponent from '../components/Table';
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Table2() {

    const [rows, setRows] = useState([])
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        const fetchData = async () => {  
          if(!saved){
            const result = await axios.get('http://localhost:5000')
            if(result){
                setRows(result.data.lala)  
                      
            }
            setSaved(true)
          }             
            
        }
        fetchData()        
    })

    return (
      <>
        <TableComponent patients = {rows}/>  
      </>

    );
}
