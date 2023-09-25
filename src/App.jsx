import React from 'react'
import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, img: '/img/html.png', stat: "" },
    { id: 1, img: '/img/html.png', stat: "" },
    { id: 2, img: '/img/css.png', stat: "" },
    { id: 2, img: '/img/css.png', stat: "" },
    { id: 3, img: '/img/js.png', stat: "" },
    { id: 3, img: '/img/js.png', stat: "" },
    { id: 4, img: '/img/scss.png', stat: "" },
    { id: 4, img: '/img/scss.png', stat: "" },
    { id: 5, img: '/img/react.png', stat: "" },
    { id: 5, img: '/img/react.png', stat: "" },
    { id: 6, img: '/img/vue.png', stat: "" },
    { id: 6, img: '/img/vue.png', stat: "" },
    { id: 7, img: '/img/angular.png', stat: "" },
    { id: 7, img: '/img/angular.png', stat: "" },
    { id: 8, img: '/img/nodejs.png', stat: "" },
    { id: 8, img: '/img/nodejs.png', stat: "" }
].sort(()=>Math.random()-0.5))   //shuffling the array

const [prev,setPrev] = useState(-1)

const check =(current) =>{
  if(items[current].id === items[prev].id){
    items[current].stat = "correct"
    items[prev].stat = "correct"
    setItems([...items])
    setPrev(-1)
  }else{
    items[current].stat = "incorrect"
    items[prev].stat = "incorrect"
    setItems([...items])
    setTimeout(()=>{
    items[current].stat = ""
    items[prev].stat = ""
    setItems([...items])
    setPrev(-1)
    },1000)

  }
  
}

const handleClick = ( index) =>{
  console.log(index)
  console.log(items[index].id)
  if(prev === -1){
    setPrev(index)
    items[index].stat ="active"
    setItems([...items])
  }else{
    check(index)
  }

}



  return (
    <div className='App'>
      <h1>Memory Game</h1><br/>
      <div className="container">
        {
          items.map((item,index)=>{
            return(
              <div className={item.stat ? `card active ${item.stat}` : "card" } key={index} onClick={()=>handleClick(index)}>
                <img src={item.img} />
              </div>
            )
          })
        }

      </div>
      
    </div>
  )
}

export default App
