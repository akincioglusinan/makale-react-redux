import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../components/Home'
import Categories from '../components/category/Categories'
import Category from '../components/category/Category'
import Articles from '../components/articles/Articles'
import ArticleDetails from '../components/articles/ArticleDetails'
import Cart from '../components/cart/Cart'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import NotFoundPage from '../components/NotFoundPage'
import AddArticle from '../components/articles/AddArticle'
import EditArticle from '../components/articles/EditArticle'
import Footer from '../components/footer/Footer'


const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/categories" component={Categories} />
                <Route path="/category/:id" component={Category} />
                <Route path="/cart" component={Cart} />
                <Route path="/articles" component={Articles} />
                <Route exact path="/article/:id/:title" component={ArticleDetails} />
                <Route path="/create" component={AddArticle} />
                <Route path="/edit/:id" component={EditArticle} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/register" component={Register} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer></Footer>
        </div>
        </BrowserRouter>
    )
}

export default AppRouter
