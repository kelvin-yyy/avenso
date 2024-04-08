<template>
	<div class="figure">
		<div class="figureTop"
			:style="{ backgroundImage: selectId != 1 ? 'url(' + backgroundImageUrl + ')' : '' ,height:selectId==4||selectId==5?'765px':''}">
			<topTitle :topState="topState"></topTitle>
			<div class="figureTops flexDirectionCenter">
				<div class="details justifyBetween">
					<div class="detailsLeft flexcenter">
						<img :src="list.Avatar" style="	width: 160px;height: 160px;border-radius: 16px;" />
						<div class="detailsLeftContent">
							<div class="contentTitle">{{list.name}}</div>
							<div class="contentFigure flexcenter">
								<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng301b7e1523deb929e4319dc44c092adaaaf8cbab738eddf3b0dd8ca7f82c4ff9"
									alt="" />
								<p>{{list.Details ?.LegalName}}</p>
							</div>
						</div>
					</div>
					<div class="detailsRight flexcenter">
						<div class="connectBatton flexcenter">
							<img src="../../src/assets/keyPoint.png" alt="" style="margin-right: 4px;" />
							CONNECT TO CRM
						</div>
						<!-- <div class="saveBatton flexcenter">
							<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc7bbe807a6648cbca24c647286928a40277fe146752557559a7a654b8effd298" alt="" style="margin-right: 2px;"/>
							Save
						</div> -->
					</div>

				</div>
				<div class="select flexAlignCenter">
					<div class="selects flexcenter" v-for="(v,i) in selectList"
						:style="{'background':v.state?'#0073FF':'#fff'}" @click="selectClick(v)" v-show="v.financialState">
						{{v.name}}
					</div>
				</div>
				<div class="about" v-if="selectId==1">
					<div class="aboutTitle">
						About
					</div>
					<div class="aboutTitles">
						{{list.introductions}}
					</div>
					<div class="aboutType justifyBetween">
						<div class="aboutTypes flexcenter" v-for="(item,index) in aboutList" v-show="item.name!=''">
							<img :src="item.img" alt="" />
							<div class="aboutTypeTitle" v-if="item.idNmame=='website'">
								<a class="aboutTypeTitle" :href="item.name" target="_blank">
									{{item.name}}
								</a>
							</div>
							<div class="aboutTypeTitle" v-else>{{item.name}}</div>
						</div>
					</div>
				</div>
				<div class="Highlight" v-if="selectId==1 || selectId==2|| selectId==3">
					Highlights
				</div>
				<div class="Highlights flexAlignCenter" v-if="selectId==1">
					<div class="detailed flex">
						<div class="allDetailed">
							<div class="detailedTitle" style="font-size: 24px;">Unlock for free</div>
							<div class="detaileds flex" style="margin-top: 42px;">
								<img src="../assets/lock.png" alt="" />
								<p>Total fundina Amount</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
					<div class="detailed flex" v-if="list.Highlights ?.contacts">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.contacts}}</div>
							<div class="detaileds">
								<p>Contacts</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
					<div class="detailed flex" v-if="list.Highlights ?.EmployeeProfiles">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.EmployeeProfiles}}</div>
							<div class="detaileds">
								<p>Employee Profiles</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
					<div class="detailed flex" v-if="list.Highlights ?.investor">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.investor}}</div>
							<div class="detaileds">
								<p>Investors</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
					<div class="detailed flex" v-if="list.Highlights ?.similarCompanies">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.similarCompanies}}</div>
							<div class="detaileds">
								<p>Similar Companies</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
				</div>
				<div class="Highlights flexAlignCenter" v-if="selectId==2">
					<div class="detailed flex" v-if="list.Highlights ?.Funding">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.Funding}}</div>
							<div class="detaileds">
								<p>Funding Rounds</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
					<!-- <div class="detailed flex">
						<div class="allDetailed">
							<div class="detailedTitle" style="font-size: 24px;">Unlock for free</div>
							<div class="detaileds flex" style="margin-top: 42px;">
								<img src="../assets/lock.png" alt="" />
								<p>Total fundina Amount</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg"/>
					</div>
					<div class="detailed flex">
						<div class="allDetailed">
							<div class="detailedTitle">2</div>
							<div class="detaileds">
								<p>Lead Investors</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg"/>
					</div> -->
					<div class="detailed flex"  v-if="list.Highlights ?.investor">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.investor}}</div>
							<div class="detaileds">
								<p>Investors</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
				</div>
				<div class="Highlights flexAlignCenter" v-if="selectId==3">
					<div class="detailed flex" v-if="list.Highlights ?.EmployeeProfiles">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.EmployeeProfiles}}</div>
							<div class="detaileds">
								<p>Employee Profiles</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
					<div class="detailed flex" v-if="list.Highlights ?.contacts">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.contacts}}</div>
							<div class="detaileds">
								<p>contacts</p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
					<div class="detailed flex" v-if="list.Highlights ?.boardMember">
						<div class="allDetailed">
							<div class="detailedTitle">{{list.Highlights ?.boardMember}}</div>
							<div class="detaileds">
								<p>Number of Board Member and Advisor </p>
							</div>
						</div>
						<img src="../assets/right.png" alt="" class="detailedimg" />
					</div>
				</div>
			</div>
		</div>
		<figures v-if="selectId==1" :list="list"></figures>
		<Financials v-if="selectId==2" :list="FinancialsList"></Financials>
		<people v-if="selectId==3" :list="employeeList"></people>
		<signals v-if="selectId==4" :list="newsList"></signals>
		<Companies v-if="selectId==5" :list="apiSimilarList" :company="list.name"></Companies>
		<bottom></bottom>
	</div>
</template>

<script>
	import topTitle from "../components/topTitle.vue"
	import bottom from "../components/bottom.vue"
	import figures from "./figures.vue"
	import Financials from "./Financials.vue"
	import people from "./people.vue"
	import signals from "./signals.vue"
	import Companies from "./Companies.vue"
	import {
		apiDetails,
		apiFinancials,
		apiNews,
		apiSimilar,
		apiEmployee
	} from "../api/user.js"
	export default {
		components: {
			topTitle,
			bottom,
			figures,
			Financials,
			people,
			signals,
			Companies
		},
		data() {
			return {
				selectList: [{
						name: "Summary",
						id: 1,
						state: true,
						financialState:true,
					},
					{
						name: "Financials",
						id: 2,
						state: false,
						financialState:true,
					},
					{
						name: "People",
						id: 3,
						state: false,
						financialState:true,
					},
					{
						name: "Signals & News",
						id: 4,
						state: false,
						financialState:true,
					},
					{
						name: "Similar Companies",
						id: 5,
						state: false,
						financialState:true
					}
				],
				backgroundImageUrl: require("../../src/assets/figures.png"),
				selectId: 1,
				aboutList: [{
						name: "",
						img: require("../../src/assets/address.png"),
						idNmame: "address"
					},
					{
						name: "",
						img: require("../../src/assets/people.png"),
						idNmame: "staffs"
					},
					{
						name: "",
						img: require("../../src/assets/money.png"),
						idNmame: "fundType"
					},
					{
						name: "",
						img: require("../../src/assets/Private.png"),
						idNmame: "recruit"
					},
					{
						name: "",
						img: require("../../src/assets/Website.png"),
						idNmame: "website"
					},
					{
						name: "",
						img: require("../../src/assets/statistics.png"),
						idNmame: "grade"
					}
				],
				list: {},
				FinancialsList:{},
				newsList:{},
				apiSimilarList:{},
				employeeList:{},
				handlePageLoadState: true,
				topState:false
			}
		},
		mounted() {
			this.topState=false
			window.scrollTo(0, 0)
			window.addEventListener('load', this.handlePageLoad);
			apiDetails({
				id: this.$route.query.id
			}).then((res) => {
				this.list = res.data
				this.selectList.forEach((item) => {
					if (item.state == true) {
						if (item.id == 2) {
							this.apiFinancialss()
						}else if (item.id == 3){
							this.apiEmployees()
						}else if (item.id == 4){
							this.apiNewss()
						}else if (item.id == 5){
							this.apiSimilars()
						}
					}
				})
				console.log(res.data)
					if(res.data.financialDisplay=="Financials"){
						this.selectList[1].financialState=true
					}else{
						this.selectList[1].financialState=false
					}
				console.log(this.selectList)
					this.aboutList.forEach((v, i) => {
						const aboutItem = res.data.about[v.idNmame];
						if (aboutItem) {
							v.name = aboutItem || v.name; // 使用aboutItem的name属性，如果不存在则保持原name  
						} else {
							console.error(`No match found for idNmame: ${v.idNmame}`);
						}
					});
			})
		},
		beforeRouteLeave(to, from, next) {
			// 在这里清除本地存储  
			localStorage.removeItem('selectId');
			// 确保调用 next() 以解析守卫  
			next();
		},
		beforeDestroy() {
			localStorage.removeItem('selectId');
		},
		methods: {
			handlePageLoad() {
				var selectId = localStorage.getItem('selectId');
				if (selectId) {
					this.selectId = selectId
					this.selectList.forEach((item, index) => {
						if (this.selectId == item.id) {
							item.state = true
						} else {
							item.state = false
						}
					})
				}
				// if (selectId == 2) {
				// 	this.apiFinancialss()
				// }
			},
			async apiFinancialss() {
				await apiFinancials({
					id: this.$route.query.id
				}).then((res) => {
					this.FinancialsList=res.data
					console.log(this.FinancialsList,99)
				})
			},
			apiNewss(){
				apiNews({
					id: this.$route.query.id
				}).then((res) => {
					this.newsList=res.data
				})
			},
			apiEmployees(){
				apiEmployee({
					id: this.$route.query.id
				}).then((res) => {
					this.employeeList=res.data
				})
			},
			apiSimilars(){
				apiSimilar({
					id: 1
				}).then((res) => {
					this.apiSimilarList=res.data
				})
			},
			selectClick(v) {
				this.selectList.forEach((item, index) => {
					if (v.id == item.id) {
						item.state = true
						this.selectId = item.id
						localStorage.setItem('selectId', item.id);
						if (item.id == 2) {
							this.apiFinancialss()
						}else if (item.id == 3){
							this.apiEmployees()
						}else if (item.id == 4){
							this.apiNewss()
						}else if (item.id == 5){
							this.apiSimilars()
						}
					} else {
						item.state = false
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.figure {
		.figureTop {
			width: 100%;
			background-image: url(../assets/figure.png);
			background-size: 100% 100%;

			.figureTops {
				width: 100%;
				margin-top: 82px;

				.details {
					width: 68%;

					.detailsLeft {
						.detailsLeftimg {
							width: 160px;
							height: 160px;
						}

						.detailsLeftContent {
							margin-left: 44px;

							.contentTitle {
								font-weight: 500;
								font-size: 54px;
								color: #FFFFFF;
							}

							.contentFigure {
								margin-top: 20px;

								p {
									font-weight: 400;
									font-size: 20px;
									color: #FFFFFF;
									margin-left: 4px;
								}
							}
						}
					}

					.detailsRight {
						.connectBatton {
							width: 177px;
							height: 42px;
							border-radius: 4px;
							border: 1px solid #FFFFFF;
							font-weight: 400;
							font-size: 16px;
							color: #FFFFFF;

							img {
								width: 11px;
								height: 16px;
							}
						}

						.saveBatton {
							width: 90px;
							height: 44px;
							background: #0073FF;
							border-radius: 4px;
							font-weight: 400;
							font-size: 16px;
							color: #FFFFFF;
							margin-left: 12px;

							img {
								width: 16px;
								height: 16px;
								margin-right: 4px;
							}
						}
					}
				}

				.select {
					width: 68%;
					margin-top: 80px;

					.selects {
						min-width: 130px;
						height: 46px;
						background: #FFFFFF;
						border-radius: 23px;
						padding: 8px 21px;
						box-sizing: border-box;
						margin-right: 16px;
					}
				}

				.about {
					width: 68%;
					height: 268px;
					background-color: rgba(0, 0, 0, 0.5);
					box-shadow: 0px 8 28px 3px rgba(0, 0, 0, 0.04);
					border-radius: 16px;
					margin-top: 50px;
					padding: 30px;
					box-sizing: border-box;

					.aboutTitle {
						font-weight: bold;
						font-size: 28px;
						color: #FFFFFF;
					}

					.aboutTitles {
						font-weight: 500;
						font-size: 16px;
						color: #FFFFFF;
						margin-top: 16px;
						margin-bottom: 34px;
					}

					.aboutType {
						height: 76px;

						.aboutTypes {
							width: 16.5%;
							height: 76px;
							flex-direction: column;

							.aboutTypeTitle {
								font-weight: 400;
								font-size: 16px;
								color: #FFFFFF;
								margin-top: 16px;
							}

							img {
								width: 40px;
								height: 40px;
							}
						}
					}
				}

				.Highlight {
					width: 68%;
					margin-top: 70px;
					margin-bottom: 26px;
					font-weight: bold;
					font-size: 44px;
					color: #FFFFFF;
				}

				.Highlights {
					width: 68%;

					.detailed {
						width: 20%;
						height: 130px;
						background: rgba(249, 249, 249, 0);

						.allDetailed {
							width: 80%;

							.detailedTitle {
								font-weight: 500;
								font-size: 44px;
								color: #4196FF;
							}

							.detaileds {
								margin-top: 16px;

								img {
									width: 20px;
									height: 20px;
								}

								p {
									font-weight: 400;
									font-size: 16px;
									color: #FFFFFF;
								}
							}
						}

						.detailedimg {
							width: 20px;
							height: 20px;
							margin-top: 10px;
						}
					}
				}
			}
		}
	}
</style>