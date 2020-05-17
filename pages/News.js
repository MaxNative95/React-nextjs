import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Router from 'next/router';

const News = ({ news }) => {

    //const [searchQuery, setSearchQuery] = useState('react');
    const [value, setValue] = useState({
        text: 'react',
        coolMsg: ''
    });

    const { text, coolMsg } = value;

    const handleChange = name => e => {
        // setSearchQuery(e.target.value)
        setValue({ ...value, [name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        Router.push(`/news/?searchTerm=${text}`)
    }

    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange('text')} />
            <input type="text" placeholder="type something..." onChange={handleChange('coolMsg')} value={coolMsg} />
            <button>Search</button>
        </form>
    )

    return (
        <Layout>
            <h2> List of News</h2>
            <hr/>
            {coolMsg}
            <hr />
            {searchForm()}
            <hr />
            {news.map((item, i) => (
                <p key={i}>
                    <a href={item.url} target="_blank">{item.title}</a>
                </p>
            ))}
        </Layout>
    )
};

News.getInitialProps = async ({ query }) => {
    let news;
    try {
        const res = await fetch(`https:/hn.algolia.com/api/v1/search?query=${query.searchTerm}`);
        news = await res.json();
        console.log(news.hits);
    } catch (error) {
        console.log(`There was an error ${error}`)
        news = [];
    }
    return {
        news: news.hits
    };
};

export default News;