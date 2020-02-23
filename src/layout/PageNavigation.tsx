/**
 * @copyright 2020 Adam (charrondev) Charron
 * @license MIT
 */

import React from "react";

import IconAdd from "@pokemmo/icons/IconAdd.svg";
import IconPokeball from "@pokemmo/icons/IconPokeball.svg";
import IconPokedex from "@pokemmo/icons/IconPokedex.svg";
import IconProjects from "@pokemmo/icons/IconProjects.svg";
import IconQuestion from "@pokemmo/icons/IconQuestion.svg";
import { colorPrimary, CssType } from "@pokemmo/styles/variables";
import { NavLink } from "react-router-dom";

const navListStyles: CssType = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    width: "100%",
};

const navListItemStyles: CssType = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
};

function PageNavigationLink(props: {
    to: string;
    children: React.ReactNode;
    label?: string;
    className?: string;
}) {
    return (
        <li css={navListItemStyles}>
            <NavLink css={[props.className]} to={props.to}>
                {props.children}
            </NavLink>
        </li>
    );
}

export function PageNavigation(props: { className?: string }) {
    return (
        <nav
            css={[
                {
                    background: colorPrimary.string(),
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    padding: "24px 12px",
                },
            ]}
            className={props.className}
        >
            <ul css={navListStyles}>
                <PageNavigationLink label="Home" to="/">
                    <IconPokeball />
                </PageNavigationLink>
                <PageNavigationLink label="Create" to="/">
                    <IconAdd />
                </PageNavigationLink>
                <PageNavigationLink label="Projects" to="/projects">
                    <IconProjects />
                </PageNavigationLink>
                <PageNavigationLink label="Pokemon" to="/pokemon">
                    <IconPokedex />
                </PageNavigationLink>
            </ul>
            <div css={{ flex: 1 }}></div>
            <ul css={navListStyles}>
                <PageNavigationLink label="Help" to="/help">
                    <IconQuestion />
                </PageNavigationLink>
            </ul>
        </nav>
    );
}

function InnerNav() {
    return <nav>Hello Nav</nav>;
    // return (
    //     <NavigationProvider>
    //         <LayoutManagerWithViewController
    //             // showContextualNavigation={true}
    //             // experimental_flyoutOnHover={true}
    //             globalNavigation={() => (
    //                 <GlobalNav
    //                     primaryItems={[
    //                         {
    //                             id: "projects",
    //                             icon: () => (
    //                                 <FolderIcon
    //                                     label="Projects"
    //                                     size="medium"
    //                                 />
    //                             ),
    //                             tooltip: "Projects",
    //                             onClick: () => {
    //                                 console.log("on project");
    //                             },
    //                         },
    //                         {
    //                             id: "pokemon",
    //                             icon: () => (
    //                                 <EditorEmojiIcon
    //                                     label="Pokemon"
    //                                     size="large"
    //                                 />
    //                             ),
    //                             tooltip: "Pokemon",
    //                             label: "Pokemon",
    //                         },
    //                     ]}
    //                     secondaryItems={[]}
    //                 />
    //             )}
    //         >
    //             <div></div>
    //         </LayoutManagerWithViewController>
    //     </NavigationProvider>
    // );
}
