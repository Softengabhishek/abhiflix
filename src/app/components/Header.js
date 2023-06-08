import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <b><Link href="/">
                    <h2 style={{color:"#E50914"}}>Abhi-Flix</h2>
                </Link></b>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;