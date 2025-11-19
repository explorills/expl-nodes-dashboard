// assets
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import ClusterOutlined from '@ant-design/icons/ClusterOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import LikeOutlined from '@ant-design/icons/LikeOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';

// type
import { NavItemType } from 'types/menu';

const icons = {
  dashboard: DashboardOutlined,
  nodes: ClusterOutlined,
  staking: WalletOutlined,
  rewards: GiftOutlined,
  voting: LikeOutlined,
  communication: MessageOutlined
};

// ==============================|| MENU ITEMS - NAVIGATION ||============================== //

const dashboard: NavItemType = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'item',
  url: '/',
  icon: icons.dashboard,
  breadcrumbs: false
};

const nodeManagement: NavItemType = {
  id: 'node-management',
  title: 'Node Management',
  type: 'item',
  url: '/node-management',
  icon: icons.nodes,
  breadcrumbs: false
};

const staking: NavItemType = {
  id: 'staking',
  title: 'Staking',
  type: 'item',
  url: '/staking',
  icon: icons.staking,
  breadcrumbs: false
};

const rewards: NavItemType = {
  id: 'rewards',
  title: 'Rewards',
  type: 'item',
  url: '/rewards',
  icon: icons.rewards,
  breadcrumbs: false
};

const voting: NavItemType = {
  id: 'voting',
  title: 'Voting',
  type: 'item',
  url: '/voting',
  icon: icons.voting,
  breadcrumbs: false
};

const communication: NavItemType = {
  id: 'communication',
  title: 'Communication',
  type: 'item',
  url: '/communication',
  icon: icons.communication,
  breadcrumbs: false
};

export { dashboard, nodeManagement, staking, rewards, voting, communication };


