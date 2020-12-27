import React from 'react'
import { NavLink } from 'react-router-dom'

function Topmenu() {
    return (
        <div className="header">
            <div className="brand-area">
                <img className="logo" src="./img/logo" alt="Mansoura University "/>
        </div>
                <div className="header-top">
                    <a href="#">English</a>

                    <div className="search-top">
                        <a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                        <input className="search-text" type="text" name="searchQuery" id="search"/>
            </div>

                    </div>
                    <div className="header-menu">
                        <nav>
                            <ul>
                                <li ><NavLink exact activeClassName = "active" to="/">الرئيسية</NavLink></li>
                                <li><a href="">عن الجامعه <i className="fa fa-angle-down" aria-hidden="true"></i> </a>
                                    <div className="header-sub">
                                        <ul>
                                            <li><a href="#">نبذه عن الجامعه</a></li>
                                            <li><a href="#"> الرؤية</a></li>
                                            <li><a href="#"> الرساله</a></li>
                                            <li><a href="#"> تصنيف الجامعه</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href=""> اسئله شائغه <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <div className="header-sub">
                                        <ul>
                                            <li><a href="#">برنامج درجه الماجيسير في أداره اعمال MBA </a></li>

                                        </ul>
                                    </div>
                                </li>
                                <li><NavLink exact activeClassName = "active" to="/news">أخبارنا</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
    )
}

export default Topmenu
