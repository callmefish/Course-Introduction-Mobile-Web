import { NavLink } from "react-router-dom";
import {nav} from "../../router/route_list";

export default function Menu(props){
    return (
        <nav id="menu">
            {nav.map((item, index)=>{
                return (<NavLink 
                            className={item.className} 
                            to={item.path}
                            key={index}
                            exact={item.exact}
                            activeClassName={"active"}
                            onTouchEnd={props.menuHide}
                        >{item.name}</NavLink>)
            })}
        </nav>
    )
}