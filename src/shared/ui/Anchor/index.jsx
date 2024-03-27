import { Link } from 'react-scroll';

const Anchor = ({ to, children, activeClass, offset, onClick }) => {
    return (
        <Link
            to={to}
            activeClass={activeClass}
            spy={true}
            smooth={true}
            offset={offset}
            duration={300}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default Anchor;
