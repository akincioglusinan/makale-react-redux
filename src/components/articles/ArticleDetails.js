import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleDetailsItem from './ArticleDetailsItem'
import { getArticle } from '../../actions/articles'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import SpinnerUI from '../tools/SpinnerUI'
import { addCart } from '../../actions/cart'


const ArticleDetails = (props) => {

    const article = useSelector((state) => state.articles)
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const { id } = props.match.params;
    const cid=parseInt(id)
    const cart =( user.user && article.article ?{
        userId: user.user.userId,
        articleId: cid,
        title:article.article.title,
        content:article.article.content
    }: {userId:0, artilceId:0} )

    useEffect(() => {
        dispatch(getArticle(id));
    }, [])

    //console.log(article)
    // useEffect(()=>{
    //     props.getArticles();
    //  },[])
    //console.log(cart)
    return (
        <div className="bg-secondary">
            <Container >
                <Row >
                    <Col>
                        <Jumbotron className="my-3">
                            {article.isLoading ?
                                <SpinnerUI />
                                :
                                <ArticleDetailsItem {...article.article} onClick={() => { dispatch(addCart(cart)) }} />
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
