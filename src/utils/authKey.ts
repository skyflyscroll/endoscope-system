import { MenuTree, PerimissionTree } from "@/interface";

// 所有的菜单，key，主键和id不可以修改，text可以修改
const menuKeyData = {
  'dashboard': {
    id: '1',
    text: '首页'
  },
	'systemManage': {
    id: '2',
    text: '系统管理'
  },
  'apartRole': {
		id: '3',
    text: '部门人员'
  },
	'roleManage': {
		id: '4',
    text: '角色管理'
  },
	'authManage': {
		id: '5',
    text: '权限管理'
  },
	'patientManage': {
		id: '6',
    text: '患者管理'
  },
	'patientList': {
		id: '7',
    text: '患者列表'
  },
	'dataStatistics': {
		id: '8',
    text: '数据统计'
  },
	'messageList': {
		id: '9',
    text: '消息'
  },
}

// 菜单模块
const menuTreeData: MenuTree[] = [
	{
			icon: 'Odometer',
			index: '/background/dashboard',
			title: menuKeyData.dashboard.text,
      permiss: menuKeyData.dashboard.id,
	},
	{
			icon: 'Calendar',
			index: '1',
			title: menuKeyData.systemManage.text,
      permiss: menuKeyData.systemManage.id,
			subs: [
					{
							index: '/background/apartRole',
							title: menuKeyData.apartRole.text,
      				permiss: menuKeyData.apartRole.id,
					},
					{
							index: '/background/roleManage',
							title: menuKeyData.roleManage.text,
      				permiss: menuKeyData.roleManage.id,
					},
					{
							index: '/background/authManage',
							title: menuKeyData.authManage.text,
      				permiss: menuKeyData.authManage.id,
					},
			],
	},
	{
		icon: 'Calendar',
		index: '2',
		title: menuKeyData.patientManage.text,
		permiss: menuKeyData.patientManage.id,
		subs: [
				{
						index: '/background/patientList',
						title: menuKeyData.patientList.text,
						permiss: menuKeyData.patientList.id,
				},
				{
						index: '/background/dataStatistics',
						title: menuKeyData.dataStatistics.text,
						permiss: menuKeyData.dataStatistics.id,
				},
		],
	},
	{
			icon: 'DocumentCopy',
			index: '/background/messageList',
			title: menuKeyData.messageList.text,
			permiss: menuKeyData.messageList.id,
	},
];

// 权限模块
const permissionTreeData: PerimissionTree[] = [
	{
		id: menuKeyData.dashboard.id,
		label: menuKeyData.dashboard.text
	},
	{
		id: menuKeyData.systemManage.id,
		label: menuKeyData.systemManage.text,
		children: [
			{
				id: menuKeyData.apartRole.id,
				label: menuKeyData.apartRole.text
			},
			{
				id: menuKeyData.roleManage.id,
				label: menuKeyData.roleManage.text
			},
			{
				id: menuKeyData.authManage.id,
				label: menuKeyData.authManage.text
			}
		]
	},
	{
		id: menuKeyData.patientManage.id,
		label: menuKeyData.patientManage.text,
		children: [
			{
				id: menuKeyData.patientList.id,
				label: menuKeyData.patientList.text
			},
			{
				id: menuKeyData.dataStatistics.id,
				label: menuKeyData.dataStatistics.text
			}
		]
	},
	{
		id: menuKeyData.messageList.id,
		label: menuKeyData.messageList.text
	},
];

export default {
	menuKeyData,
	menuTreeData,
	permissionTreeData
}