// assets
import DollarOutlined from '@ant-design/icons/DollarOutlined';
import PhoneOutlined from '@ant-design/icons/PhoneOutlined';
import HistoryOutlined from '@ant-design/icons/HistoryOutlined';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { DollarOutlined, PhoneOutlined, RocketOutlined, HistoryOutlined, QuestionCircleOutlined };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'group-pages',
  title: 'pages',
  type: 'group',
  children: [
    {
      id: 'maintenance',
      title: 'maintenance',
      type: 'collapse',
      icon: icons.RocketOutlined,
      isDropdown: true,
      children: [
        {
          id: 'error-404',
          title: 'error-404',
          type: 'item',
          url: '/maintenance/404',
          target: true
        },
        {
          id: 'error-500',
          title: 'error-500',
          type: 'item',
          url: '/maintenance/500',
          target: true
        },
        {
          id: 'coming-soon',
          title: 'coming-soon',
          type: 'item',
          url: '/maintenance/coming-soon',
          target: true
        },
        {
          id: 'under-construction',
          title: 'under-construction',
          type: 'item',
          url: '/maintenance/under-construction',
          target: true
        },
        {
          id: 'join-waitlist',
          title: 'join-waitlist',
          type: 'item',
          url: '/maintenance/join-waitlist',
          target: true
        }
      ]
    },
    { id: 'change-log', title: 'change-log', type: 'item', url: '/change-log', icon: icons.HistoryOutlined, target: true },
    {
      id: 'contact-us',
      title: 'contact-us',
      type: 'item',
      url: '/contact-us',
      icon: icons.PhoneOutlined,
      target: true
    },
    {
      id: 'faqs',
      title: 'faqs',
      type: 'item',
      url: '/faqs',
      icon: icons.QuestionCircleOutlined,
      target: true
    },
    {
      id: 'pricing',
      title: 'pricing',
      type: 'item',
      url: '/pricing',
      icon: icons.DollarOutlined
    }
  ]
};

export default pages;
