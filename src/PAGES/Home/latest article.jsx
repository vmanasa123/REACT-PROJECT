import { data } from "../../COMPONENTS/Top post data/API DATA/Home";
import { useNavigate } from "react-router-dom";

const LatestArticle = (props) => {
    const navigate = useNavigate();
    
    const handleNavigation = (id, item) => {
        navigate(`/Bollywood/${id}`, { state: { item } });
    };

    return (
        <div id="container"style={{marginTop:"0px"}}>
            <span id="Title">{props.Title}</span>
            {data.map((item) => {
                return (
                    <div id="box">
                        <div id="parent" key={item.id}>
                            <img
                               
                                className="img1"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={300}
                                height={200}
                            />
                <div id="content">
                        <div className="miniTitle1">{item.title}</div>
                         <div className="miniParagraph1">{item.content}</div>
            <span className="Traval1 miniTitle1">{item.category}{" /"} <span> 
                {item.date}</span> </span>
                          </div>
                        </div>
                    </div>
                );
            })}
            <div>Load More...</div>
        </div>
    );
};

export default LatestArticle;