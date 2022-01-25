//Importend Steps: "Layout"

import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navBar,
    navLinkItem,
    navLinkText,
    toggle
} from './layout.module.css'
import { Box, Flex, useColorMode, Button, icon, jsx } from "theme-ui"


const Layout = ({ pageTitle, pageHeading, children }) => {
    
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = () => {
    setColorMode(isDark ? `light` : `dark`)
    }

    return (

        <Box as="content" variant="content">
            <div className={container}>
                <title>{pageTitle}</title>
                <navBar className={navBar}>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                # INTRO Page
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/doc" className={navLinkText}>
                                Documentation
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/dld" className={navLinkText}>
                                Downloads
                            </Link>
                        </li>
                        <li className={navLinkItem}>

                            <Link to="/log" className={navLinkText} activ>
                                Protocol
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Button className={toggle}>
                                <icon
                                    sx={{ variant: `button.faMoon`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
                                    onClick={toggleColorMode}
                                    type="button"
                                    aria-label="Toggle dark mode"
                                >
                                    {isDark ? `Light` : `Dark`}
                                </icon>
                            </Button>
                        </li>
                    </ul>
                </navBar>
                <main>
                    <h1 className={heading}>{pageHeading}</h1>
                    {children}
                </main>
            </div>
        </Box>
    )
}

export default Layout

/*
<div div className={headerStyle.toggleTheme}>
icon=={faMoon}
onClick={() =>
theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
}
</div>*/