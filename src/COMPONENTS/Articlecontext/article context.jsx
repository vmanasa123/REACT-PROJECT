import './article context style.css'
import { data, data1, data2 } from "../../UTILITY/Apicallerhead";
import { useNavigate } from "react-router-dom";

function ArticleContent() {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    
    return (
        <div id="Pic">
            <div id="one">
                {data.map((item) => {
                    return (
                        <div id="img2" key={item.id}>
                            <img
                                className="img2"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={800}
                                height={465}
                                style={{ borderRadius: "15px" }}
                            />
                            <div id="oneText">
                                <div className="Text">{item.title}
                      <div className="Traval">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div id="two">
                {data1.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                className="img1"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={450}
                                height={225}
                                style={{ borderRadius: "15px" }}
                            />
                            <div id="twoText">
                                <div className="Text">{item.title}
                                    <div className="Traval">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div id="three">
                {data2.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                className="img1"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={450}
                                height={225}
                                style={{ borderRadius: "15px" }}
                            />
                            <div id="twoText">
                                <div className="Text">{item.title}
                                    <div className="Traval">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default ArticleContent;