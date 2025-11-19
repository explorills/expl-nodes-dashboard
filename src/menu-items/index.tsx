// project imports
import { dashboard, nodeManagement, liquidityMining, explSwap, staking, rewards, voting, communication } from './dashboard';
import aboutProject from './about';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, nodeManagement, liquidityMining, explSwap, staking, rewards, voting, communication, aboutProject]
};

export default menuItems;
