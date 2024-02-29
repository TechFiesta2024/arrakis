'use client';

import useMediaQuery from "@/hooks/useMediaQuery";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
    // const isDesktop = useMediaQuery("(min-width:700px)");
    // return <>{isDesktop ? <DesktopNavbar /> : <MobileNavbar />}</>;
    return <DesktopNavbar />
};

export default Navbar;
