import React from "react";
import AllAuthors from "../components/AllAuthors";
import AuthorForm from "../components/AuthorForm";
import EditAuthor from "../components/EditAuthor";
import { Router } from "@reach/router";


const Main = () => {
    return (
        <>
            <Router>
                <AllAuthors path='/' />
                <AuthorForm path='/authors/new' />
                <EditAuthor path='/authors/:_id/edit' />
            </Router>
        </>
    )
}
export default Main;