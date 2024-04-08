<template>
	<div class="bottom flexDirectionCenter">
		<div class="bottomcontent flex">
			<div class="bottomcontents">
				<div class="bottomcontentTitles">Account</div>
				<div class="allbottomcontent"></div>
			</div>
			<div class="bottomcontents" style="margin-left: 363px;">
				<div class="bottomcontentTitles">Home</div>
				<div class="allbottomcontent">Posts</div>
				<div class="allbottomcontent">Authors</div>
			</div>
			<div class="bottomcontents">
				<div class="bottomcontentTitles">Account</div>
				<div class="allbottomcontent">Upgrade</div>
			</div>
			<div class="bottomcontents">
				<div class="bottomcontentTitles">Pro</div>
				<div class="allbottomcontent">Upgrade to Pro</div>
				<div class="allbottomcontent">All Pro posts</div>
			</div>
			<div class="bottomcontents">
				<div class="bottomcontentTitles">Work with us</div>
				<div class="allbottomcontent">MetaTrader 4</div>
				<div class="allbottomcontent">Calculator</div>
			</div>
		</div>
		<div class="companytitle">
			<img src="../../src/assets/logo.png" alt="">
		</div>
		<div class="detailsCompany">AI powered Venture Capital Sourcing Platform</div>
		<div class="line"></div>
		<div class="version">©2024 PitchBook. Win what’s next. All rights reserved.</div>
		<div class="version">Terms of Use Privacy Policy California Consumer: Do Not Sell My Info GDPR Compliance</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.bottom{
		width: 100%;
		height: 448px;
		background: #000000;
		padding-bottom: 50px;
		box-sizing: border-box;
		.bottomcontent{
			width:68%;
			margin-top: 55px;
			.bottomcontents{
				margin-right: 150px;
				.bottomcontentTitles{
					font-weight: 500;
					font-size: 14px;
					color: #FFFFFF;
				}
				.allbottomcontent{
					font-weight: 300;
					font-size: 14px;
					color: #FFFFFF;
					margin-top:12px;
				}
			}
		}
		.companytitle{
			font-weight: 900;
			font-size: 26px;
			color: #FFFFFF;
			margin-top: 56px;
			img{
				width:160px;
				height:38px
			}
		}
		.detailsCompany{
			font-weight: 500;
			font-size: 20px;
			color: #BFC4CA;
			margin-top: 18px;
		}
		.line{
			width: 1201px;
			height: 1px;
			background-color:rgba(255,255,255,0.1) ;
			margin-top: 20px;
			margin-bottom: 10px;
		}
		.version{
			font-weight: 400;
			font-size: 14px;
			color: #BFC4CA;
			margin-top: 10px;
		}
	}
</style>