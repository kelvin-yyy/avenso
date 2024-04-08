<template>
	<div class="topTitle justifyBetween">
		<div class="title flexAlignCenter">
			<img src="../../src/assets/logo.png" alt="">
		</div>
		<div class="select flexAlignCenter" v-if="topState">
			<p v-for="(item,index) in selectList" :class="[item.state?'selects noselects':'selects']" :key="index" @click="selectClick(item)">{{item.name}}</p>
		</div>
	<!-- 	<div class="titleRight">
			
		</div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selectList:[
					{name:"investment company",state:true,id:"investmentCompany"},
					{name:"General Company",state:false,id:"otherCompanies"}
				]
			}
			},
		props:{
			topState: {
				type: Boolean,
				default: true,
			}
		},
		mounted() {
			console.log(this.topState)
		},
		methods:{
			selectClick(item){
				this.selectList.forEach((res)=>{
					if(item.name==res.name){
						res.state=true
					}else{
						res.state=false
					}
				})
				this.$emit('investmentType', item.id);
			}
		}
			}
</script>

<style lang="scss" scoped>
	.topTitle{
		width:100%;
		height: 80px;
		.title{
			height: 100%;
			color: #fff;
			margin-left:200px;
			img{
				width:160px;
				height:37px
			}
			.titleLeft{
				font-weight: 900;
				font-size: 35px;
				color: #FFFFFF;
			}
			.titleRight{
				font-weight: 900;
				font-size: 26px;
				color: #FFFFFF;
				margin-left: 8px;
			}
		}
		.select{
			margin-right:200px;
			.selects{
				border-radius: 6px;
				padding: 14px;
				box-sizing: border-box;
				font-weight: 400;
				font-size: 16px;
				color: #FFFFFF;
				margin-right: 40px;
			}
			.noselects{
				background: #FFFFFF;
				border-radius: 6px;
				color: #000;
				background: #FFFFFF;
			}
		}
	}
</style>