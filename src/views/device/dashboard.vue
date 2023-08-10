<template>
	<div class="container">
		<el-card class="content">
			<el-row :gutter="20">
				<el-col :span="16">
					<div class="video">
						<img src="http://152.136.53.99:8000/video_feed" />
					</div>
				</el-col>
				<el-col :span="8">
					<div class="rightContent">
						<p class="title">情况分析</p>
					</div>
				</el-col>
			</el-row>
		</el-card>
		<div class="bottom">
			<el-button @click="complete" type="primary">完成</el-button>
			<el-button style="marginLeft: 20px" @click="quit">退出</el-button>
		</div>
	</div>
</template>

<script setup lang="ts" name="dashboard">
import Schart from 'vue-schart';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';

const router = useRouter();
const name = localStorage.getItem('ms_username');
const completemark = ref(false)
const complete = (() => {
	ElMessageBox.confirm('确定完成吗？', '提示', {
		type: 'warning'
	})
		.then((res) => {
			ElMessage.success('已完成');
			completemark.value = true
		})
		.catch(() => {
		});
})
const quit = (() => {
	if(!completemark.value){
		ElMessageBox.confirm('您还未点击“完成”进行保存，确定退出吗？', '提示', {
			type: 'warning'
		})
			.then(() => {
				ElMessage.success('已退出');
				router.back()
			})
			.catch(() => {});
	} else {
		ElMessage.success('已退出');
		router.back()
	}
})

</script>

<style scoped>
.container{
	height: 100%;
	width: 100%;
	background-color: rgba(2, 10, 29, 1);
}
.content{
	width: 90%;
	height: 94%;
	margin: auto;
	background-color: rgba(2, 10, 29, 1);
	color: white;
}
.video{
	width: 80%;
}
.video img {
	max-width: 100%;
	width: 100%;
}
.el-row {
	margin-bottom: 20px;
}
.rightContent{
	padding: 10px;
	height: 100%;
	border-radius: 6px;
	background-color: rgba(26, 33, 53, 0.8);
}
.rightContent .title{
	font-size: 20px;
	font-weight: bold;
	padding: 10px 6px 20px 6px;
}
.bottom{
	position: absolute;
	right: 4%;
	bottom: 40px;
	margin-right: 20px;
}
.bottom button{
	font-size: 16px;
	padding: 4px 8px;
}
</style>
