import judgement from '../assets/images/judgement.jpg';
import Entrance from '../components/page/entrance/entrance';
import "../global.css";


const Layout = () =>{

    return (
        <>
            <div className='w-full h-full flex items-center justify-center bg-black'>
                <img src={judgement} className="w-full h-full object-cover"/>
                <Entrance/>
            </div>
        </>
    );

}


export default Layout;