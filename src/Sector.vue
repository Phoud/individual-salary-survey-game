<template>
	<div class="section">
		<div class="mt-40 has-text-centered">
			<img class="logo" src="https://108.jobs/images/logo.svg" alt="">
		</div>
		<div class="question mt mb">
			<p>Q. What is your business sector?</p>
			<span class="span">Please choose your type of business sector below.</span>
		</div>
		<div class="columns is-multiline">
			<div v-for="sector in sectors" class="column is-4-desktop is-6-tablet is-12-mobile">
				<a :href="sector.link">
					<div class="card">
						<div class="card-content">
							<div class="media">
								<div class="media-content">
									<p class="title is-6">{{ sector.name }}</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				sectors:[
				{
					name: 'INTERNATIONAL ORGANIZATION',
					link: 'https://forms.gle/41zqYqCEAeqNxTrW9'
				},
				{
					name: 'HYDROPOWER / MINING',
					link: 'https://forms.gle/AcNmFtoVr6S7VGrW9'
				},
				{
					name: 'TRADING / DISTRIBUTION',
					link: 'https://forms.gle/1iGFUwsTRkiZMpAJ6'
				},
				{
					name: 'BANKING / MICROFINANCE / LEASING',
					link: 'https://forms.gle/eD8AD5HyuHhq3uSM7'
				},
				{
					name: 'HOTEL / HOSPITALITY / TOURISM',
					link: 'https://forms.gle/Gqp5XQUnmF1aaEnY8'
				},
				{
					name: 'MOTOR VEHICLES',
					link: 'https://forms.gle/yRTRasQjrvYFxzxJA'
				},
				{
					name: 'IT / TELECOMMUNICATION',
					link: 'https://forms.gle/UP2iVyJyEwfCcgE96'
				},
				{
					name: 'INSURANCE',
					link: 'https://forms.gle/kZJ2E6Tr39fTrRch8'
				},
				{
					name: 'CONSTRUCTION / ARCHITECTURE',
					link: 'https://forms.gle/SnyTBJiChYV2SrWg7'
				},
				{
					name: 'OTHERS',
					link: 'https://forms.gle/twMkjCzjbZAsmfh4A'
				}
				]
			}
		}
	}
</script>
<style>
body{
	font-family: 'Roboto', sans-serif;
}
.mt{
	margin-top: 10px;
}
.mb{
	margin-bottom: 20px;
}
.question{
	font-size: 25px;
}
.card{
	height: 67px;
}
.span{
	font-size: 15px;
}
</style>