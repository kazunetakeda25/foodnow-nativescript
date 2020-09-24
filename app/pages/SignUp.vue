<template>
	<Page class="page" actionBarHidden="true">
		<FlexboxLayout flexDirection="column">
			<!-- NAVBAR -->
			<AbsoluteLayout class="navbar" ref="navbar">
				<Image src="~/assets/images/Back.png" marginLeft="10" width="25" height="16" marginTop="10"></Image>
				<StackLayout width="100%">
					<MDButton class="nav-button text-compact" rippleColor="#CCCCCC" text="Register Now" @tap="navigateToIntro()"/>
				</StackLayout>
			</AbsoluteLayout>
			<!-- INPUTFIELDS -->
			<StackLayout>
        <TextField ref="username" hint="Username" autocorrect="false" class="input input-full-width" :class="{ active: usernameFieldFocus }" @focus="usernameFieldFocused()"/>
        <TextField ref="email" hint="Email" autocorrect="false" class="input input-full-width" :class="{ active: emailFieldFocus }" @focus="emailFieldFocused()"/>
        <TextField ref="password" hint="Password" autocorrect="false" class="input input-full-width" :class="{ active: passwordFieldFocus }" @focus="passwordFieldFocused()"/>
        <TextField ref="confpassword" hint="Confirm Password" autocorrect="false" class="input input-full-width" :class="{ active: confPasswordFieldFocus }" @focus="confPasswordFieldFocused()"/>
        <!-- <GridLayout width="70%" columns="*, 10, 2*">
          <TextField col="0" ref="countryCode" hint="Country Code" autocorrect="false" class="input input-md4-width" :class="{ active: countryCodeFieldFocus }" @focus="countryCodeFieldFocused()"/>
          <TextField col="2" ref="phoneNumber" hint="Phone Number" autocorrect="false" class="input input-md8-width" :class="{ active: phoneNumberFocus }" @focus="phoneNumberFocused()"/>
        </GridLayout> -->
			</StackLayout>
		</FlexboxLayout>
	</Page>
</template>

<script>

import Intro from "./Intro";

export default {
	data() {
		return {
      usernameFieldFocus: false, 
      emailFieldFocus: false, 
      passwordFieldFocus: false, 
      confPasswordFieldFocus: false, 
      countryCodeFieldFocus: false, 
      phoneNumberFocus: false,
		};
	},
	methods: {
		navigateToIntro() {
			this.$navigateTo(Intro, {
				animated: true,
				transition: {
					name: "slideBottom",
					duration: 300
				}
			});
    }, 
    usernameFieldFocused() {
      this.usernameFieldFocus = true;
      this.emailFieldFocus = false;
      this.passwordFieldFocus = false;
      this.confPasswordFieldFocus = false;
      this.countryCodeFieldFocus = false;
      this.phoneNumberFocus = false;
    }, 
    emailFieldFocused() {
      this.usernameFieldFocus = false;
      this.emailFieldFocus = true;
      this.passwordFieldFocus = false;
      this.confPasswordFieldFocus = false;
      this.countryCodeFieldFocus = false;
      this.phoneNumberFocus = false;
    }, 
    passwordFieldFocused() {
      this.usernameFieldFocus = false;
      this.emailFieldFocus = false;
      this.passwordFieldFocus = true;
      this.confPasswordFieldFocus = false;
      this.countryCodeFieldFocus = false;
      this.phoneNumberFocus = false;
    }, 
    confPasswordFieldFocused() {
      this.usernameFieldFocus = false;
      this.emailFieldFocus = false;
      this.passwordFieldFocus = false;
      this.confPasswordFieldFocus = true;
      this.countryCodeFieldFocus = false;
      this.phoneNumberFocus = false;
    }, 
    countryCodeFieldFocused() {
      this.usernameFieldFocus = false;
      this.emailFieldFocus = false;
      this.passwordFieldFocus = false;
      this.confPasswordFieldFocus = false;
      this.countryCodeFieldFocus = true;
      this.phoneNumberFocus = false;
    }, 
    phoneNumberFocused() {
      this.usernameFieldFocus = false;
      this.emailFieldFocus = false;
      this.passwordFieldFocus = false;
      this.confPasswordFieldFocus = false;
      this.countryCodeFieldFocus = false;
      this.phoneNumberFocus = true;
    }, 
	}, 
	mounted() {
		
	}
};
</script>

<style scoped>
.page {
	background-color: white;
}

.navbar {
	margin-top: 20;
}

.nav-button {
	width: 100%;
	border-width: 0.1;
	z-index: 0;
	border-color: transparent;
	background-color: transparent;
	/* font-size: 20; */
	color: #1F2532;
	padding: 0;
	margin: 0;
}

.input {
  background-color: #EEF3F6;
  border-radius: 50%;
  border-color: #BDBDBD;
  border-width: 1;
  text-align: center;
  color: black;
  placeholder-color: black;
  margin-bottom: 15;
  height: 35;
  font-size: 15;
  font-height: 15;
}

.input-full-width {
  width: 70%;
}

.input-m4-width {
  width: 30%;
}

.input-m8-width {
  width: 60%;
}

.active {
  border-color: blue;
  border-width: 1;
}

</style>
