<template>
	<Page actionBarHidden="true">
		<FlexboxLayout class="page">
			<StackLayout>
				<Image class="logo" src="~/assets/images/Logo.png"></Image>
			</StackLayout>
		</FlexboxLayout>
	</Page>
</template>

<script>
import Intro from "./Intro";

export default {
	data() {
		return {};
	},
	methods: {
		navigationTimer() {
			setTimeout(this.loadIntroPage, 2000);
		},
		loadIntroPage() {
			this.$navigateTo(Intro, {
				clearHistory: true,
				animated: true,
				transition: {
					name: "sldeTop",
					duration: 500
				}
			});
		}
	},
	created() {
		this.navigationTimer();
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
	margin-top: 40%;
	width: 60%;
}

</style>
