import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #333'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <style jsx global>{`

            .flex {
                display:flex;
            }

            .flex--center{
                align-items: center;
                justify-content: center;
            }
        
        `}</style>
    </div>
)

export default Layout;