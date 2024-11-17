import './Header.css';

const Header = (props) => {
    const { info } = props;
    const { logo, input, name } = info;

    return (
        <header>
            <div className={logo.className}>{logo.text}</div>
            <input type={input.type} className={input.className} placeholder={input.placeholder} name={input.className} />
            <div className={name.className}>{name.text}</div>
        </header>
    );
};

export default Header;