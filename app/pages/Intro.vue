<template>
	<Page actionBarHidden="true">
		<FlexboxLayout class="page">
			<StackLayout>
				<Image class="logo" src="~/assets/images/Logo.png"></Image>
			</StackLayout>
			<StackLayout style="width: 60%" marginTop="40">
				<MDButton class="signup-button" rippleColor="#CCCCCC" text="SIGN UP" @tap="navigateToSignUp()"/>
				<MDButton class="login-button" rippleColor="black" text="LOG IN" @tap="navigateToSignIn()"/>
			</StackLayout>
		</FlexboxLayout>
	</Page>
</template>

<script>
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default {
	data() {
		return {};
	},
	methods: {
		navigateToSignUp() {
			this.$navigateTo(SignUp, {
				animated: true,
				transition: {
					name: "slideTop",
					duration: 300
				}
			});
		}, 
		navigateToSignIn() {
			this.$navigateTo(SignIn, {
				animated: true,
				transition: {
					name: "slideTop",
					duration: 300
				}
			});
		}
	}
};
</script>

<style scoped>

.page {
	background-color: #F6AD38;
	align-items: center;
	flex-direction: column;
}

.logo {
	margin-top: 35%;
	width: 40%;
}

.signup-button {
	color: #E77E23;
	background-color: #FFFFFF;
	border-radius: 10;
	width: 100%;
}

.login-button {
	color: #E77E23;
	background-color: #1F2532;
	border-radius: 10;
	width: 100%;
}

</style>
