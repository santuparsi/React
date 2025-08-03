const Layout = ({ header, footer, children }) => {
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
      </div>
    );
  };
  
  export default Layout;
  