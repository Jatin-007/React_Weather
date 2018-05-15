import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
        <Sparklines height={40} width={90} data={props.data}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
    </div>
  )
}