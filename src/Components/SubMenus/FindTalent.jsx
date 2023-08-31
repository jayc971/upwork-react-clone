import React, {useState} from 'react';
import styles from './SubMenus.module.scss';
import {r_arrow} from "../../assets";

const FindTalent = ({items, order, arrows, rightContent}) => {


    return  (<div className={`${styles.dropdown__menu} d-flex col-lg-12 `}>

           <ul className={`${styles.dropdown__menu_ul} ${order} col-lg-4`}>


               {items.map((item, index) =>{
                   return(
                       <><li className={`${styles.dropdown__menu_li} d-flex col-lg-12 p-3 mb-3`}>
                           <div className={"col-lg-12"}><p>{item.title}</p>
                           <p className={styles.sub__title}> {item.subTitle}</p> </div>
                           {arrows && <img className={"col-lg-4"} className={styles.r__arrow} src={r_arrow}/>}

                       </li>

                       </>)
               },this)}


           </ul>




         {rightContent !== "" &&

        <ul className={'bg-white  col-lg-8'}>
            <li className={''}>

                <p>{rightContent}</p>
            </li>
        </ul>}


       </div>);
}

export default FindTalent;