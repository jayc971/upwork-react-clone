import React from 'react';
import {dropdown, logo, search} from "../../assets";
import {useState} from "react";
import FindTalent from "../SubMenus/FindTalent";
import styles from "./Header.module.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header() {


    const HeaderItems = [
        {
            title: "Find Talent",
            link: "#",
            id: 0,
            subItemsOrder: "",
            arrows: true,
            subItems: [
                {
                    title: "Post a Job and Hire a Pro",
                    subTitle: "Talent Marketplace"
                },
                {
                    title: "Browse and buy projects",
                    subTitle: "Project Catalog"
                },
                {
                    title: "Get advise from an industry expert",
                    subTitle: "Consultations"
                }
            ],
            rightContent: <><p>Talent MarketplaceTM</p>
                <p>Learn about working with talent or explore your specific hiring needs.</p></>
        },
        {
            title: "Find Work",
            link: "#",
            id: 1,
            subItemsOrder: "d-flex",
            arrows: false,
            subItems: [  {
                title: "Ways to earn",
                subTitle: "Learn why Upwork has the right opportunities for you"
            },
                {
                    title: "Find work for your skills",
                    subTitle: "Explore the kind of work available in your field"
                },
                {
                    title: "Find ways to promote yourself",
                    subTitle: "Show clients you're the one they want"
                }],
            rightContent: ""
        },
        {
            title: "Why Upwork",
            link: "#",
            id: 2,
            subItemsOrder: "",
            arrows: false,
            subItems: [ {
                title: "Post a Job and Hire a Pro",
                subTitle: "Talent Marketplace"
            }],
            rightContent: ""
        }
    ]



    const ListWithRef = ({id, text, subItems, subItemsOrder, arrows, rightContent})=>{
        const ref = React.useRef(null);
        const [isDropdownVisible, setDropdownVisible] = useState(false);

        const handleMouseEnter = (e) => {

            setDropdownVisible(true);
        };

        const handleMouseLeave = (e) => {
            setDropdownVisible(false);
        };

        return (
       <>

        <li ref={ref} id={id} className="header_left_list_item " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {text}
            <img id={id} src={dropdown} alt="" className={isDropdownVisible && styles.hovered}/>
            {(isDropdownVisible && ((e)=>e.current.id === id)) && <FindTalent items={subItems} rightContent={rightContent} arrows={arrows} order={subItemsOrder}/>}
        </li></>
        );
    }


    return (
    <header className="header">
        <div className="header_wrapper">
            <div className="header_left w-100">
                <img src={logo} alt=""/>

                <ul className="header_left_list d-flex">
                    {HeaderItems.map((item,index)=>{

                        return (
                            <ListWithRef rightContent={item.rightContent} arrows={item.arrows} subItemsOrder={item.subItemsOrder} subItems={item.subItems} id={item.id} text={item.title}  key={index}/>
                        )
                    },this)

                            }

                   </ul>


            </div>

            <div className="header_right">
                <div className="header_right_form">
                    <input type="search" placeholder="Search" name="search" id=""/>
                    <div className="header_left_form_input_icons">
                        <img src={search} alt=""/>
                    </div>

                    <div className="header_right_form_input_icons" >
                        Talent
                        <img src={dropdown} alt=""/>
                    </div>
                </div>
                <div className="header_right_btns">
                    <button className="btn_primary">Log In
                    </button
                    >
                    <button className="btn_secondary">Sign Up</button>
                </div>
            </div>
        </div>

        <div className="header_nav_menu hidden">
            <div className="header_nav_menu_left">
                <ul className="header_nav_menu_items">
                    <li className="header_nav_menu_item">Post a job and hire a pro
                        <p>Talent Marketplace</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--green-side-arrow)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg>
                    </li>
                    <li className="header_nav_menu_item">Browse and buy projects <p>Project Catalog</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--green-side-arrow)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg></li>
                    <li className="header_nav_menu_item">Let us find you the right talent <p>Talent Scout</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--green-side-arrow)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 6l5 6-5 6"></path></svg></li>
                </ul></div>
        </div>

        <div className="section_1_top">

            <ul className="section_1_top_list">
                <li className="section_1_top_list_item">Development & IT</li>
                <li className="section_1_top_list_item">Design & Creative</li>
                <li className="section_1_top_list_item">Sales & Marketing</li>
                <li className="section_1_top_list_item">Writing & Translation</li>
                <li className="section_1_top_list_item">Admin & Customer Support</li>
                <li className="section_1_top_list_item">
                    More
                    <img src={dropdown} alt=""/>
                </li>
            </ul>
        </div>
    </header>

    )
}

export default Header;