import React from 'react'
import ArticleForm from './ArticleForm'
import {useDispatch} from 'react-redux'
import {addArticle} from '../../actions/articles'
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'

const AddArticle = (props) => {
    const dispatch=useDispatch();
    return (
        <div className="bg-secondary">
        <Container className="bg-secondary">              
         <Row>
             <Col className="my-3">
                 <Jumbotron>
            <h1 color="white" className="text-center">Makale Ekle</h1>
            <ArticleForm onSubmit={(article) =>{
                dispatch(addArticle(article));
                console.log(article);
                props.history.push('/articles')
            }}/>
            </Jumbotron>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default AddArticle
