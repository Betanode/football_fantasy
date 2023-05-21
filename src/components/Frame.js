import React from 'react'
import './frame.css'
import StickyHeadTable from './Table'
const Frame = () => {
  return (
    <div className='frame'>
      <div className="player">
        < StickyHeadTable/>
      </div>
      <div className="profile">
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="https://s3-alpha-sig.figma.com/img/2011/61f4/4ee15efab3d428ddf84fe1db68312a85?Expires=1685318400&Signature=mvU9TvoCoJ2fGi3jtQ8lYnr7Gy44iJo2Ibh-uByTyif-P0ZqwzcGVaqkeiezDDb3eZhTTU9hBmtoSELOMoSybxyjs57T2tftz0i-ibWVwXu~5MCJmDqxQasnnbUL0YTNgFTRZeW2puUInExr0s3e8qygcKc9aytMguh-sQIredKrNtBtQ9YHQK8rFiV~IQetPtMX5ftbw45TmJhnnlPvJYiRw-qGlikKwu5GHplZOLkeOi-w7goYVOTclq1oRwtXmc9Q1FKc4I-6La4YIZrrkUG6S261TXCoxAtxtXG5slT93pL--ftbFVfgQghdo16K30na57AAZGl5pMQJXTBvaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  alt="image_cap" />
            <div className="card-body">
              <p className="card-text">Tom Brady</p>
              <p className='number'>51</p>
              <p className='point'>Points</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frame