import { data } from "../../API-DATA/BollywoodApi";
import { useNavigate } from "react-router-dom";
import BollywoodTopPost from '../../COMPONENTS/Top post data/Bollywood'
import Ads from '../../COMMON/Ads'

const Bollywood = (props) => {
    const navigate = useNavigate();
    
    const handleNavigation = (id, item) => {
        navigate(`/bollywood/${id}`, { state: { item } });
    };

    return (
        <section>
            <div id="Left-Side">
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
                    <span>Load More....</span>
                </div>
            </div>
            <div id="Right-Side">
                <BollywoodTopPost />
                <Ads />
            </div>
        </section>
    );
};

export default Bollywood;
