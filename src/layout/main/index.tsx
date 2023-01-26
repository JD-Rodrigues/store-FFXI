import React, { Children, ReactNode } from "react"
import { MainContentProps } from "src/types"

const MainContent  = (props:MainContentProps) => {
  
  return (
    <main className='main__content'>
       {props.children}
    </main>
  )
}

export default MainContent