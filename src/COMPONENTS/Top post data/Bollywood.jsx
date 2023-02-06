import { data } from "../Top post data/API DATA/BollywoodApi";
import { useNavigate } from "react-router-dom";

const Bollywood = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    return (
        <div id="container-Right">
            <div id="Title">Top Post</div>
            <div>
                <div>
                    <div id="top-Parent" style={{padding:"20px"}}>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9zDEjVHQDie81AJ8PCw87df7GrNNQxr9xg&usqp=CAU"} width={435} height={250} style={{ marginTop: "25px" }} alt="404_Error"/> 
                        <div className="miniTitle1">{"Indian Music and Dance Show"}</div>
                        <div className="miniParagraph1">{"The Indian Bollywood Film Star Song and Dance Troupe perform on stage during Indian Music and Dance Show at Beijing Exhibition Theater on January 31, 2010 in Beijing, China."}</div>
                        <div className="Traval1 miniTitle1">{"on January 31, 2010"}</div>
                    </div>
                    {data.map((item) => {
                        return (
                            <div id="box">
                                <div id="parent" key={item.id} style={{ width: "100%" }}>
                                    <img
                                        className="img1"
                                        onClick={() => handleNavigation(item.id, item)}
                                        src={item.url}
                                        alt={"404_Error Check your Connection please...."}
                                        width={250}
                                        height={150}
                                    />
                                    <div id="content" style={{}}>
                                        <div className="miniTitle1" style={{ height: "30px", overflow: "hidden" }}>{item.title}</div>
                                        <div className="miniParagraph1" style={{ height: "70px", overflow: "hidden" }}>{item.content}</div>
                                        <span className="Traval1 miniTitle1" style={{ height: "20px", overflow: "hidden" }}>{item.category}{" /"}<span> {item.date}</span></span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default Bollywood;