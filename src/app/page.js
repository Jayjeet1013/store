import React from 'react'
import Header from './components/Header'
import Miniheader from './components/Miniheader'
import Body from './components/Body'
import Todaydeal from './components/Todaydeal'
import Kitchen from './components/Kitchen'
import Middle from './components/Middle'
import BeautyPro from './components/BeautyPro'
import Footer  from './components/Footer'
const page = () => {
  return (
    <div>

<Body/>
<Todaydeal/>
<Kitchen/>
<Middle/>
<BeautyPro/>
<Footer/>
    </div>


  )
}

export default page