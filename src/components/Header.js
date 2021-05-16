import { React, useState, useEffect } from 'react'

const Header = () => {

    var textBank = ["Mechanical Engineer-In-Training", "Tech enthusiast", "Hobby pianist"];

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
      });

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({ fade: 'fade-out' })
            } else {
                setCounter(counter)
                setFadeProp({ fade: 'fade-in' })
                if (counter === textBank.length - 1) {
                    setCounter(0)
                } else  {
                    setCounter(counter+1)
                }
            }
        }, 2000);

        return () => {
            clearInterval(timeout)
        }
    }, [fadeProp])
    
    return (
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Ian Hong</h1>
            <h2 className={fadeProp.fade}>{ textBank[counter] }</h2>
            <a className="btn btn-primary js-scroll-trigger" href="#about">Get To Know Me</a>  
          </div>
        </div>
    )
}

export default Header
