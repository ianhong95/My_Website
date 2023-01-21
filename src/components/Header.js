import { React, useState, useEffect } from 'react'
import { Link } from "react-scroll";

const Header = () => {

    var textBank = ["Mechanical Engineer (P. Eng)", "Tech Enthusiast", "Casual Pianist"];

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
            <Link
                activeClass="active" 
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
            >
                <a className="btn btn-primary">Get To Know Me</a>  
            </Link>
          </div>
        </div>
    )
}

export default Header
