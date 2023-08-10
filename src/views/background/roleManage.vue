<template>
	<div>
		<div class="container">
			<div class="handle-box">
				<el-input v-model="query.name" placeholder="姓名" class="handle-input mr10"></el-input>
				<el-input v-model="query.job" placeholder="职务" class="handle-input mr10"></el-input>
				<el-input v-model="query.address" placeholder="科室" class="handle-input mr10"></el-input>
				<el-input v-model="query.role" placeholder="角色" class="handle-input mr10"></el-input>
				<el-button type="primary" @click="handleSearch">搜索</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="job" label="职务"></el-table-column>
				<el-table-column prop="address" label="科室"></el-table-column>
				<el-table-column prop="role" label="角色">
					<template #default="scope">
						{{ scope.row.role === 1? '超级管理员': '非超级管理员' }}
					</template>
				</el-table-column>
				<el-table-column prop="date" label="添加时间"></el-table-column>
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
	</div>
</template>

<script setup lang="ts" name="apartRole">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { fetchData } from '../../api/index';

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
	role: '',
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
