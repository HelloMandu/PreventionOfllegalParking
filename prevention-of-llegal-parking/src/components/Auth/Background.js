import React from 'react'
import './Background.scss'

export default () => {
  return (
    <div className="earth">
      <div className="elements">
        <div className="sky air2">
          <div className="sun" />
          <div className="tree">
            <div className="leafs" />
            <div className="trunk" />
          </div>
          <div className="cloud" style={{ marginRight: '20 %', marginTop: '10 %' }} />
          <div className="night">
            <span className="moon" />
            <span className="star" style={{ right: '25%', top: '10%' }} />
            <span className="star" style={{ right: '20%', top: '45%' }} />
            <span className="star" style={{ right: '20%', top: '65%' }} />
            <span className="star" style={{ right: '15%', top: '85%' }} />
            <span className="star" style={{ right: '50%', top: '5%' }} />
            <span className="star" style={{ right: '45%', top: '50%' }} />
            <span className="star" style={{ right: '55%', top: '20%' }} />
            <span className="star" style={{ right: '35%', top: '50%' }} />
            <span className="star" style={{ right: '85%', top: '30%' }} />
            <span className="star" style={{ right: '82%', top: '40%' }} />
            <span className="star" style={{ right: '70%', top: '30%' }} />
            <span className="star" style={{ right: '60%', top: '42%' }} />
            <span className="star" style={{ right: '33%', top: '60%' }} />
            <span className="star" style={{ right: '24%', top: '44%' }} />
            <span className="star" style={{ right: '73%', top: '12%' }} />
            <span className="star" style={{ right: '73%', top: '12%' }} />
            <span className="star" style={{ right: '50%', top: '81%' }} />
            <span className="star" style={{ left: '10%', top: '76%' }} />
            <span className="star" style={{ left: '5%', top: '66%' }} />
          </div>
        </div>
        <div className="ground">
          <div className="road">
            <span />
          </div>
          <div className="car car1">
            <div className="music">
              <span />
              <span />
              <span />
            </div>
            <div className="back" />
            <div className="body" />
            <div className="front" />
            <div className="wheels frontW" />
            <div className="wheels backW" />
          </div>
          <div className="car car2">
            <div className="music">
              <span />
              <span />
              <span />
            </div>
            <div className="back" />
            <div className="body">
              /
              <div className="front" />
              <div className="wheels frontW" />
              <div className="wheels backW" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
