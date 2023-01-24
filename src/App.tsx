import { useState } from 'react'
import Column from './components/Column'
import fillColumnArr from './utils/columnArr'
import './style.css'

function App() {

  const [columnArr, setColumnArr] = useState<number[]>(fillColumnArr())

  const resetColumn = () => {
    setColumnArr(fillColumnArr())
  }

  const arrBubbleSort = () => {
    let sortArr: number[] = [...columnArr];
    for (let j = sortArr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (sortArr[i] > sortArr[i + 1]) {               
              let temp = sortArr[i];
              sortArr[i] = sortArr[i + 1];
              sortArr[i + 1] = temp; 
            }
        }
    }
    setColumnArr(sortArr)
  }
  
  return (
    <div className="App" style={{
      height: window.screen.height
    }}>
        <div style = {{display: 'flex'}} className = "columnArr__container">
          {
            columnArr?.map((num: number) => {
              return (
                <>
                    <Column 
                      colSize = {num}
                    />
                </>
              )
            })
          }
        </div>
        <div className = "controlButtons">
          <button className = "is__controlButton" onClick = {arrBubbleSort} style = {{marginRight: '20px'}}>
            Сортировать
          </button>
          <button className = "is__controlButton" onClick = {resetColumn}>
            Новые столбцы
          </button>
        </div>
        <div className = "footer-wrapper">
            <button className = "footer-container">
                was maked by chrisscappp
            </button>
        </div>
    </div>
  );
}

export default App;
