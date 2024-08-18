import React from 'react'
import Button from '../base-components/Button.jsx'
import './homeDescription.css'
import '../base-components/Button.css';
import TitleBox from './TitleBox.jsx';
import {Link} from "react-router-dom"

export default function HomeDescription() {
  return (
    <div className='homeDesc'>

      <TitleBox title={"Glint Vision"} />

        <div className='homePara'>
        GlintTEch: Elevating your digital presence with <br /> expert Web and Mobile Development, Data Analysis,<br /> Graphics Design, UI/UX Design, and Video Animation.
        </div>

        <div className='ActionButtons'>
            <Button title={"learn more"} style={"learn-more"}  />
           <Link to='/signUp' ><Button title={"Sign in"} style={"Sign-in"} /></Link>
        </div>
    </div>
  )
}
