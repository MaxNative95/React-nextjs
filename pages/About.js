import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
    <Layout mainTitle="My About Page" footer={`Copyright ${new Date().getFullYear()}`} >
        <h2>About page</h2>
        <Link href="/">
            <a>Go back to Home</a>
        </Link>
    </Layout>
);

export default About;