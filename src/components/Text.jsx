
import { Link } from "react-router-dom";

const MainMenu = () => {

    const menuItems = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'About', link: '/about' },
        { id: 3, title: 'AllCountries', link: '/all-countries' },
        { id: 4, title: 'News', link: '/news' },
        { id: 5, title: 'Services', link: '/services' },
        { id: 6, title: 'Contact', link: '/contact' },
      ];
            
      
    return (
        <nav className="bg-teal-600 py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-[20%]">
                    <Link to='/' className="text-4xl text-white font-roboto font-bold">ApexX</Link>
                </div>
                <div className="w-[80%]">
                    <ul className="flex gap-3 justify-end">
                        {
                            menuItems.map(item =>{
                                return(
                                    <li key={item.id}> <Link to={item.link} className="text-lg font-medium text-white font-roboto hover:text-black">{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainMenu;