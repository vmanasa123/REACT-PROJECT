
import TopPost from '../../COMPONENTS/Top post data/API DATA/Top post'
 import LatestArticle from './latest article'
import ArticleContent from '../../COMPONENTS/Articlecontext/article context'
import BlogPost from '../../COMPONENTS/Blogpost/blog post'
 import Ads from '../../COMMON/Ads'
 import Pic from '../../COMPONENTS/Images'
 
const Home = () => {
    return (
        <div>
            <div id="mediaTop">
                <ArticleContent />
            </div>
            <div id="latest">
                <BlogPost Title="Latest" />
            </div>
            <div id="center">
                <LatestArticle Title="Latest-Article" />
                <Pic />
                <div id="Right-Main">
                    <Ads />
                    <TopPost />
                </div>
                <br/><br/>
                <div id="end" style={{paddingBottom:"30px"}}>
                    <BlogPost Title="Latest-Stories"/>
                </div>
            </div>
        </div>
    )
}
export default Home;

