const Container = ({ children, padding = '20px' }) => {
    const style = {
        padding,
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    return <div style={style}>{children}</div>;
};

export default Container;
