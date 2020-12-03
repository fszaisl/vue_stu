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
							'loginName',
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
						autocomplete="off"
					>
						<a-icon slot="prefix" type="user" />
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input-password
						v-decorator="[
							'password',
							{
								rules: [
									{
										required: true,
										message: '请输入密码',
									},
								],
							},
						]"
						autocomplete="off"
						placeholder="请输入密码"
					>
						<a-icon slot="prefix" type="unlock" />
					</a-input-password>
				</a-form-item>

				<a-form-item :wrapper-col="{ span: 14 }">
					<a-input
						placeholder="请输入验证码"
						autocomplete="off"
						v-decorator="[
							'verifyCode',
							{
								rules: [
									{
										required: true,
										message: '请输入验证码',
									},
								],
							},
						]"
					>
						<a-icon slot="prefix" type="safety" />
					</a-input>
					<div class="yanzhengma">
						<img
							:src="imgUrl"
							@click="getValidateCode"
							alt="验证码"
						/>
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
import { contentPath, localTokenKey } from "../../utils/util";
import { updateToken } from "../../config/axios";
import { login } from "@services/apis";
console.log(login)
import md5 from "js-md5";
export default {
	name: "login-page",
	components: {},
	beforeCreate() {
		// console.log(`beforeCreate`);
	},
	created() {
		this.getValidateCode();
	},
	data() {
		return {
			loginName: "",
			password: "",
			verifyCode: "",
			imgUrl: "",
			form: this.$form.createForm(this, { name: "coordinated" }),
		};
	},
	methods: {
		handleSubmit(evt) {
			evt.preventDefault();
			let _this = this;
			this.form.validateFields((err, values) => {
				if (!err) {
					// console.log(values);
					values.password = md5(values.password);
					this.axios
						.post(`${contentPath}/user/loginWVC`, values)
						.then((res) => {
							const { success, msg, data } = res;

							if (success) {
								const { singoToken } = data;
								localStorage.setItem(localTokenKey, singoToken);
								updateToken();
								console.log(_this);
								_this.$router.push("home");
							} else {
								_this.$warning({
									title: "系统提醒",
									content: msg,
									okText: "确定",
								});
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},
		getValidateCode() {
			let _this = this;
			let url = login.getValidateCode;
			let xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);
			xhr.responseType = "blob";
			xhr.setRequestHeader(
				"Content-Type",
				"application/json;charset=UTF-8"
			);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 3) {
					let validateCodeToken = xhr.getResponseHeader(
						localTokenKey
					);
					localStorage.setItem(localTokenKey, validateCodeToken);
					updateToken();
				}
			};
			xhr.onload = function () {
				if (this.status == 200) {
					_this.imgUrl = window.URL.createObjectURL(this.response);
				}
			};
			xhr.send();
		},
	},
};
</script>

<style lang="less">
@import "index.less";
</style>
