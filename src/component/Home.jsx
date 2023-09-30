import React from 'react'
import { useEffect, useState } from 'react'

const Home = () => {
    const imagelinks = ['https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w3-fresh-start/cash/Slider.jpg',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w3-fresh-start/Homepage_712x384_copy.jpg',
'https://ng.jumia.is/cms/0-1-initiatives/vote-for-deals/2023/712x384.gif',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w4-payday-deals/Pay_day_deals_Slider.jpg',
'https://ng.jumia.is/cms/0-1-initiatives/jumia-pay/2023/Mall712x384.jpg',
'https://ng.jumia.is/cms/0-1-initiatives/flashsale/new_712x384v2.png',
'https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/adidas/homepage_slider.jpg',

]


  return (
    <> <div className='layerOne'>
            <div className='lists'>
                <ul>
                    <li><a href="/">Electronics</a></li>
                    <li><a href="/">Jewelery</a></li>
                    <li><a href="/">Men's Clothing</a></li>
                    <li><a href="/">Womens Clothing</a></li>
                </ul>
            </div>
            <div className='showCase'>
                <img src={imagelinks[2]} alt="images" className='showCaseImage' style={{width: "60vw", height: "60vh"}}/>
            </div>
            <div className='case'></div>
        </div>
    </>
  )
}

export default Home