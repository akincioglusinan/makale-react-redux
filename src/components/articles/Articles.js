import React, { useEffect } from 'react'
import ArticleList from './ArticleList'
import CategoryList from '../category/CategoryList'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../../actions/articles'

const Articles = () => {
    
    const articles = useSelector((state) => state.articles)
    const dispatch=useDispatch();
    
    useEffect(() => {
       dispatch(getArticles());
     },[]);

    return (
        <>
            <Container fluid className="bg-secondary">
                
                <Row>
                    <Col sm={2} id="sidebar-wrapper">
                        <CategoryList />
                    </Col>
                    <Col sm={10} id="page-content-wrapper">                  
                     <Card className="my-2">                    
                        <Card.Header className="text-center"><h2>Makaleler</h2></Card.Header>
                        <Card.Body>
                        <ArticleList {...articles} />
                        <div className="text-center my-2">
                        <Card.Link href="/create" className="btn btn-primary">Makalele Ekle</Card.Link>
                        </div>
                        </Card.Body>
                        <Card.Footer className="text-muted">Footer</Card.Footer>
                        </Card> 
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default Articles
