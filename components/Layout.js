import Nav from './Nav';

const Layout = ({children, mainTitle, footer}) => (
    <div>
        <Nav />
        <h1>{mainTitle}</h1>
        <hr />
        {children}
        <hr />
        <h4>{footer}</h4>
    </div>
);

export default Layout;