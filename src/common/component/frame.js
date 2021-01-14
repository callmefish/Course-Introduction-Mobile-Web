import Header from "./header";
import Menu from "./menu";
import "../css/reset.css";
import "../css/common.css";
import { useEffect, useRef } from "react";
import BScroll from "better-scroll";
import {useInnerHeight} from '../../common/hook/index';

export default function Frame(props){
    const innerHeight = useInnerHeight();
    const wrap = useRef(null);
    let {pullUp, getData} = props;
    useEffect(()=>{
        window.pageScroll = new BScroll(wrap.current,{
            preventDefaultException:{
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)work_a(\s|$)/
            },
            pullUpLoad: pullUp?{threshold:200}:false
        });
        window.pageScroll.on("pullingUp", ()=>{
            // console.log("上滑加载更多");
            getData().then(res=>{
                if(res){
                    window.pageScroll.finishPullUp();
                    window.pageScroll.refresh();
                }else{
                    window.pageScroll.closePullUp();
                }
            });
        })
        return ()=>{
            window.pageScroll = null;
        }
    },[])
    return (
        <div 
            id="main" 
            style={{
                height:innerHeight
            }}
        >
            <div 
                className="pageWrap"
                ref={wrap}
            >
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}