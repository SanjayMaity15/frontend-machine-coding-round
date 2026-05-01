import React, { useEffect, useState } from 'react'
import BarChartData from './components/BarChartData';
import PieChartData from './components/PieChartData';

const App = () => {

  const [data,setData] = useState([])

  async function fetchData(params) {
    try {
      const response = await fetch("https://dummyjson.com/carts?limit=10");
      const {carts} = await response.json()
      setData(carts)
      console.log(carts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Charts</h1>

      <BarChartData data={data}/>
      <PieChartData data={data}/>
    </div>
  )
}

export default App