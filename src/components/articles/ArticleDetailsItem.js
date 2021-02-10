import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ArticleDetailsItem = ( props) => {

    const handleOnClick=(e)=>{
        e.preventDefault();
        props.onClick()
    }
    //console.log(id,content)
    return (
        <div>
            <p>Article id: {props.id}</p>
            <p className="text-right">Tarih: {props.createdDateTime}</p>
            <h2 className="text-center"> {props.title}</h2>
            <div>
                <br/>
            <p> {props.content}</p>
            </div>
            <div>
                <Link to={`/edit/${props.id}`} className="btn btn-primary">Düzenle</Link> 
                <Link to={`/remove/${props.id}`} className="btn btn-danger">Sil</Link>
            </div>
            <div className="text-right">
                <Button variant="danger" onClick={handleOnClick}>Sepete Ekle</Button>
            </div>
            
        </div>
    )
}

export default ArticleDetailsItem
