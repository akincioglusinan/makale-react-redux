import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleDetailsItem from './ArticleDetailsItem'
import { getArticle } from '../../actions/articles'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import SpinnerUI from '../tools/SpinnerUI'


const ArticleDetails = (props) => {
    
    const article = useSelector((state) => state.articles)
    const dispatch = useDispatch();
    const { id } = props.match.params;

    useEffect(() => {
        dispatch(getArticle(id));
    },[])
    //console.log(article)
    // useEffect(()=>{
    //     props.getArticles();
    //  },[])
    //console.log(props)
    return (
        <div className="bg-secondary">
            <Container >
                <Row >
                    <Col>
                <Jumbotron className="my-3">
                    {article.isLoading ?
                        <SpinnerUI />
                        :
                        <ArticleDetailsItem {...article.article} />
                        }
                </Jumbotron>
                </Col>
                </Row>
            </Container>
        </div>
    )
}
// const mapStateToProps = (state, props) => {
// console.log(state)
//     return {
//         article: state.articles.articles.find((article)=> {
//             console.log(article.id, props.match.params.id);
//             return article.id===parseInt(props.match.params.id)
//         }
//         )
//     }
// }
// export default connect(mapStateToProps, {getArticles})(ArticleDetails)

export default ArticleDetails
