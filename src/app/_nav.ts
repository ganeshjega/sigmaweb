import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'SigmaEnv'
  },
  {
    name: 'Add Database',
    url: '/sigmaenv/addDatabase',
    icon: 'icon-drop'
  },
  {
    name: 'Add AppServer',
    url: '/sigmaenv/addAppServer',
    icon: 'icon-pencil'
  },
  {
    name: 'View Databases',
    url: '/sigmaenv/viewDatabases',
    icon: 'icon-drop'
  },
  {
    name: 'View AppServers',
    url: '/sigmaenv/viewAppServers',
    icon: 'icon-pencil'
  },
  {
    name: 'Data Export',
    url: '/sigmaenv/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Data Import',
    url: '/sigmaenv/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Schedulers',
    url: '/sigmaenv/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Server Monitoring'
  },
  {
    name: 'Today Statistics',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'All Transactions',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Error Log',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
