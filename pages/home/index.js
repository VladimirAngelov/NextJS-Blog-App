import style from './styles/style.module.css'
import {useState} from "react";
import MainArticle from "../../components/articleCard";
import TopRightArticle from "../../components/top-right-article";
import PopularPost from "../../components/popular-post-card";
import Buttons from "../../components/buttons";

const HomePage = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1)
    let dataToShow;

    const smallArticles = data.slice(0, 4).map(x => (
        <div className={style['small-article']}>
            <img src={x.urls.regular} alt=""/>
            <div className={style.type}>Vehicle</div>
            <p className={style.author}>Lorem ipsum dolor.</p>
            <p className={style.title}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
    ))
    const pageCount = data.length / 5;

    if (currentPage === 0) setCurrentPage(1)

    if (currentPage === 1) {
        dataToShow = data.slice(0, currentPage * 5);
    } else {
        const end = currentPage * 5;
        const start = currentPage * 5 - 5;
        dataToShow = data.slice(start, end);
    }

    return (
        <div className={style.homepage}>
            <div className={style['top-section']}>
                <div className={style['large-article']}>
                    <img src={data[4]?.urls.regular} alt=""/>
                    <div className={style.type}>Vehicle</div>
                    <p className={style.author}>Lorem ipsum dolor.</p>
                    <p className={style.title}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className={style['small-articles']}>
                    {smallArticles}
                </div>
            </div>
            <div className={style.main}>
                <div className={style['left-side']}>
                    {dataToShow.map(x => <MainArticle imageURL={x.urls.regular}/>)}
                </div>
                <div className={style['right-side']}>
                    <TopRightArticle data={data}/>
                    <h3>Popular posts</h3>
                    {data.slice(0, 5).map(x => <PopularPost imageURL={x.urls.regular}/>)}
                </div>
                <Buttons currentPage={currentPage} setCurrentPage={setCurrentPage} buttonCount={pageCount}/>
            </div>
        </div>
    );
}

export default HomePage;