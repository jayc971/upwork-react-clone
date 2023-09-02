import React, {useState, useRef} from 'react';
import styles from './SubMenus.module.scss';
import {dropdown, r_arrow} from "../../assets";

const FindTalent = ({order, arrows, subItems, defaultSubItems}) => {
    console.log('dsadsadas',subItems)

    const defaultInner = defaultSubItems;

    const [currentInner, setCurrentInner] = useState('');


    const InnerWithRef = ({index, title, subTitle, arrows, innerContents, midContent, rightContent})=>{
        const ref = useRef(null);

        const handleMouseEnter = (e) => {
            console.log(currentInner)
            setCurrentInner([midContent, rightContent]);
        };

        return (
            <>
                <li ref={ref} onMouseEnter={handleMouseEnter} id={index} key={index} className={`${styles.dropdown__menu_li} d-flex col-lg-12 p-3 mb-3`}>
                    <div className={"col-lg-12"}><p>{title}</p>
                        <p className={styles.sub__title}>{subTitle}</p></div>
                    {arrows && <img className={"col-lg-4"} className={styles.r__arrow} src={r_arrow}/>}
                </li></>
        );
    }


    return  (

        <div className={`${styles.dropdown__menu} d-flex col-lg-12`}>

           <ul className={`${styles.dropdown__menu_ul} ${order} col-lg-4 `}>
               {subItems.map((subItem, index) =>{

                   return(<>
                            <InnerWithRef rightContent={subItem.innerContents && subItem.innerContents[0].rightContent} midContent={subItem.innerContents && subItem.innerContents[0].midContent} innerContents={subItem.innerContents} index={index} title={subItem.title} arrows={arrows} subTitle={subItem.subTitle} key={index}/>
                       </>)
               },this)}


           </ul>


        {order !== 'd-flex' && <> <ul className={`bg-white col-lg-2`}>
            <li className={''}>

                <p>{currentInner[0] ?? defaultInner[0]}</p>
            </li>
        </ul> <ul className={'bg-white  col-lg-6'}>
             <li className={''}>

                <p>{currentInner[1] ?? defaultInner[1]}</p>
             </li>
             </ul></>}



       </div>);
}

export default FindTalent;