import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;