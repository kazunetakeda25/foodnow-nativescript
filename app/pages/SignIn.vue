<template>
	<Page class="page" actionBarHidden="true">
		<GridLayout columns="*" rows="*">
			<StackLayout>
				<StackLayout ref="navbar" height="350">
					<GridLayout class="nav-bar" columns="50,*,50">
						<Ripple
							rippleColor="black"
							col="0"
							row="0"
							marginLeft="10"
							width="40"
							rippleBorderRadius="20"
						>
							<Image src="~/assets/images/btn-menu.png"></Image>
						</Ripple>
						<Ripple
							rippleColor="black"
							col="2"
							row="0"
							marginRight="10"
							width="40"
							rippleBorderRadius="50%"
						>
							<Image src="~/assets/images/btn-cart.png"></Image>
						</Ripple>
					</GridLayout>
				</StackLayout>
			</StackLayout>
		</GridLayout>
	</Page>
</template>

<script>

export default {
	data() {
		return {
		};
	},
	methods: {
		
	}, 
	mounted() {
		
	}
};
</script>

<style scoped>
.page {
	background-color: white;
}

.nav-bar {
	margin-top: 40;
	height: 40;
}

</style>
