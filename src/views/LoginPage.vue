<template>
	<div class="login-wrapper">
		<div class="login-content">
			<dfn class="logo"></dfn>
			<h3>海门叠石桥国际家纺产业园</h3>
			<h2>生态环境在线监管平台</h2>

			<a-form :form="form" @submit="handleSubmit" layout="vertical">
				<a-form-item>
					<a-input
						v-decorator="[
							'username',
							{
								rules: [
									{
										required: true,
										message: '请输入用户名',
									},
								],
							},
						]"
						placeholder="请输入用户名"
					>
						<a-icon slot="prefix" type="user" />
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input
						v-decorator="[
							'password',
							{
								rules: [
									{
										required: true,
										message: '请输入用户名',
									},
								],
							},
						]"
						placeholder="请输入密码"
					>
						<a-icon slot="prefix" type="unlock" />
					</a-input>
				</a-form-item>

				<a-form-item :wrapper-col="{ span: 14 }">
					<a-input v-model="yanzhengm" placeholder="请输入验证码">
						<a-icon slot="prefix" type="safety" />
					</a-input>
					<div class="yanzhengma">
						<img :src="src" alt="验证码" />
					</div>
				</a-form-item>

				<a-form-item>
					<a-button type="primary" block html-type="submit"
						>登 录</a-button
					>
				</a-form-item>
			</a-form>
		</div>
		<div class="footer">技术支持：中国移动</div>
	</div>
</template>

<script>
export default {
	name: "login-page",
	components: {},
	beforeCreate() {
		console.log(`beforeCreate`);
	},
	created() {
		this.getValidateCode();
	},
	data() {
		return {
			username: "",
			password: "",
			yanzhengm: "",
			src: "",
			form: this.$form.createForm(this, { name: 'coordinated' }),
		};
	},
	methods: {
		handleSubmit(evt) {
			console.log(window.URL)
			evt.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log("Received values of form: ", values);
				}
			});
		},
		getValidateCode() {
			this.axios.get("/hb-server/getValidateCode").then((res) => {
				this.src = res;
			});
		},
	},
};
</script>

<style lang="less">
.login-wrapper {
	position: absolute;
	width: 100%;
	height: 100%;
	background: url("../assets/images/login/bg.jpg") center center no-repeat;
	background-size: cover;
	font-family: "微软雅黑";
}

/* 定义一个动画（需要设置至少一个形参name） */
.donghua(@DHname) {
	@keyframes @DHname {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
.donghua(myDongHua); // 名称
.animations(@animation-name,@animation-duration,@animation-timing-function,@animation-iteration-coun) {
	//
	animation: @arguments;
}

.login-content {
	position: absolute;
	top: 186px;
	left: 50%;
	width: 440px;
	height: 650px;
	margin-left: -220px;
	border-radius: 16px;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.3),
		rgba(0, 0, 0, 0)
	);

	.yanzhengma {
		position: absolute;
		right: -140px;
		top: 0;
	}

	.logo {
		position: absolute;
		top: -95px;
		left: 50%;
		width: 190px;
		height: 190px;
		margin-left: -95px;

		&::after,
		&::before {
			content: " ";
			position: absolute;
			width: 100%;
			height: 100%;
			overflow: hidden;
			background: url("../assets/images/login/login.png") no-repeat center
				center;
		}

		&::before {
			position: absolute;
			background-image: url("../assets/images/login/login_border.png");
			// transform:translate(60deg);
			transform: rotate(0deg);
			.animations(myDongHua,4s,linear,infinite);
		}
	}
	h3,
	h2 {
		font-size: 30px;
		color: #fff;
		text-align: center;
		line-height: 1.6;
	}

	h3 {
		margin-top: 110px;
		font-size: 24px;
	}

	.ant-form {
		width: 346px;
		margin: 0 auto;
		padding-top: 30px;

		.ant-input {
			height: 50px;
			border-radius: 0;
		}
		.ant-input-affix-wrapper .ant-input:not(:first-child) {
			padding-left: 50px;
		}
		.ant-input-affix-wrapper .ant-input-prefix {
			left: 14px;
		}

		.anticon {
			font-size: 22px;
			color: #999;
		}
		.ant-form-item {
			padding-bottom: 12px;
			margin-bottom: 0;
		}

		.ant-btn.ant-btn-primary {
			height: 50px;
		}

		// .layui-form-item {
		// 	margin-bottom: 16px;
		// }

		// .layui-input-block,
		// .layui-input-inline {
		// 	margin-left: 0;
		// 	position: relative;

		// 	&.password::after,
		// 	&.username::after,
		// 	&.verifyCode::after {
		// 		content: " ";
		// 		position: absolute;
		// 		left: 0;
		// 		top: 10px;
		// 		width: 60px;
		// 		height: 30px;
		// 		border-right: #ddd solid 1px;
		// 		background: url("../images/login/icon_password.png") no-repeat
		// 			center center;
		// 	}

		// 	&.username::after {
		// 		background: url("../images/login/icon_user.png") no-repeat
		// 			center center;
		// 	}

		// 	.layui-input,
		// 	.layui-select,
		// 	.layui-textarea {
		// 		height: 50px;
		// 		line-height: 50px;
		// 		padding-left: 84px;
		// 	}

		// 	.layui-btn-normal {
		// 		height: 50px;
		// 		line-height: 50px;
		// 		font-size: 18px;
		// 		background-color: #006dd2;
		// 	}
		// }
	}
}

.footer {
	position: absolute;
	bottom: 90px;
	left: 30%;
	width: 40%;
	border-radius: 16px;
	color: #fff;
	// line-height: ;
	// font-size: 12px;
	text-align: center;
}
</style>
