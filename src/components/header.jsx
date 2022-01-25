
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, useColorMode, Styled, checkedIcon, uncheckedIcon } from "theme-ui";

const Header = ({ pageTitle, navLinks }) => (
    <header
        style={{
            background: "rebeccapurple",
            marginBottom: "1.45rem",
        }}
    >
        <div
            style={{
                background: "rebeccapurple",
                marginBottom: "1.45rem",
            }}
        >
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "1.45rem 1.0875rem",
                    display: "flex",
                    justifyItems: "space-between",
                    alignItems: "center",
                }}
            >
                <h1 style={{ margin: 0, flex: 1 }}>
                    <Link
                        to="/"
                        style={{
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        {pageTitle}
                    </Link>
                </h1>
                <div>
                    <nav>
                        <ul style={{ display: "flex", flex: 1 }}>
                            {navLinks.map(link => (
                                <li
                                    key={link.name}
                                    style={{
                                        listStyleType: `none`,
                                        padding: `1rem`,
                                    }}
                                >
                                    <Link style={{ color: `white` }} to={link.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)
Header.propTypes = {
    pageTitle: PropTypes.string,
}
Header.defaultProps = {
    pageTitle: ``,
}

export default ({ children, title, ...props }) => {
    const [colorMode, setColorMode] = useColorMode();
    const isDark = colorMode === `dark`;
    const toggleColorMode = e => {
        setColorMode(isDark ? `light` : `dark`);
    };
    /* 
        Hate this implementation, but this was the only way 
        I have found to inject the proper style here 
        NOTE: Now I know that I can change this with
        <Styled /> and passing css={css({background:`primary`})}
    */
    let backgroundColor = null;
    if (isDark) {
        backgroundColor = `#282c35`;
    } else {
        backgroundColor = "#eee";
    }

    return (
        <nav
            css={css({
                position: `fixed`,
                width: `100%`,
                top: 0,
                left: 0,
                zIndex: "1000",
                height: `60px`,
                boxShadow: `1px 2px 10px rgba(0, 0, 0, 0.4)`,
                background: backgroundColor
            })}
        >
            <div
                css={css({
                    maxWidth: `container`,
                    mx: `auto`,
                    marginTop: "17px",
                    px: 2
                })}
            >
                <div
                    css={css({
                        display: `flex`,
                        justifyContent: `space-between`,
                        alignItems: `baseline`
                    })}
                >
                    <div css={css({ display: `flex` })}>
                        <title {...props}>{title}</title>
                    </div>
                    {children}
                    <switch
                        aria-label="Toggle dark mode"
                        css={css({
                            bg: `black`
                        })}
                        checkedIcon={checkedIcon}
                        uncheckedIcon={uncheckedIcon}
                        checked={isDark}
                        onChange={toggleColorMode}
                    />
                </div>
            </div>
        </nav>
    );
};
