import { dropdown , logo , search } from "../../assets";
import HeaderLeftListItem from "./header-left-list-item";
import headerData from "./header-left-list-items.json";
import { useEffect , useState } from "react";

export default function Header (){
    const [headerDatas, setHeaderDatas] = useState(headerData);

    useEffect(()=> {
        (headerDatas && setHeaderDatas(headerData))
    },[headerDatas]);

return(
<header className="header">
    <div className="header_wrapper">
        <div className="header_left">
            <img src={logo} alt=""/>
            <ul className="header_left_list">
                {
                    headerDatas.map(data=>{
                        const {txt,ifDropDown} = data;
                        return(
                            <HeaderLeftListItem txt={txt} ifDropDown={ifDropDown}/>
                        )
                    })
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
</header>)}