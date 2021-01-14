import { Link } from "react-router-dom";

export default function Works(props){
    let {data, loadEnd, loading} = props;
    let visit = new Set();
    let newData = [];
    for(let i = 0; i < data.length; i++){
        if (!visit.has(data[i]["id"])){
            visit.add(data[i]["id"]);
            newData.push(data[i]);
        }
    }
    return (
        <div className="works">
            <h3>学员作品</h3>
            <ul className="works_list clearfix">
                {
                    newData.map(item=>(
                        <li key={item.id}>
                            <Link to={"/work/"+item.id}>
                                {/* {item.id} */}
                                <img src={item.icon} className="work_a"/>
                                <span className="wrork_txt clearfix work_a">
                                    <strong className="work_a">{item.title}</strong>
                                    <span className="work_a">
                                        <em className="work_a">{item.message}</em>
                                        <em className="work_a">{item.good}</em>
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <a className="more">{loadEnd?"没有新数据了":(loading?"正在加载中":"上划加载更多")}</a>
        </div>
    )
}