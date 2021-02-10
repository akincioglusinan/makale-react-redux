import React from 'react'
import {Link} from 'react-router-dom'
import Slugify from '../tools/Slugify'

const ArticleListItem=({id, title}) => {
    //const tit=slugify(title)
    return (
        <>
                <Link to={`/article/${id}/${Slugify(title)}`}>{title}</Link>
        </>
    )
}

export default ArticleListItem
