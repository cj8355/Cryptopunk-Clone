import React from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css';

const Main = () => {
  return (
    <div className='Main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img 
                    className='selectedPunk'
                    src={"https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=s250"} />

                </div>
            </div>

            <div className='punkDetails' style={{ color: '#fff' }}>
                <div className='title'>Bandana Punk</div>
                <span className='itemNumber'>•#3</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img 
                    src={"https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=s250"} 
                    />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>v0x0961494ae4217FB91c82D056913bc13513935bba</div>
                        <div className='ownerHandle'>That's me</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} />
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Main