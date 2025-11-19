// assets
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';

// type
import { NavItemType } from 'types/menu';

const icons = {
  intro: InfoCircleOutlined,
  objectives: BookOutlined,
  roadmap: RocketOutlined,
  team: TeamOutlined,
  links: LinkOutlined,
  faq: QuestionCircleOutlined
};

// ==============================|| MENU ITEMS - ABOUT PROJECT ||============================== //

const aboutProject: NavItemType = {
  id: 'about-project',
  title: 'About Project',
  type: 'group',
  children: [
    {
      id: 'introduction',
      title: 'Introduction',
      type: 'item',
      url: '/about/introduction',
      icon: icons.intro,
      breadcrumbs: false
    },
    {
      id: 'objectives',
      title: 'Core Objectives',
      type: 'item',
      url: '/about/objectives',
      icon: icons.objectives,
      breadcrumbs: false
    },
    {
      id: 'roadmap',
      title: 'Road Map',
      type: 'item',
      url: '/about/roadmap',
      icon: icons.roadmap,
      breadcrumbs: false
    },
    {
      id: 'team',
      title: 'Team',
      type: 'item',
      url: '/about/team',
      icon: icons.team,
      breadcrumbs: false
    },
    {
      id: 'links',
      title: 'Official Links',
      type: 'item',
      url: '/about/links',
      icon: icons.links,
      breadcrumbs: false
    },
    {
      id: 'faq',
      title: 'FAQ',
      type: 'item',
      url: '/about/faq',
      icon: icons.faq,
      breadcrumbs: false
    }
  ]
};

export default aboutProject;
