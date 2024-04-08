<template>
	<div class="Financials flexjustifyCenter">
		<div class='Financialss'>
			<div class="FinancialsTitle">Funding Rounds</div>
			<div class="financialsLabel">
				<div class='financialsLabels' v-if="list.numberFunding">
					<div class="financialsLabelsTitle">Number of Funding Rounds </div>
					<div>{{list.numberFunding}}</div>
				</div>
	<!-- 			<div class='financialsLabels'>
					<div class="financialsLabelsTitle flexAlignCenter">
						<img src="../assets/lock.png" alt="">
						<p>Total Funding Amount</p>
					</div>
					<div class="financialsLabelsConcent">Brett Adcock</div>
				</div> -->
			</div>
			<div class="prompt flexAlignCenter">
				<!-- <img src="../assets/lock.png" alt=""> -->
				<p>{{list.numberFundingIntroduce}}
				</p>
			</div>
			<div class='problem justifyBetween' v-for="(v,i) in list?.Investors"  v-show="v.classification=='fundingRounds'">
				<div class="problems flexAlignCenter">
					<img src="../assets/unstatistics.png" alt="">
					<p>{{v.content}}</p>
				</div>
				<div class="problemButton flexcenter">
					<img src="../assets/unkeyPoint.png" alt="" />
					<p>SHOW</p>
				</div>
			</div>
			<div class="table">
				<el-table :data="list.Financials" class="tables"  header-align="center"
					:row-style="{height: '79px'}" style="width: 100;max-height:320px">
					<el-table-column prop="AnnouncedDate" align="center" label="Announced Date" width="Announced Date">
					</el-table-column>
					<el-table-column prop="name" align="center" label="Transaction Name" width="Transaction Nam">
						  <template #default="scope">
							<div class="tableName flexcenter">
								<img :src="scope.row.img"
									alt="" />
								{{ scope.row.TransactionName}}
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="numberOfInvestors" align="center" label="Number of Investors">
						<template #default="scope">
							<div class="tableName flexcenter">
								{{ scope.row.numberOfInvestors==null?"-":scope.row.numberOfInvestors}}
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="moneyRaised" align="center" label="Money Raised">
						<template #default="scope">
							<div class="tableName flexcenter">
								{{ scope.row.moneyRaised==null?"-":scope.row.moneyRaised}}
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="leadInvestors" align="center" label="Lead Investors">
						<template #default="scope">
							<div class="tableName flexcenter">
								{{ scope.row.leadInvestors==null?"-":scope.row.leadInvestors}}
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
	<div class="Financials flexjustifyCenter Investors">
		<div class='Financialss'>
			<div class="FinancialsTitle">Investors</div>
			<div class="financialsLabel flex">
				<div class='financialsLabels' v-if="list.numberInvestors">
					<div class="financialsLabelsTitle">Number of Investors </div>
					<div>{{list.numberInvestors}}</div>
				</div>
				<div class='financialsLabels' v-if="list.InvestorsNumber">
					<div class="financialsLabelsTitle">Number of Funding Rounds </div>
					<div>{{list.InvestorsNumber?list.InvestorsNumber:0}}</div>
				</div>
			</div>
			<div class="prompt flexAlignCenter">
				<p>{{list.numberInvestorsIntroduce}}
				</p>
			</div>
			<div class='problem justifyBetween' v-for="(v,i) in list?.Investors"  v-show="v.classification=='Investors'">
				<div class="problems flexAlignCenter">
					<img src="../assets/unstatistics.png" alt="">
					<p>{{v.content}}</p>
				</div>
				<div class="problemButton flexcenter">
					<img src="../assets/unkeyPoint.png" alt="" />
					<p>SHOW</p>
				</div>
			</div>
			<div class="table">
				<el-table :data="list.fundingRounds" class="tables"  header-align="center"
					:row-style="{height: '79px'}" style="width: 100%">
					<el-table-column prop="investorName" align="center" label="Investor Name" >
						<template #default="scope">
							<div class="tableName flexcenter">
								<img :src="scope.row.investorNameImg"
									alt="" />
								{{ scope.row.investorName}}
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="leadInvestor" align="center" label="Lead Investor">
						<template #default="scope">
							<div class="tableName flexcenter">
								{{ scope.row.leadInvestor==null?"-":scope.row.leadInvestor}}
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="name" align="center" label="Funding Round">
						  <template #default="scope">
							<div class="tableName flexcenter">
								<img :src="scope.row.fundingRoundImg"
									alt="" />
								{{ scope.row.fundingRound}}
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="partners" align="center" label="Partners">
						<template #default="scope">
							<div class="tableName flexcenter">
								{{ scope.row.partners==null?"-":scope.row.partners}}
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="InvestorsButton flexjustifyCenter">
				<div class="InvestorsButtons flexcenter">
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
			}
		},
		data() {
			return {
				tableData: [{
					date: 'Feb 23, 2024',
					name: 'Series B - Figure',
					address: '21',
					dates: '-'
				}, {
					date: 'Feb 23, 2024',
					name: 'Series B - Figure',
					address: '21',
					dates: '-'
				}, {
					date: 'Feb 23, 2024',
					name: 'Series B - Figure',
					address: '21',
					dates: '-'
				}]
			}
		},
		watch:{
			list(){
			}
		},
		mounted(){
		}
	}
</script>
<style>
	.el-table__header-wrapper .el-table__header {
		height: 79px;
		/* 设置标题高度为 50 像素 */
	}
	.el-table td.el-table__cell,
	.el-table th.el-table__cell.is-leaf {
		background: rgba(255, 255, 255, 0.4);
	}
</style>
<style lang="scss" scoped>
	.tableName {
		img {
			width: 20px;
			height: 20px;
			margin-right:5px;
			border-radius: 50%;
		}
	}

	.Financials {
		width: 100%;
		height: 933px;
		background: #F4F9FF;

		.Financialss {
			width: 68%;

			.FinancialsTitle {
				font-weight: bold;
				font-size: 44px;
				color: #000000;
				margin-top: 92px;
				margin-bottom: 30px;
			}

			.financialsLabel {
				width: 100%;

				.financialsLabels {
					width: 50%;

					div {
						font-weight: 500;
						font-size: 24px;
						color: #000000;
					}

					.financialsLabelsTitle {
						font-weight: 400;
						font-size: 16px;
						color: rgba(0, 0, 0, 0.5);
						margin-bottom: 10px;

						img {
							width: 20px;
							height: 20px;
							margin-right: 4px;
						}

						p {
							font-weight: 400;
							font-size: 16px;
							color: rgba(0, 0, 0, 0.5);
						}
					}

					.financialsLabelsConcent {
						font-weight: 500;
						font-size: 24px;
						color: #0073FF;
					}
				}
			}

			.prompt {
				width: 100%;
				margin-top: 60px;

				p {
					font-weight: 400;
					font-size: 20px;
					color: #000000;
					// margin-left: 10px;
				}

				img {
					width: 20px;
					height: 20px;
					margin-right: 4px;
				}
			}

			.problem {
				margin-top: 30px;
				.problems {
					img {
						width: 34px;
						height: 34px;
					}

					p {
						font-weight: 400;
						font-size: 16px;
						color: #000000;
						margin-left: 12px;
					}
				}

				.problemButton {
					width: 120px;
					height: 44px;
					border-radius: 4px;
					border: 1px solid #0073FF;
					img {
						width: 11px;
						height: 16px;
					}

					p {
						font-weight: 400;
						font-size: 16px;
						color: #0073FF;
						margin-left: 3px;
					}
				}
			}

			.table {
				.tables {
					width: 1200px;
					height: 301px;
					background: rgba(255, 255, 255, 0.4);
					border-radius: 16px;
					border: 1px solid rgba(0, 0, 0, 0.2);
					margin-top: 60px;
				}
			}
		}
	}
	.Investors{
		width: 100%;
		min-height:900px;
		background: #FFFFFF;
		.InvestorsButton{
			width: 100%;
			.InvestorsButtons{
				width: 168px;
				height: 44px;
				border-radius: 4px;
				border: 1px solid #0073FF;
				margin-top:63px;
				img {
					width: 11px;
					height: 16px;
				}
				p {
					font-weight: 400;
					font-size: 16px;
					color: #0073FF;
					margin-left: 3px;
				}
			}
		}
	}
</style>