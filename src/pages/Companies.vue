<template>
	<div class="Companies flexjustifyCenter">
		<div class="Companiess">
			<div class="CompaniesTitle">Similar Companies</div>
			<div class="CompaniesTitles">Companies like {{company}} include{{name}}<span v-if="names">and{{names}}</span>.</div>
			<div class="line"></div>
			<div class="companiesList justifyBetween" v-for="(v,i) in list">
				<div class="companiesLists">
					<div class="companiesListTitle flexAlignCenter">
						<img :src="v.img" alt="" />
						<p>{{v.name}}</p>
					</div>
					<div class="companiesListprompt">{{v.address}}·{{v.Contacts}}·{{v.employees}}</div>
					<div class="companiesListlabel flexAlignCenter">
						<div class="companiesListlabels" v-for="(item,index) in v.label">{{item}}</div>
					</div>
					<div class="companiesListprompts">{{v.briefIntroduction}}</div>
					<div class="companiesListOperation flexAlignCenter">
						<!-- <div class="promptButton flexcenter">
							<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc7bbe807a6648cbca24c647286928a40277fe146752557559a7a654b8effd298" alt="" />
							<p>Save</p>
						</div> -->
						<div class="companiesListOperations" style="margin-left: 0;">These companies are similar</div>
			<!-- 			<img src="../assets/like.png" alt="" v-if="state" @click="state=false,unstate=false"/>
						<img src="../assets/unlike.png" alt="" v-if="state==false"  @click="state=true,unstate=false"/>
						<img src="../assets/notLike.png" alt="" v-if="unstate"  @click="unstate=false,state=false"/>
						<img src="../assets/unnotLike.png" alt="" v-if="unstate==false"  @click="unstate=true,state=false"/> -->
					</div>
				</div>
				<div class="prompt">
					{{v.briefIntroductions}}
				</div>
			</div>
			<div class="companiesButton flexcenter">
				<div class="companiesButtons flexcenter">
					<img src="../assets/unkeyPoint.png" alt="" />
					<p>SHOW MORE</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default: [],
			},
			company: {
				type: String,
				default: "",
			}
		},
		data() {
			return {
				state:false,
				unstate:false,
				name:"",
				names:""
			}
		},
		watch:{
			list(){
				
				if(this.list.lenght==1){
					this.name=this.list[0].name
				}else{
					this.name=this.list[0].name
					this.names=this.list[1].name
				}
			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.Companies{
		width:100%;
		max-height: 1200px;
		background: #F3F9FF;
		padding-bottom: 160px;
		box-sizing: border-box;
		.Companiess{
			width: 68%;
			max-height: 1392px;
			background: #FFFFFF;
			border-radius: 16px;
			padding: 30px;
			box-sizing: border-box;
			margin-top: -280px;
			padding-bottom: 90px;
			.CompaniesTitle{
				font-weight: bold;
				font-size: 44px;
				color: #000000;
			}
			.CompaniesTitles{
				font-weight: 400;
				font-size: 16px;
				color: #000000;
				margin: 20px 0 30px 0;
			}
			.line{
				width: 100%;
				height: 1px;
				background:rgba(0,0,0,0.1) ;
			}
			.companiesList{
				width: 100%;
				height: 295px;
				border-bottom: 1px solid rgba(0,0,0,0.1);
				margin-top: 30px;
				padding-bottom: 30px;
				box-sizing: border-box;
				.companiesLists{
					width:65%;
					.companiesListTitle{
						img{
							width: 40px;
							height: 40px;
						}
						p{
							font-weight: 500;
							font-size: 30px;
							color: #000000;
							margin-left: 14px;
						}
					}
					.companiesListprompt{
						font-weight: 500;
						font-size: 16px;
						color: #000000;
						margin-top: 20px;
					}
					.companiesListlabel{
						margin-top: 20px;
						.companiesListlabels{
							background: rgba(0,115,255,0.14);
							border-radius: 20px;
							padding: 10px 20px;
							margin-right: 10px;
						}
					}
					.companiesListprompts{
						font-weight: 400;
						font-size: 16px;
						color: #000000;
						margin-top: 20px;
					}
					.companiesListOperation{
						margin-top: 20px;
						.promptButton{
							width: 90px;
							height: 44px;
							background: #0073FF;
							border-radius: 4px;
							img{
								width: 16px;
								height: 16px;
								margin: 0;
							}
							p{
								font-weight: 400;
								font-size: 16px;
								color: #FFFFFF;
								margin-left: 3px;
							}
						}
						img{
							width: 48px;
							height: 48px;
							margin-right:14px;
						}
					}
					.companiesListOperations{
						font-weight: 400;
						font-size: 16px;
						color: #000000;
						margin: 0 20px;
					}
				}
				.prompt{
					width: 322px;
					height: 80px;
					background: rgba(0,115,255,0.14);
					border-radius: 6px;
					padding: 20px;
					box-sizing: border-box;
				}
			}
			.companiesButton{
				width: 100%;
				margin-top: 50px;
				.companiesButtons{
					width: 168px;
					height: 44px;
					background: #0073FF;
					border-radius: 4px;
					border: 1px solid #0073FF;
					img{
						width: 11px;
						height: 16px;
					}
					p{
						font-weight: 400;
						font-size: 16px;
						color: #FFFFFF;
						margin-left: 3px;
					}
				}
			}
		}
	}
</style>