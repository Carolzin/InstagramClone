import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IconContext } from 'react-icons'

import './styleHeader.css'

export function Header() {
    return (
        <header className="header">

            <div className="container">

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="pesquisar">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>


                    <input placeholder="Pesquisar" />
                </div>

                <div className="menuIcons">
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div> 
                            <AiFillHome />
                        </div>

                        <div>
                            <RiMessengerLine />
                        </div>

                        <div>
                            <CiSquarePlus />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <CiHeart />
                        </div>
                        
                    </IconContext.Provider>
                    <img className="imgUser" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ76tQOAWiYbr4cKw67fuXkqsToE6-4sETQ&s"></img>
                </div>

            </div>

        </header >
    )
}