import { data } from "../../API-DATA/TechnologyApi";
import { useNavigate } from "react-router-dom";
import TechnologyTopPost from '../../COMPONENTS/Top post data/Technology'
import Ads from '../../COMMON/Ads'

const Technology = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => { 
        navigate(`/Technology/${id}`, { state: { item } });
    };

    return (
        <div>
            <div id="container">
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
      <span className="Traval1 miniTitle1">{item.category}{" /"}<span> {item.date}</span></span>
                          </div>
                        </div>
                    </div>
                );
            })}
        </div>
            <div id="Right-Side">
                    <TechnologyTopPost />
                    <Ads />
             </div>
        </div>
    );
};

export default Technology;




  