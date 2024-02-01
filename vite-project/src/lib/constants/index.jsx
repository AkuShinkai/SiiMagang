import {
	HiOutlineViewGrid,
	HiClipboardCheck,
	HiOutlineUsers,
	HiOutlineQuestionMarkCircle,
    HiDesktopComputer,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'project',
		label: 'Projects',
		path: '/project',
		icon: <HiDesktopComputer />
	},
	{
		key: 'logbook',
		label: 'LogBooks',
		path: '/logbooks',
		icon: <HiClipboardCheck />
	},
	{
		key: 'presence',
		label: 'Presence',
		path: '/presence',
		icon: <HiOutlineUsers />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
