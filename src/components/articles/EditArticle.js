import React from 'react'
import ArticleForm from './ArticleForm'
import { useDispatch, useSelector } from 'react-redux'
import { editArticle, getArticle, removeArticle } from '../../actions/articles'
import { Row, Container, Col, Jumbotron } from 'react-bootstrap'
import { useEffect } from 'react'

const EditArticle = (props) => {
    const error = useSelector((state) => state.message)
    const article = useSelector((state) => state.articles)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticle(props.match.params.id));

    }, [])
    

    //console.log(props.match.params.id)
    
    return (
            <div className="bg-secondary">
                <Container>
                    <Row>
                        <Col className="my-3">
                            <Jumbotron>
                                <h1 className="text-center">Düzenle</h1>
                                <ArticleForm
                                {...article}
                                    onSubmit={(article) => {
                                        console.log(article);
                                        dispatch(editArticle(props.match.params.id, article));
                                        props.history.push('/articles');
                                    }}
                                />
                                <div className="text-right">
                                    <button className="btn btn-danger" onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(removeArticle(parseInt(props.match.params.id)));
                                        props.history.push('/articles');
                                    }}>Sil</button>
                                    {error && <p>{error}</p>}
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

// const mapStateToProps=(state,props) =>{
//     return {
//         article:state.articles.find((a) =>{
//             return a.id===props.match.params.id
//         })
//     }
// }

// export default connect(mapStateToProps)(EditArticle)

export default EditArticle
