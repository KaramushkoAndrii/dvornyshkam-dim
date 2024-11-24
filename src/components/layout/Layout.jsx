
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import DonateSection from "../donateSection/DonateSection";

const Layout = () => {
    return (
        <>
            <Header />

            <main>
                {<Outlet />}
            </main>

            <DonateSection />
            <Footer />
        </>
    )
}

export default Layout;