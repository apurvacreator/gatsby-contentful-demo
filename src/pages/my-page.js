import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout";
import { Button } from "../components/button";

const myPage = () => (
    <Layout>
        <h1>Hi from My page</h1>
        <p>Welcome to my page</p>
        <Link to="/">Go back to the homepage</Link>
        <Button>My first styled component</Button>
    </Layout>
);

export default myPage;