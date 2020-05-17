import Link from 'next/link';

const Nav = () => (
    <div className="my-nav">
        <img src="/static/logo.jpg" alt="logo" height="80" />
        <Link href="/">
            <a>Home Page</a>
        </Link>

        <Link href="/About">
            <a>About Page</a>
        </Link>

        <Link href="/News">
            <a>News Page</a>
        </Link>
        <style>{`
        a, img {
            padding: 10px
        }
        `}</style>
    </div>
);

export default Nav;