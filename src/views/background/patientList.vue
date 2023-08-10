<template>
	<div>
		<div class="container">
			<div class="handle-box">
				<el-input v-model="query.name" placeholder="姓名" class="handle-input mr10"></el-input>
				<el-input v-model="query.address" placeholder="科室" class="handle-input mr10"></el-input>
				<el-input v-model="query.start" placeholder="创建开始时间" class="handle-input mr10"></el-input>
				<el-input v-model="query.end" placeholder="创建结束时间" class="handle-input mr10"></el-input>
				<el-input v-model="query.start" placeholder="预约开始时间" class="handle-input mr10"></el-input>
				<el-input v-model="query.end" placeholder="预约结束时间" class="handle-input mr10"></el-input>
				<el-button type="primary" @click="handleSearch">搜索</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="address" label="科室"></el-table-column>
				<el-table-column prop="number" label="病例号"></el-table-column>
				<el-table-column label="状态" align="center">
					<template #default="scope">
						<el-tag
							:type="scope.row.state === '已问诊' ? 'success' : scope.row.state === '问诊中' ? 'danger' : ''"
						>
							{{ scope.row.state }}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="date" label="创建时间"></el-table-column>
				<el-table-column prop="pdate" label="预约时间"></el-table-column>
				<el-table-column label="操作" width="220" align="center">
					<template #default="scope">
						<el-button text @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
							编辑
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
		<el-dialog title="患者信息" v-model="detailVisible" width="30%">
			<el-form label-width="70px">
				<el-form-item label="姓名" :aria-disabled="true">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="病例号" :aria-disabled="true">
					<el-input v-model="form.number"></el-input>
				</el-form-item>
				<el-form-item label="科室" :aria-disabled="true">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
				<el-form-item label="诊断" :aria-disabled="true">
					<el-input v-model="form.desc"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button type="primary" @click="close">关闭</el-button>
					<el-button type="primary" @click="saveEdit">确 定</el-button>
				</span>

			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="apartRole">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { fetchDataPatient } from '../../api/index';

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
	start: '',
	end: '',
	pageIndex: 1,
	pageSize: 10
});
const tableData = ref<TableItem[]>([]);
const pageTotal = ref(0);

// 获取表格数据
const getData = () => {
	fetchDataPatient().then(res => {
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
	number: ''
});

const idx = ref(-1);
const handleEdit = (index: number, row: any) => {
	idx.value = index;
	const data = tableData.value[index]
	form.name = data.name;
	form.address = data.address;
	form.job = data.job;
	form.desc = data.desc;
	form.number = data.number;
	detailVisible.value = true;
};

const close = () => {
	detailVisible.value = false;
};

const saveEdit = () => {
	detailVisible.value = false;
	ElMessage.success(`修改成功`);
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
