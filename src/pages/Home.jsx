import { useDispatch, useSelector } from 'react-redux';
import { AllMenus, Fasting, Featured, Footer, Header, Hero, Popular, Restaurants } from '../components'
import { useEffect, useState } from 'react';
import { getAllMenus } from '../slices/menu.slice';

const Home = () => {
  const [search, setSearch] = useState('');
  const { menuData } = useSelector((state) => state.menu); // Redux state for menus
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMenus(search));
}, [search, dispatch]);

console.log(menuData);
  return (
    <div>
    <Header />
    <Hero search={search} setSearch={setSearch} />
    {search && menuData.length > 0 && (
        <AllMenus menuData={menuData} />
      )}
    <Featured />
    <Restaurants />
    <Popular />
    <Fasting />
    <Footer /> 
    </div>
  )
}

export default Home