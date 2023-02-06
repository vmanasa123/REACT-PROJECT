import { data } from "../Top post data/API DATA/HollywoodApi";
import { useNavigate } from "react-router-dom";
const Hollywood = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {
        navigate(`/Hollywood/${id}`, { state: { item } });
    };
    return (
        <div id="container-Right">
            <div id="Title">Top Post</div>
            <div>
                <div>
                    <div id="top-Parent" style={{padding:"20px"}}>
                        <img src={"https://thumbs.dreamstime.com/z/galaxy-s-edge-disney-world-hollywood-studios-wall-poster-conceptual-design-new-star-wars-section-walt-orlando-141315570.jpg"} width={435} height={250} style={{ marginTop: "25px" }} alt="404_Error" />
                        <div className="miniTitle1">{"Galaxy`s Edge, Disney World, Hollywood Studios"}</div>
                        <div className="miniParagraph1">{"Wall poster with a conceptual design of the new Galaxy`s Edge Star Wars section of Hollywood Studios at Walt Disney World in Orlando, FL. Florida is a popular travel destination for people and tourists who travel on vacation or holiday."}</div>
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
export default Hollywood;