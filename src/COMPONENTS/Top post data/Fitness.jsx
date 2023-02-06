import { data } from "../../COMPONENTS/Top post data/API DATA/FitnessApi";
import { useNavigate } from "react-router-dom";

const Fitness = (props) => {
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
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoz9eFysjtqW5fTWaKoSKB3k_PK9hf_rEdg&usqp=CAU"} width={435} height={250} style={{ marginTop: "25px" }} alt="404_Error" />
                        <div className="miniTitle1">{"Close up hands. Woman do yoga outdoor"}</div>
                        <div className="miniParagraph1">{"Close up hands. Woman do yoga outdoor. Woman exercising vital and meditation for fitness lifestyle in the beach sunset background. Healthy Concept"}</div>
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
export default Fitness;