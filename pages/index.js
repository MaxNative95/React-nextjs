import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

const Index = () => (
    <Layout mainTitle="My Home Page  built with next JS and React JS" footer={`Copyright ${new Date().getFullYear()}`} >
        <Head>
            <title>Home Page</title>
        </Head>
        <h2>Hello from Next JS</h2>
        <Link href="/About">
            <a >Go to about</a>
        </Link>

        <p>Lorem ipsum dolor sit amem</p>

        <style jsx>{`
            p {
                color : green;
                font-size: 22px;
            }
        `}</style>
    </Layout>
);

export default Index;