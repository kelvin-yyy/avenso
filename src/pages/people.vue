<template>
	<div class="people flexjustifyCenter">
		<div class="peoples">
			<div class="peopleSearch justifyBetween">
				<div class="peopleSearchTitle">Contacts</div>
				<div class="peopleSearchs flexAlignCenter">
					<input type="text" placeholder="Search Contacts…" v-model="search" @input="searchInput"/>
					<div class="peopleSearchButton flexcenter">Job Department∨</div>
				</div>
			</div>
			<div class="peopleList">
				<div class="peopleLists justifyBetweenocenter" v-for="v in list?.information">
					<div class="peopleListLeft">
						<div class="peopleListLeftTitle flexAlignCenter">
							{{v.name}}
							<!-- <img src="../assets/inter.png" alt="" /> -->
						</div>
						<div class="peopleListLeftTitleTwo">
							<p>{{v.position}}</p>
							<p>{{v.administration}}</p>
							<p>{{v.management_position}}</p>
						</div>
						<div class="peopleListLeftTitleThree" style="margin-top: 10px;">Executive</div>
						<div class="peopleListLeftTitleThree">Legal</div>
					</div>
					<div class='center'>
						<div class="centers flexAlignCenter">
							<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng24736cf7dc3921fe8f70ba484e6bee1de7cf7463bb2dab478565f79002ad9236" alt="" />
							<div>{{v.email}}</div>
						</div>
						<div class="centers flexAlignCenter" v-if="v.phone">
							<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng39aafbd79448c1b5e68137eff5d743fa522f0c00a51cdafbb35bd5acded2b5a6" alt="" />
							<div>{{v.phone}}</div>
						</div>
						<div class="centers flexAlignCenter"  v-if="v.phone">
							<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng39aafbd79448c1b5e68137eff5d743fa522f0c00a51cdafbb35bd5acded2b5a6" alt="" />
							<div>{{v.phones}}</div>
						</div>
					</div>
					<div class="peopleListButton">
						<div class="peopleListButtons flexcenter">
							<img src="../assets/keyPoint.png" alt="" />
							<p>VIEN</p>
						</div>
					<!-- 	<div class="peoplelink flexjustifyCenter">
							<img src="../assets/salec.png" alt="" />
							<img src="../assets/link.png" alt="" />
							<img src="../assets/world.png" alt="" />
							<img src="../assets/mailbox.png" alt="" />
						</div> -->
					</div>
				</div>
				<div class="peopleListBottom justifyBetween">
					<div class="peopleListBottomLeft flexcenter">
						<img src="../assets/unkeyPoint.png" alt="" />
						<div>SHOW MORE</div>
					</div>
					<div class="peopleListBottomRight">Showing 10 of 125</div>
				</div>
			</div>
		</div>
	</div>
	<div class="profiles flexjustifyCenter" v-if="employeeNumber!=0">
		<div class="profiless">
			<img src="../assets/Featurinback.png" alt="" class="profilessimg">
			<div class="profilesTitle">Employee Profiles</div>
			<div class="profilesTitles">Number of Employee Profiles </div>
			<div class="profilesNum">{{employeeNumber}}</div>
			<div class="profilesCentent">Deepen AI has {{employeeNumber}} current employee profiles</div>
			<div class="profilesPeople flex">
				<div class="profilesPeoples flexcenter" v-for="v in employeelist">
					<img :src="v.Avatar" alt="" />
					<div class="profilesPeopleTitle">
						<p class="profilesPeopleTitles">{{v.name}}</p>
						<p>{{v.position}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="profiles board flexjustifyCenter" v-if="boardMemberNumber!=0">
		<div class="profiless">
			<div class="profilesTitle">Board Member and Advisor Profiles</div>
			<div class="boards">
				<div class="profilesTitles">Number of Board Member and Advisor Profiles</div>
				<div class="profilesNum">{{boardMemberNumber}}</div>
				<div class="profilesCentent">Number of Board Member and Advisor Profiles {{boardMemberNumber}}</div>
				<div class="profilesPeople flex">
					<div class="profilesPeoples flexcenter"  v-for="v in boardMember">
						<img :src="v.Avatar" alt="" />
						<div class="profilesPeopleTitle">
							<p class="profilesPeopleTitles">{{v.name}}</p>
							<p>{{v.position}}</p>
							<p style="margin-top: 20px;">{{v.time}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		employeeSearch
	} from "../api/user.js"
	export default {
		props:{
			list: {
				type: Array,
				default: [],
			}
		},
		data() {
			return {
				employeeNumber:0,
				boardMemberNumber:0,
				employeelist:[],
				boardMember:[],
				search:""
			}
		},
		watch:{
			list(){
				this.list.people.forEach((res)=>{
					if(res.position!=="Advisor"){
						this.employeeNumber=this.employeeNumber+1
						this.employeelist.push(res)
					}else{
						this.boardMemberNumber=this.boardMemberNumber+1
						this.boardMember.push(res)
					}
				})
			}
		},
		mounted(){
		},
		methods:{
			searchInput(){
				employeeSearch({
					id: this.$route.query.id,
					name:this.search
				}).then((res)=>{
					this.list.information=res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.people{
		width:100%;
		min-height: 203px;
		background: #F4F9FF;
		.peoples{
			width:68%;
			.peopleSearch{
				width:100%;
				margin-top:120px;
				.peopleSearchTitle{
					font-weight: bold;
					font-size: 44px;
					color: #000000;
				}
				.peopleSearchs{
					width: 530px;
					height: 50px;
					border-radius: 6px;
					border: 1px solid #000000;
					padding-left:18px;
					input{
						width: 68%;
						height: 48px;
						outline: none;
						font-size: 18px;
						border: none;
						/* 如果还需要移除边框的话 */
						box-shadow: none;
						/* 移除可能的阴影效果 */
						background-color: transparent;
					}
					.peopleSearchButton{
						width:30%;
						height: 52px;
						border-radius: 6px;
					}
				}
			}
			.peopleList{
				width:100%;
				min-height: 203px;
				background: #FFFFFF;
				border-radius: 16px;
				border: 1px solid rgba(0,0,0,0.2);
				padding:0 30px;
				box-sizing: border-box;
				margin-top: 30px;
				margin-bottom: 90px;
				.peopleLists{
					min-height: 203px;
					margin-top: 30px;
					padding-bottom: 30px;
					box-sizing: border-box;
					border-bottom: 1px solid rgba(0,0,0,0.1);
					.peopleListLeft{
						width: 33%;
						.peopleListLeftTitle{
							font-weight: 400;
							font-size: 20px;
							color: #000000;
							img{
								width: 24px;
								height: 24px;
								margin-left: 13px;
							}
						}
						.peopleListLeftTitleTwo{
							font-weight: 400;
							font-size: 20px;
							color: #000000;
							margin-top: 18px;
							p{
								margin-top:10px;
							}
						}
						.peopleListLeftTitleThree{
							font-weight: 500;
							font-size: 20px;
							color: #000000;
							margin-top: 2px;
						}
					}
					.center{
						.centers{
							margin-top: 16px;
							img{
								width: 20px;
								height: 20px;
							}
							div{
								font-weight: 400;
								font-size: 20px;
								color: rgba(0,0,0,0.5);
								margin-left: 3px;
							}
						}
					}
					.peopleListButton{
						.peopleListButtons{
							width: 160px;
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
								margin-left: 3px;
							}
						}
						.peoplelink{
							margin-top: 24px;
							img{
								width: 30px;
								height: 30px;
								margin-right: 13px;
							}
						}
					}
				}
			}
			.peopleListBottom{
				width: 100%;
				margin-top: 30px;
				margin-bottom: 30px;
				.peopleListBottomLeft{
					img{
						width: 11px;
						height: 16px;
					}
					div{
						font-weight: 400;
						font-size: 16px;
						color: #0073FF;
						margin-left: 3px;
					}
				}
				.peopleListBottomRight{
					font-weight: 400;
					font-size: 16px;
					color: rgba(0,0,0,0.5);
				}
			}
		}
	}
	.profiles{
		width: 100%;
		min-height: 860px;
		background: #FFFFFF;
		.profiless{
			width: 68%;
			position: relative;
			.profilessimg{
				width: 100%;
				height: 439px;
				position: absolute;
				bottom: 0;
			}
			.profilesTitle{
				font-weight: bold;
				font-size: 44px;
				color: #000000;
				margin-top: 110px;
			}
			.profilesTitles{
				font-weight: 400;
				font-size: 16px;
				color: rgba(0,0,0,0.5);
				margin: 30px 0 10px 0;
			}
			.profilesNum{
				font-weight: 500;
				font-size: 24px;
				color: #000000;
			}
			.profilesCentent{
				font-weight: 500;
				font-size: 24px;
				color: #000000;
				margin-top:60px;
			}
			.profilesPeople{
				flex-wrap: wrap;
				.profilesPeoples{
					height: 160px;
					margin-right:180px;
					margin-top: 40px;
					z-index: 2;
					img{
						width: 160px;
						height: 160px;
						border-radius: 10px;
					}
					.profilesPeopleTitle{
						margin-left: 30px;
						.profilesPeopleTitles{
							font-weight: 500;
							font-size: 30px;
							color: #000000;
							margin-bottom: 20px;
						}
						p{
							font-weight: 400;
							font-size: 20px;
							color: #000000;
						}
					}
				}
			}
		}
	}
	.board{
		width: 100%;
		min-height: 765px;
		background: #F3F9FF;
		.boards{
			width: 100%;
			min-height: 430px;
			background: #FFFFFF;
			border-radius: 16px;
			padding: 30px;
			box-sizing: border-box;
			margin-top: 40px;
			.profilesTitles{
				font-weight: 400;
				font-size: 16px;
				color: rgba(0,0,0,0.5);
				margin-bottom: 10px;
				margin-top: 0;
			}
			.profilesNum{
				font-weight: 500;
				font-size: 24px;
				color: #000000;
			}
			.profilesCentent{
				font-weight: 500;
				font-size: 24px;
				color: #000000;
				margin-top:60px;
			}
			.profilesPeople{
				flex-wrap: wrap;
				.profilesPeoples{
					height: 160px;
					margin-right: 203px;
					margin-top: 40px;
					z-index: 2;
					img{
						width: 160px;
						height: 160px;
						border-radius: 10px;
					}
					.profilesPeopleTitle{
						margin-left: 30px;
						.profilesPeopleTitles{
							font-weight: 500;
							font-size: 30px;
							color: #000000;
							margin-bottom: 20px;
						}
						p{
							font-weight: 400;
							font-size: 20px;
							color: #000000;
						}
					}
				}
			}
		}
	}
</style>