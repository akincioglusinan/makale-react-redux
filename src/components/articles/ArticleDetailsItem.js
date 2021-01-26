import React from 'react'
import { Link } from 'react-router-dom'

const ArticleDetailsItem = ({ id, title, content, createdDateTime }) => {
    //console.log(id,content)
    return (
        <div>
            <p>Article id: {id}</p>
            <p className="text-right">Tarih: {createdDateTime}</p>
            <h2 className="text-center"> {title}</h2>
            <div>
                <br/>
            <p> {content}</p>
            </div>
            <div>
                <Link to={`/edit/${id}`}>Düzenle</Link> -
                <Link to={`/remove/${id}`}>Sil</Link>
            </div>
            
        </div>
    )
}

export default ArticleDetailsItem
