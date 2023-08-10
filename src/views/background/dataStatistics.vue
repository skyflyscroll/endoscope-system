<template>
	<div class="container">
		<!-- <div class="schart-box">
			<div class="content-title">柱状图</div>
			<schart class="schart" canvasId="bar" :options="options1"></schart>
		</div> -->
		<div class="schart-box">
			<!-- <div class="content-title">趋势图</div> -->
			<schart class="schart" canvasId="line" :options="options2"></schart>
		</div>
		<div class="schart-box">
			<!-- <div class="content-title">饼图</div> -->
			<schart class="schart" canvasId="pie" :options="options3"></schart>
		</div>
		<!-- <div class="schart-box">
			<div class="content-title">环形图</div>
			<schart class="schart" canvasId="ring" :options="options4"></schart>
		</div> -->
	</div>
</template>

<script setup lang="ts" name="basecharts">
import Schart from 'vue-schart';

const options1 = {
	type: 'bar',
	title: {
		text: '最近一周各品类销售图'
	},
	bgColor: '#fbfbfb',
	labels: ['周一', '周二', '周三', '周四', '周五'],
	datasets: [
		{
			label: '家电',
			fillColor: 'rgba(241, 49, 74, 0.5)',
			data: [234, 278, 270, 190, 230]
		},
		{
			label: '百货',
			data: [164, 178, 190, 135, 160]
		},
		{
			label: '食品',
			data: [144, 198, 150, 235, 120]
		}
	]
};
const options2 = {
	type: 'line',
	title: {
		text: '预约检查人数'
	},
	bgColor: '#fbfbfb',
	labels: ['6月', '7月', '8月', '9月', '10月'],
	datasets: [
		{
			label: '一级',
			data: [23, 27, 20, 19, 20]
		},
		{
			label: '二级',
			data: [16, 17, 10, 13, 10]
		},
		{
			label: '三级',
			data: [4, 8, 2, 5, 1]
		},
    {
			label: '其他',
			data: [1, 8, 2, 5, 1]
		}
	]
};
const options3 = {
	type: 'pie',
	title: {
		text: '预约检查问题分布'
	},
	legend: {
		position: 'left'
	},
	bgColor: '#fbfbfb',
	labels: ['一级', '二级', '三级', '其他'],
	datasets: [
		{
			data: [34, 8, 10, 25]
		}
	]
};
const options4 = {
	type: 'ring',
	title: {
		text: '环形三等分'
	},
	showValue: false,
	legend: {
		position: 'bottom',
		bottom: 40
	},
	bgColor: '#fbfbfb',
	labels: ['vue', 'react', 'angular'],
	datasets: [
		{
			data: [500, 500, 500]
		}
	]
};
</script>

<style scoped>
.schart-box {
	display: inline-block;
	margin: 20px;
}
.schart {
	width: 600px;
	height: 400px;
}
.content-title {
	clear: both;
	font-weight: 400;
	line-height: 50px;
	margin: 10px 0;
	font-size: 22px;
	color: #1f2f3d;
}
</style>
