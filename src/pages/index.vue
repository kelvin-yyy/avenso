<template>
	<div class="homePage">
		<div class="top">
			<topTitle @investmentType="investmentType" :topState="topState"></topTitle>
			<div class="topSearch flexDirectionCenter">
				<div class="topSearchTitle"> AI powered Venture Capital Sourcing Platform</div>
				<div class="topSearchTitles">Learn about AI. Curated news and product launches, daily. Deep dives on
					business use cases, weekly.</div>
				<div class="topSearchs flexAlignCenter">
					<input type="text" v-model="companyName" class="topSearchsinput" placeholder="Search posts…" />
					<div class="topSearchsButton flexcenter" @click="SearchClick()">Search</div>
				</div>
			<!-- 	<div class="label flexAlignCenter">
					<div class="labels flexAlignCenter"><span>Quick Bites</span>
					</div>
					<div class="labels flexAlignCenter"><span>Quick Bites</span>
					</div>
				</div> -->
			</div>
		</div>
		<div class="allcontent flexcenter">
			<div class="content flex">
				<div class="contents" v-for="(item,index) in list" @click="figureClick(item)">
					<img :src="item.Avatar" alt="" class="contentsimg">
					<div class="DetailedContent">
						<div class="DetailedContents">{{item.name}}</div>
						<div class="plus">{{item.introduction}}</div>
						<div class="DetailedContentTime">
							{{item.creatDate}}
						</div>
						<div class="labels flexAlignCenter"><img src="../assets/quick.png"
								alt="" /><span>{{item.type}}</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="paginations" v-if="hideValue">
			<div class="pagination flexcenter">
				<div style="margin-right: 32px;" @click="pages=1">First</div>
				<el-pagination class="el-pagination" :page-size="pageSize" background prev-text="< Back"
					next-text="Next >" :pager-count="pagerCount" layout="prev, pager, next" :total="total"
					v-model:current-page="pages"/>
				<div style="margin-left: 32px;" @click="pages=pagerCount">Last</div>
			</div>
		</div>
		<div style="padding-top:140px;background-color: #ebedf0;">
			<bottom></bottom>
		</div>
	</div>
</template>

<script>
	import topTitle from "../components/topTitle.vue"
	import bottom from "../components/bottom.vue"
	import {
		apiRead
	} from "../api/user.js"
	export default {
		components: {
			topTitle,
			bottom
		},

		data() {
			return {
				pageSize: 12,
				pagerCount: "",
				total: "",
				list: [],
				hideValue: false,
				companyName:"",
				pages:1,
				investmentTypes:"investmentCompany",
				topState:true
			}
		},
		mounted() {
			this.topState=true
			this.apiReads()
		},
		watch:{
			pages(){
				this.apiReads()
			}
		},
		methods: {
			SearchClick(){
				if(this.pages==1){
					this.apiReads()
				}else{
					this.pages=1
				}
			},
			apiReads(){
				apiRead({
					name:this.companyName,
					pages:this.pages,
					investmentType:this.investmentTypes,
					page_size:this.pageSize
				}).then((res) => {
					this.list = res.data.data
					this.pageSize = res.data.page_size
					this.pagerCount = res.data.pager_count
					this.total = res.data.total
					if (this.pagerCount <= 1) {
						this.hideValue = false
					} else {
						this.hideValue = true
					}
				})
			},
			figureClick(item) {
				this.topState=false
				this.$router.push({
					path: '/figure',
					query: {
						id: item.id,
					}
				})
			},
			investmentType(value){
				this.investmentTypes=value
				this.apiReads()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.homePage {
		width: 100%;
		height: 100%;

		.top {
			width: 100%;
			height: 800px;
			background-image: url(../assets/indexback.png);
			background-size: 100% 100%;

			.topSearch {
				margin-top: 110px;

				.topSearchTitle {
					font-weight: 900;
					font-size: 64px;
					color: #FFFFFF;
				}

				.topSearchTitles {
					width: 1066px;
					height: 66px;
					font-weight: 500;
					font-size: 30px;
					color: #FFFFFF;
					text-align: center;
					margin: 30px 0 60px 0;
				}

				.topSearchs {
					width: 600px;
					height: 60px;
					border-radius: 6px;
					border: 2px solid #FFFFFF;
					padding: 4px;
					padding-left: 25px;
					box-sizing: border-box;

					.topSearchsinput {
						width: 500px;
						height: 48px;
						font-size: 20px;
						outline: none;
						border: none;
						/* 如果还需要移除边框的话 */
						box-shadow: none;
						/* 移除可能的阴影效果 */
						color: #fff;
						background-color: transparent;
					}

					.topSearchsButton {
						width: 100px;
						height: 52px;
						background: #FFFFFF;
						border-radius: 6px;
					}
				}

				.label {
					width: 616px;
					margin-top: 20px;

					.labels {
						padding: 4px;
						box-sizing: border-box;
						height: 24px;
						border-radius: 4px;
						border: 1px solid rgba(255, 255, 255, 0.5);
						margin-left: 7px;

						img {
							width: 14px;
							height: 14px;
						}

						span {
							font-weight: 400;
							font-size: 12px;
							color: #FFFFFF;
							margin-left: 3px;
						}
					}
				}
			}
		}

		.allcontent {
			width: 100%;
			max-height: 1804px;
			background-color: #ebedf0;

			.content {
				width: 70%;
				max-height: 1824px;
				min-height: 420px;
				margin-top: -160px;
				flex-wrap: wrap;
				margin-left: 120px;
				overflow: hidden;

				.contents {
					width: 384px;
					height: 413px;
					background: #FFFFFF;
					box-shadow: 0px 8 28px 3px rgba(0, 0, 0, 0.04);
					border-radius: 16px;
					margin-left: 24px;
					margin-bottom: 24px;

					.contentsimg {
						width: 100%;
						height: 200px;
						object-fit: cover;
						border-radius: 16px 16px 0 0;
					}

					.DetailedContent {
						padding: 24px 0 0 24px;
						box-sizing: border-box;

						.DetailedContents {
							font-weight: bold;
							font-size: 20px;
							color: #000000;
						}

						.DetailedContentTime {
							font-weight: 400;
							font-size: 14px;
							color: rgba(0, 0, 0, 0.5);
							margin: 24px 0 26px 0;
							line-height: 6px;
						}

						.plus {
							font-weight: 400;
							font-size: 14px;
							color: #000000;
							margin-top: 6px;
							overflow: hidden;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
							text-overflow: ellipsis;
							white-space: normal;
							height: 60px;
							/* 3行 * 1.5行高 */
							width: 96%;
							/* 根据需要设置宽度 */
						}

						.labels {
							padding: 4px;
							padding-left: 0;
							box-sizing: border-box;
							height: 24px;
							border-radius: 4px;
							border: 1px solid rgba(255, 255, 255, 0.5);

							img {
								width: 14px;
								height: 14px;
							}

							span {
								font-weight: 400;
								font-size: 12px;
								color: #000000;
								margin-left: 3px;
							}
						}
					}
				}
			}
		}
	}

	.paginations {
		width: 100%;
		background-color: #ebedf0;
		padding-top: 46px;

		.pagination {
			background-color: #ebedf0;

			.el-pagination {
				// background-color: transparent !important;  
			}
		}
	}
</style>
<style type="text/css">
	.el-pagination.is-background .btn-next,
	.el-pagination.is-background .btn-prev,
	.el-pagination.is-background .el-pager li {
		margin: 0 4px;
		background-color: transparent !important;
	}

	.el-pagination.is-background .btn-next.is-active,
	.el-pagination.is-background .btn-prev.is-active,
	.el-pagination.is-background .el-pager li.is-active {
		width: 30px;
		height: 30px;
		border-radius: 4px;
		border: 1px solid #0073FF;
		color: #0073FF;
	}
</style>
