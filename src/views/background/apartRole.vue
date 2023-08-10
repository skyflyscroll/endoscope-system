<template>
	<div>
		<div class="container">
			<div class="handle-box">
				<el-input v-model="query.name" placeholder="姓名" class="handle-input mr10"></el-input>
				<el-input v-model="query.job" placeholder="职务" class="handle-input mr10"></el-input>
				<el-input v-model="query.address" placeholder="科室" class="handle-input mr10"></el-input>
				<el-button type="primary" @click="handleSearch">搜索</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="job" label="职务"></el-table-column>
				<el-table-column prop="address" label="科室"></el-table-column>
				<el-table-column prop="patient" label="今日接诊"></el-table-column>
				<el-table-column prop="wait" label="今日待接诊"></el-table-column>
				<el-table-column label="状态" align="center">
					<template #default="scope">
						<el-tag
							:type="scope.row.state === '休息中' ? 'warn' : scope.row.state === '问诊中' ? 'danger' : ''"
						>
							{{ scope.row.state }}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="date" label="创建时间"></el-table-column>
				<el-table-column label="操作" width="220" align="center">
					<template #default="scope">
						<el-button text @click="handleLook(scope.$index, scope.row)" v-permiss="15">
							查看
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					layout="total, prev, pager, next"
					:current-page="query.pageIndex"
					:page-size="query.pageSize"
					:total="pageTotal"
					@current-change="handlePageChange"
				></el-pagination>
			</div>
		</div>

		<!-- 弹出框 -->
		<el-dialog title="人员信息" v-model="detailVisible" width="30%">
			<div class="roleContent">
				<img class="rolePhoto" :src="idx === 0 ? a1 : idx === 1 ? a2 : idx === 2 ? a3 : a4"/>
				<div>
					<div class="roleItem">
						<p>姓名：{{ form.avar }}</p>
						<div>{{ form.name }}</div>
					</div>
					<div class="roleItem">
						<p>职务：</p>
						<div>{{ form.job }}</div>
					</div>
					<div class="roleItem">
						<p>科室：</p>
						<div>{{ form.address }}</div>
					</div>
				</div>
			</div>
			
			<div class="roleItem" style="marginTop:20px;">
				<p>擅长：</p>
				<div>{{ form.desc }}</div>
			</div>
			<template #footer>
				<span class="dialog-footer">
					<el-button type="primary" @click="close">关闭</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="apartRole">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { fetchData } from '../../api/index';
import a1 from '../../assets/img/1.png';
import a2 from '../../assets/img/2.png';
import a3 from '../../assets/img/3.png';
import a4 from '../../assets/img/4.png';

interface TableItem {
	id: number;
	name: string;
	money: string;
	state: string;
	date: string;
	address: string;
	[key: string]: any;
}

const query = reactive({
	address: '',
	name: '',
	job: '',
	pageIndex: 1,
	pageSize: 10
});
const tableData = ref<TableItem[]>([]);
const pageTotal = ref(0);

// 获取表格数据
const getData = () => {
	fetchData().then(res => {
		tableData.value = res.data.list;
		pageTotal.value = res.data.pageTotal || 50;
	});
};
getData();

// 查询操作
const handleSearch = () => {
	ElMessage.warning('待完善');
};

// 分页导航
const handlePageChange = (val: number) => {
	query.pageIndex = val;
	getData();
};

const detailVisible = ref(false);

let form = reactive({
	name: '',
	address: '',
	job: '',
	desc: '',
	avar: ''
});

const idx = ref(-1);
const handleLook = (index: number, row: any) => {
	idx.value = index;
	const data = tableData.value[index]
	form.name = data.name;
	form.address = data.address;
	form.job = data.job;
	form.desc = data.desc;
	detailVisible.value = true;
};

const close = () => {
	detailVisible.value = false;
};

</script>

<style scoped>
.handle-box {
	margin-bottom: 20px;
}

.handle-select {
	width: 120px;
}

.handle-input {
	width: 160px;
}
.table {
	width: 100%;
	font-size: 14px;
}
.red {
	color: #F56C6C;
}
.mr10 {
	margin-right: 10px;
}
.table-td-thumb {
	display: block;
	margin: auto;
	width: 40px;
	height: 40px;
}

.rolePhoto {
	height: 140px;
	width: 100px;
	margin-left: 10px;
}

.roleContent {
	display: flex;
	flex-direction: row;
}
.roleItem{
	display: flex;
	flex-direction: row;
	padding: 0 14px 10px;
	font-size: 16px;
}

.roleItem p{
	margin-right: 4px;
	min-width: 50px;
}
</style>
