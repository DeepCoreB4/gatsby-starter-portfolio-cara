import React from "react";
import { css, Styled } from "theme-ui";
import Header from "./header";
import NavMenu from "./navMenu";
export default ({ children, ...props }) => {
    return (
        <Styled.root css={css({ zIndex: `100`, opacity: `1` })}>
            <NavMenu {...props} />
            <Header {...props} />
            <div>
                <div
                    css={css({
                        maxWidth: `container`,
                        mx: `auto`,
                        px: 3,
                    })}
                >
                    {children}
                </div>
            </div>
        </Styled.root>
    );
};
