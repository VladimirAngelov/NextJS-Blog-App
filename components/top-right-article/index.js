import style from './styles/style.module.css'

const TopRightArticle = ({data}) => {
    return (
        <div className={style['top-right-article']}>
            <img src={data[1].urls.regular} alt=""/>
            <p className={style.name}>Leon Hunt</p>
            <p className={style.title}>Food & cooking bloger</p>
            <p className={style.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
                deserunt.</p>
            <button>Continue Reading</button>
        </div>
    );
}

export default TopRightArticle;