<template>
	<div class="login-wrap">
		<div class="ms-login">
			<div class="ms-title">切换系统</div>
			<div class="ms-center">
					<el-select v-model="systemMessage" style="width:100%" @change="handleChange">
						<el-option label="设备信息系统" value="deviceSystem"></el-option>
						<el-option label="后台管理系统" value="backgroundSystem"></el-option>
					</el-select>
				<div class="login-btn">
					<el-button type="primary" @click="goNext">前往</el-button>
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

const router = useRouter();

const systemMessage = ref<string>('deviceSystem');

onMounted(() => {
	// 背景动画
	particlesRun()
});

onUnmounted(() => {
	// 关闭背景动画
	particlesDestore()
})

const handleChange = ((e: string) => {
	systemMessage.value = e
}) 

const goNext = () => {
	if(systemMessage.value === 'deviceSystem'){
  	router.push('/deviceLogin');
	}
	if(systemMessage.value === 'backgroundSystem'){
  	router.push('/login');
	}
}

</script>

<style scoped>
.login-wrap {
	position: relative;
	width: 100%;
	height: 100%;
	background-image: url(../assets/img/login-bg.png);
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
