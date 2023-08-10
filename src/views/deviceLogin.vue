<template>
	<div class="login-wrap">
		<div class="ms-login">
			<div class="ms-title">选择患者信息</div>
			<div class="ms-center">
					<el-select v-model="patientMessage" style="width:100%" @change="handleChange">
						<template v-for="item in patientList">
							<el-option :label="item.label" :value="item.value"></el-option>
						</template>
					</el-select>
				<div class="login-btn">
					<el-button type="primary" @click="onConfirm">确认</el-button>
				</div>
			</div>
		</div>
		<canvas id="myCanvas" width="200" height="200"/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { particlesDestore, particlesRun } from '../utils/particlesRun';

const patientList = [{
	label: '张山（1551890）',
	value: '1551890'
},
{
	label: '李四（1551891）',
	value: '1551891'
},
{
	label: '王五（1551892）',
	value: '1551892'
},
{
	label: '赵六（1551893）',
	value: '1551893',
}]

const router = useRouter();

const patientMessage = ref<string>('');

onMounted(() => {
	// 背景动画
	particlesRun()
});

onUnmounted(() => {
	// 关闭背景动画
	particlesDestore()
})

const handleChange = ((e: string) => {
	patientMessage.value = e
}) 

const onConfirm = (() => {
	router.push('/device/dashboard');
})

</script>

<style scoped>
.login-wrap {
	position: relative;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(0deg, rgb(59, 102, 149),rgb(100, 146, 195));
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.ms-title {
	width: 100%;
	line-height: 50px;
	text-align: center;
	font-size: 20px;
	color: #fff;
	border-bottom: 1px solid #ddd;
}
.ms-login {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 350px;
	margin: -190px 0 0 -175px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.3);
	overflow: hidden;
}
.ms-center{
	margin: 30px;
}
.login-btn {
	margin: 30px 0 10px;
	text-align: center;
}
.login-btn button {
	width: 100%;
	height: 36px;
	margin-bottom: 10px;
}
</style>
