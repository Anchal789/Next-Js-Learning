import Link from "next/link"
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image"
import MainHeaderBackground from "./main-header-background"
import NavLinks from "./nav-links"

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href={"/"}>
                    <Image src={logoImg} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLinks href={"/meals"}>Browse Meals</NavLinks></li>
                        <li><NavLinks href={"/community"}>Foodies Community</NavLinks></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default MainHeader