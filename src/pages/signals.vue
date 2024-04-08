<template>
	<div class="signals flexjustifyCenter">
		<div class="signalss">
			<div class="signalsTitle">Recent News & Activity</div>
			<div class="signalsTitles">Number of Articles </div>
			<div  class="signalsNumber">{{this.ArticlesNumber}}</div>
			<div class="signalsList" v-for="(v,i) in list" :key="i">
				<div class="signalsLists flexAlignCenter">
					<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8982557cb21dc2178ddd814f340e028f6a4f4383bf728029d692521c2b3ba311" alt="" />
					<div class="signalsListTitle">{{v.contentName}} •{{v.time}}</div>
				</div>
				<div class="signalsContent" v-if="v.name=='News'">{{v.contentName}} — <a :href="v.newsUrl"  target="_blank" style="font-weight: bold;">{{v.content}}</a></div>
				<div class="signalsContent" v-else>
					<div class="signalsContents">{{v.contentName}} / {{v.content}}</div>
				</div>
			</div>
		<!-- 	<div class="signalsList">
				<div class="signalsLists flexAlignCenter">
					<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8982557cb21dc2178ddd814f340e028f6a4f4383bf728029d692521c2b3ba311" alt="" />
					<div class="signalsListTitle">News • Mar 12, 2024</div>
				</div>
				<div class="signalsContent">
					<div class="signalsContents">raised $675,000,000 / Series B from Align Ventures and 20 other investors</div>
					<div>Discover more funding rounds</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default: [],
			}
		},
		data() {
			return {
				ArticlesNumber:0
			}
		},
		watch:{
			list(){
				this.list.forEach((res)=>{
					if(res.name=="News"){
						this.ArticlesNumber=this.ArticlesNumber+1
					}
				})
			}
		},
		mounted(){
		}
	}
</script>

<style lang="scss" scoped>
	.signals{
		width:100%;
		min-height: 200px;
		max-height: 1200px;
		background: #F3F9FF;
		padding-bottom: 160px;
		.signalss{
			width: 68%;
			max-height: 1392px;
			background: #FFFFFF;
			border-radius: 16px;
			margin-top: -280px;
			padding: 30px;
			box-sizing: border-box;
			.signalsTitle{
				font-weight: bold;
				font-size: 44px;
				color: #000000;
			}
			.signalsTitles{
				font-weight: 400;
				font-size: 16px;
				color: rgba(0,0,0,0.5);
				margin-top: 30px;
			}
			.signalsNumber{
				font-weight: 500;
				font-size: 24px;
				color: #000000;
				margin-top: 10px;
				margin-bottom: 9px;
			}
			.signalsList{
				width: 100%;
				min-height: 80px;
				margin-top: 24px;
				.signalsLists{
					img{
						width: 20px;
						height: 18px;
					}
					.signalsListTitle{
						font-weight: 500;
						font-size: 16px;
						color: rgba(0,0,0,0.5);
						margin-left: 10px;
					}
				}
				.signalsContent{
					font-weight: 400;
					font-size: 16px;
					color: #000000;
					margin-top: 15px;
					a{
						text-decoration: none;
						font-size: 16px;
						color: #000000;
					}
					.signalsContents{
						font-weight: 500;
						font-size: 16px;
						color: #000000;
					}
					div{
						font-weight: 500;
						font-size: 16px;
						color: #0073FF;
						margin-top: 14px;
					}
				}
			}
		}
	}
</style>