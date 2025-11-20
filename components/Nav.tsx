"use client"

import Link from "next/link";
import styled from "styled-components";
import {usePathname} from "next/navigation";

interface StyledLinkProps{
    current: boolean;
}

const StyledLink=styled(Link)<StyledLinkProps>`
    background-color:${(props)=>props.current?"burlywood":"lightpink"};
    margin: 2% 5%;
`;

const links=[
    {href:"/", value:"Home"},
    {href:"/about", value:"About"},
    {href:"/contact", value:"Page"},
    {href:"/faq", value:"Page"}
]

export default function Nav(){

    const currentPath=usePathname();

    return(
        <>
            {
                links.map((i)=>
                    <StyledLink
                        key={i.href}
                        href={i.href}
                        current={currentPath===i.href}
                    >
                        {i.value}
                    </StyledLink>
                )
            }
        </>
    );
}