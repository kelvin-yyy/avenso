<template>
		<div class="Details flexjustifyCenter">
			<div class="Detailss">
				<div class="DetailsTitle">Details</div>
				<div class="DetailsType flex">	
				<!-- <div class="DetailsTypes flexAlignCenter"> -->
					<div class="allDetailsType">
						<div class="DetailsTypeTitle">Industries</div>
						<div class="DetailsContent flex">
							<div class="DetailsContents" v-for="(v,i) in list.Details?.Industries">
								{{v}}
							</div>
						</div>
					</div>
					<div class="allDetailsType">
						<div class="DetailsTypeTitle">Headquarters Regions</div>
						<div class="DetailsContent flex">
							<div class="DetailsContents DetailsContentRight" v-for="(v,i) in list.Details?.HeadquartersRegion">
								{{v}}
							</div>
						</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.FoundedDate">
						<div class="DetailsTypeTitle">Founded Date</div>
						<div class="DetailsContentSmall">{{list.Details?.FoundedDate}}</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.OperatingStatus">
						<div class="DetailsTypeTitle">Operating Status</div>
						<div class="DetailsContentSmall">{{list.Details?.OperatingStatus}}</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.LegalName">
						<div class="DetailsTypeTitle">Legal Name</div>
						<div class="DetailsContentSmall">{{list.Details?.LegalName}}</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.companyType">
						<div class="DetailsTypeTitle">Company Type</div>
						<div class="DetailsContentSmall">{{list.Details?.companyType}}</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.Founders.length!=0">
						<div class="DetailsTypeTitle">Founders</div>
						<div class="DetailsContentSmall"><span v-for="(v,i) in list.Details?.Founders">{{v}},</span></div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.OperatingStatus">
						<div class="DetailsTypeTitle">Last Funding Type </div>
						<div class="DetailsContentSmall">{{list.Details?.OperatingStatus}}</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.expectedRevenue">
						<div class="DetailsTypeTitle">Estimated Revenue Range </div>
						<div class="DetailsContentSmall">{{list.Details?.expectedRevenue}}</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.phone">
						<div class="DetailsTypeTitle">Phone Number</div>
						<div class="DetailsContentSmall">{{list.Details?.phone}}</div>
					</div>
					<div class="allDetailsType" v-if="list.Details?.email">
						<div class="DetailsTypeTitle">Contact Email</div>
						<div class="DetailsContentSmall">{{list.Details?.email}}</div>
					</div>
				</div>
				<div class="line"></div>
				<div class="DetailsTypeTitle">Also Known As</div>
				<div class="DetailsContentSmall" v-if="list.name">{{list.name}}</div>
				<div class="briefIntroduction" v-if="list.introduction">
					{{list.introduction}}
				</div>
				<div class="link">
					<a :href="list.facebook" target="_blank" v-if="list.facebook">
					   <img src="../assets/feekbook.png" alt="" />
					</a>
					<a :href="list.linkedin" target="_blank" v-if="list.linkedin">
					  <img src="../assets/inter.png" alt="" />
					</a>
				</div>
			</div>
		</div>
		<div class="Featurin flexjustifyCenter">
			<img src="../assets/Featurinback.png" alt="" class="Featurinimg">
			<div class="Featurins">
				<div class="FeaturinTitle">
					Lists Featuring This Company
				</div>
				<div class="FeaturinList justifyBetween" v-for="(v,i) in list?.Featurin">
					<div class="FeaturinLists flexAlignCenter">
						<!-- <img :src="v.img" alt="" /> -->
						<div class="companyimg flex">
							<img v-for="(item,index) in v.img" :src="item" alt=""/>
						</div>
						<div class="FeaturinListcontent flex">
							<p class="title">{{v.name}}</p>
							<p>{{v.num}} Number of Organizations • ${{v.Funding}} Total Funding Amount • {{v.numberOfinvestors}} Number of Investors</p>	
						</div>
					</div>
					<div class="FeaturinLisbutton flexcenter">
						<img src="../assets/unkeyPoint.png" alt="" />
						<p>TRACK</p>
					</div>
				</div>
				<div class="more flexcenter" @click="moreClick()" v-if="list.Featurin?.length<=3">展示更多<img src="../assets/rightArrow.png" alt="" /></div>
			</div>
		</div>
		<div class="questions flexjustifyCenter">
			<div class="questionss">
				<div class="questionTitle">Frequently Asked Que</div>
				<div class="questionList">
					<div class="questionLists flexdirection" v-for="(v,i) in list.questions" v-show="v.classification=='Summary'">
						<div class="question justifyBetween" v-if="v.classification=='Summary'">
							<div>{{v.content}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:{
			list: {
				type: Array,
				default: [],
			}
		},
		mounted(){
		},
		watch:{
			list(){
				// console.log(this.list.Details?.Founders.length)
			}
		},
		methods:{
			moreClick(){
			}
		}
		}
</script>

<style lang="scss" scoped>
	.Details{
		width: 100%;
		min-height: 1000px;
		background: #F4F9FF;
		padding-bottom: 92px;
		.Detailss{
			width:68%;
			.DetailsTitle{
				font-weight: bold;
				font-size: 44px;
				color: #000000;
				margin-top: 92px;
			}
			.DetailsType{
				width:100%;
				// .DetailsTypes{
				// 	width: 50%;
				flex-wrap: wrap;
					.allDetailsType{
							width:50%;
					.DetailsContent{
						flex-wrap: wrap;
							width:70%;
						min-height: 200px;
						.DetailsContents{
							height: 40px;
							padding: 10px 20px;
							box-sizing: border-box;
							background: rgba(0,115,255,0.14);
							border-radius: 20px;
							font-weight: 400;
							font-size: 16px;
							color: #000000;
							margin-right: 10px;
							margin-top: 16px;
						}
						.DetailsContentRight{
							background:  rgba(255,0,0,0.14);
						}
					}
				}
			}
			.line{
				width: 80%;
				height: 1px;
				background: rgba(0,0,0,0.1);
				margin: 30px 0;
			}
			.DetailsTypeTitle{
				height: 24px;
				font-weight: 400;
				font-size: 16px;
				color: rgba(0,0,0,0.5);
				margin: 24px 0 10px 0;
			}
			.DetailsContentSmall{
				height: 24px;
				font-weight: 500;
				font-size: 24px;
				color: #000000;
			}
			.briefIntroduction{
				font-weight: 400;
				font-size: 16px;
				color: #000000;
				margin-top: 30px;
			}
			.link{
				margin-top: 30px;
				img{
					width: 24px;
					height: 24px;
					margin-right: 10px;
					}
			}
		}
	}
	.Featurin{
		width: 100%;
		min-height: 850px;
		background: #FFFFFF;
		position: relative;
		padding-bottom: 88px;
		box-sizing: border-box;
		.Featurinimg{
			width: 100%;
			height: 439px;
			position: absolute;
			bottom: 0;
		}
		.Featurins{
			width:68%;
			z-index: 2;
			.FeaturinTitle{
				margin-top: 110px;
				font-weight: bold;
				font-size: 44px;
				color: #000000;
			}
			.FeaturinList{
				margin-top: 50px;
				.FeaturinLists{
					.companyimg{
						width: 120px;
						height: 90px;
						// border-radius: 16px;
						overflow: hidden;
						flex-wrap: wrap;
						img{
							width: 43px;
							height: 43px;
							// border-radius: 16px;
						}
					}
					.FeaturinListcontent{
						margin-left: 30px;
						flex-direction: column;
						p{
							font-weight: 500;
							font-size: 16px;
							color: #000000;
						}
						.title{
							font-size: 20px;
							margin-bottom: 20px;
						}
					}
				}
				.FeaturinLisbutton{
					width: 120px;
					height: 44px;
					background: #0073FF;
					border-radius: 4px;
					img{
						width: 11px;
						height: 16px;
					}
					p{
						font-weight: 400;
						font-size: 16px;
						color: #FFFFFF;
					}
				}
			}
			.more{
				width: 100%;
				font-weight: 400;
				font-size: 16px;
				color: #0073FF;
				margin-top: 50px;
				img{
					width: 20px;
					height: 20px;
				}
			}
		}
	}
	.questions{
		min-height: 695px;
		width: 100%;
		background-color: #f3f9ff;
		padding-bottom: 50px;
		box-sizing: border-box;
		.questionss{
			width:68%;
			.questionTitle{
				font-weight: bold;
				font-size: 44px;
				color: #000000;
				margin-top: 120px;
			}
			.questionList{
				.questionLists{
					width: 100%;
					min-height: 84px;
					border-bottom: 1px solid rgba(0,0,0,0.1);
					margin-top: 30px;
					justify-content: center;
					.question{
						div{
							font-weight: 500;
							font-size: 20px;
							color: #000000;
						}
					}
					.answer{
						font-weight: 500;
						font-size: 20px;
						color: #000000;
						margin: 20px 0;
					}
				}
			}
		}
	}
</style>