// 所有的菜单，key，主键和id不可以修改，text可以修改
const menuKeyData = {
  'main': {
    id: '1',
    text: '首页'
  },
  'table': {

  }
}

// 菜单模块
const menuTreeData: MenuTree[] = [
	{
			icon: 'Odometer',
			index: '/dashboard',
			title: '首页',
			permiss: '1',
	},
	{
			icon: 'Calendar',
			index: '1',
			title: '系统管理',
			permiss: '2',
			subs: [
					{
							index: '/table',
							title: '部门人员',
							permiss: '2',
					},
					{
							index: '/import',
							title: '角色管理',
							permiss: '2',
					},
					{
							index: '/export',
							title: '权限管理',
							permiss: '2',
					},
			],
	},
	{
		icon: 'Calendar',
		index: '2',
		title: '患者管理',
		permiss: '2',
		subs: [
				{
						index: '/table',
						title: '患者列表',
						permiss: '2',
				},
				{
						index: '/import',
						title: '数据统计',
						permiss: '2',
				},
				{
						index: '/export',
						title: '导出Excel',
						permiss: '2',
				},
		],
	},	
	{
			icon: 'DocumentCopy',
			index: '/tabs',
			title: '消息',
			permiss: '3',
	},
	{
			icon: 'Edit',
			index: '3',
			title: '表单相关',
			permiss: '4',
			subs: [
					{
							index: '/form',
							title: '基本表单',
							permiss: '5',
					},
					{
							index: '/upload',
							title: '文件上传',
							permiss: '6',
					},
					{
							index: '4',
							title: '三级菜单',
							permiss: '7',
							subs: [
									{
											index: '/editor',
											title: '富文本编辑器',
											permiss: '8',
									},
									{
											index: '/markdown',
											title: 'markdown编辑器',
											permiss: '9',
									},
							],
					},
			],
	},
	{
			icon: 'PieChart',
			index: '/charts',
			title: 'schart图表',
			permiss: '11',
	},
	{
			icon: 'Warning',
			index: '/permission',
			title: '权限管理',
			permiss: '13',
	},
];

// 权限模块
const permissionTreeData: PerimissionTree[] = [
	{
		id: menuKeyData.main.id,
		label: menuKeyData.main.text
	},
	{
		id: '2',
		label: '基础表格',
		children: [
			{
				id: '15',
				label: '编辑'
			},
			{
				id: '16',
				label: '删除'
			}
		]
	},
	{
		id: '3',
		label: '消息'
	},
	{
		id: '4',
		label: '表单相关',
		children: [
			{
				id: '5',
				label: '基本表单'
			},
			{
				id: '6',
				label: '文件上传'
			},
			{
				id: '7',
				label: '三级菜单',
				children: [
					{
						id: '8',
						label: '富文本编辑器'
					},
					{
						id: '9',
						label: 'markdown编辑器'
					}
				]
			}
		]
	},
	{
		id: '11',
		label: 'schart图表'
	},
	{
		id: '13',
		label: '权限管理'
	}
];

export default {
	menuKeyData,
	menuTreeData,
	permissionTreeData
}