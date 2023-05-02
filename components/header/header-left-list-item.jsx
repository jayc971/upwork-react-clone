import { dropdown } from "../../assets";

export default function HeaderLeftListItem({txt, ifDropDown}){
   return(<li className="header_left_list_item">
           {txt}
       {ifDropDown && <img src={dropdown} alt=""/>}
    </li>
   ) }
