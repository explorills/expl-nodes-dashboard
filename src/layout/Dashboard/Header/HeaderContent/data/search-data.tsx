import { ReactElement } from 'react';

// assets
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import ClusterOutlined from '@ant-design/icons/ClusterOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import LikeOutlined from '@ant-design/icons/LikeOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';

export interface SearchChild {
  id: string;
  title: string;
  icon: ReactElement;
  path: string;
  isExternal?: boolean;
}

export interface SearchGroup {
  id: string;
  title: string;
  childs: SearchChild[];
}

export type SearchDataType = SearchGroup[];

export const searchData: SearchDataType = [
  {
    id: 'navigation',
    title: 'Navigation',
    childs: [
      { id: 'nav-dashboard', title: 'Dashboard', icon: <DashboardOutlined />, path: '/dashboard' },
      { id: 'nav-nodes', title: 'Node Management', icon: <ClusterOutlined />, path: '/node-management' },
      { id: 'nav-staking', title: 'Staking', icon: <WalletOutlined />, path: '/staking' },
      { id: 'nav-rewards', title: 'Rewards', icon: <GiftOutlined />, path: '/rewards' },
      { id: 'nav-voting', title: 'Voting', icon: <LikeOutlined />, path: '/voting' },
      { id: 'nav-communication', title: 'Communication', icon: <MessageOutlined />, path: '/communication' }
    ]
  },
  {
    id: 'about-project',
    title: 'About Project',
    childs: [
      { id: 'about-intro', title: 'Introduction', icon: <InfoCircleOutlined />, path: '/about/introduction' },
      { id: 'about-objectives', title: 'Core Objectives', icon: <BookOutlined />, path: '/about/objectives' },
      { id: 'about-roadmap', title: 'Road Map', icon: <RocketOutlined />, path: '/about/roadmap' },
      { id: 'about-team', title: 'Team', icon: <TeamOutlined />, path: '/about/team' },
      { id: 'about-links', title: 'Official Links', icon: <LinkOutlined />, path: '/about/links' },
      { id: 'about-faq', title: 'FAQ', icon: <QuestionCircleOutlined />, path: '/about/faq' }
    ]
  }
];
