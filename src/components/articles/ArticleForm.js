import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const ArticleForm = (props) => {
    const [error, setError] = useState(props.message ? props.message : '')

    const [article, setArticle] = useState(
        props.article 
    ? 
    { 
        id: props.article.id, 
        title: props.article.title, 
        content: props.article.content,
        categoryId:props.article.categoryId, 
        userId: props.article.userId, 
        createdDateTime: props.article.createdDateTime
    } 
        : 
    { 
        title: '', 
        content: '',
        categoryId: 1,
        userId: 1,
        createdDateTime: new Date()
    }
    )

    const handleOnChange = (e) => {
        //console.log(typeof e.target.value)
        setArticle({ ...article, [e.target.name] : e.target.value })
        //console.log(e.target.value, e.target.name, article)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!article.title || !article.content) {
            setError({ ...error, message: 'Lütfen tüm boş alanları doldurunuz!' })
        }
        else {
            setError({ ...error, message: '' });
           
            setArticle(prevState => {
                return { ...prevState, categoryId: parseInt(prevState.categoryId) };
            })
            props.onSubmit(article)
            console.log(article, 'submitted.')
        }
    }

    return (
        <div>

            <Form onSubmit={onSubmit} >

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Makale Başlığı :</Form.Label>
                    <Form.Control placeholder="Bir başlık girin"
                        name="title" value={article.title}
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Kategori :</Form.Label>
                    <Form.Control as="select" name="categoryId" placeholder="categoryId"
                        value={parseInt(article.categoryId)}
                        type="number"
                        onChange={handleOnChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Makale :</Form.Label>
                    <Form.Control placeholder="Makaleyi girin"
                        value={article.content} onChange={handleOnChange} name="content" as="textarea" rows={20} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Etiketler :</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <div className="text-center">
                    {error.message && <Alert variant="danger"><p><b>{error.message}</b></p></Alert>}
                    <Button size="lg" variant="primary" type="submit" className="text-center">
                        Kaydet</Button>
                </div>
            </Form>
        </div>
    )
}

export default ArticleForm