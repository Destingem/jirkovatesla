import { Title } from "@mantine/core";
import Link from "next/link";

export default function SubTitle({label, children, device, href}){

    return(
        <Link href={href}>
         <Title  weight={600} order={2} size={device == "m" ? "1rem" :  "1.25rem"} style={{color: "#CACACA"}}>{label}</Title>
             <Title weight={600} order={2} size={device == "m" ? "2.3rem" :  "3.5rem"} style={{}}>{children}</Title>
        </Link>
    )
}