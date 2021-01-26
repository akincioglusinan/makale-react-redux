import React, { useEffect } from 'react'
import { Table, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ArticleListItem from './ArticleListItem'
import { getArticles } from '../../actions/articles'
import SpinnerUI from '../tools/SpinnerUI'

const ArticleList = (props) => {
    // const [artic, setArticles]=useState([]);

    const articles = useSelector((state) => state.articles)
    const dispatch=useDispatch();
    
    useEffect(() => {
       dispatch(getArticles());
        
    },[]);

console.log(articles)
   

    //[]=sadece componentdidmount
    return (
        <>
            {articles.isLoading ?
                <SpinnerUI />
                :
                <div>
                {articles.message && <Alert variant="success"><p className="text-center"><b>{articles.message}</b></p></Alert>} 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Makale Adı</th>
                            <th>Kelime Sayısı</th>
                            <th>Yazar Adı</th>
                            <th>Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.articles.map((article, index) => {
                            const wc = (article.content.match(/ /g) || []).length;
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td><ArticleListItem key={article.id} {...article} /></td>
                                <td>{wc}</td>
                                <td>{article.userId}</td>
                                <td>{wc * .5} TL</td>
                            </tr>
                        })}
                    </tbody>
                </Table></div>}
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         articles: state.articles.articles,
//         isLoading: state.articles.isLoading
//     }
// }

//export default connect(mapStateToProps, { getArticles })(ArticleList)
export default ArticleList
