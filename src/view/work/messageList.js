import {connect} from "react-redux";
import ToDate from "../../common/component/ToDate";
function MessageListView(props){
    let {messageList, loadEnd, loading} = props;
    // console.log(props);
    return (
        <div>
            <ul className="comment_list">
                {
                    messageList.map((item, index)=>(
                        <li key={index}>
                            <div className="user_comment clearfix">
                                <span>{item.username}</span>
                            </div>
                            <div className="comment_txt">{item.content}</div>
                            <div className="comment_footer">
                                <time>
                                    <ToDate 
                                        time={item.create_time}
                                    />
                                </time>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <a className="comment_list_more">{loadEnd?"没有新数据了":(loading?"正在加载中":"上划加载更多")}</a>
        </div>
    )
}

function MessageList(props){
    let {messageList} = props;
    return (
        <div className="comment_list_wrap">
            {messageList.length <=0?
                <p className="comment_list_info">快来发布一条评论吧</p>
                :
                <MessageListView {...props}/>
            }
        </div>
    );
}

export default connect(state=>state.messageList)(MessageList);