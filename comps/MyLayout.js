import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #333'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
    </div>
)

export default Layout;