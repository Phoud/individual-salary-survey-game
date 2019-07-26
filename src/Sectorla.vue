<template>
	<div class="section">
		<div class="mt-40 has-text-centered">
			<img class="logo" src="https://108.jobs/images/logo.svg" alt="">
		</div>
		<div class="question mt mb">
			<p>Q. ທຸລະກິດຂອງທ່ານນອນຢູ່ໃນໝວດໝູ່ໃດ?</p>
			<span class="span">ກະລຸນາເລືອກຂະແໜງການທຸລະກິດຂອງທ່ານລຸ່ມນີ້.</span>
		</div>
		<div class="columns is-multiline">
			<div v-for="(sector, index ) in sectors" :key="index" class="column is-4-desktop is-6-tablet is-12-mobile">
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
					name: 'ອົງການຈັດຕັ້ງສາກົນ',
					link: 'https://forms.gle/xuwq42i7YcZVXphS7'
				},
				{
					name: 'ພະລັງງານນໍ້າ / ການຂຸດຄົ້ນບໍ່ແຮ່',
					link: 'https://forms.gle/gHC8KtFu1yDqMrqB7'
				},
				{
					name: 'ການຄ້າ / ການຈັດຈໍາໜ່າຍ',
					link: 'https://forms.gle/4t8ZNwuwMXCawK6L8'
				},
				{
					name: 'ທະນາຄານ / ການເງິນຈຸລະພາກ / ເຊົ່າສິນເຊື່ອ',
					link: 'https://forms.gle/syXnAfNZVFAZgSsFA'
				},
				{
					name: 'ໂຮງແຮມ / ການບໍລິການ / ການທ່ອງທ່ຽວ',
					link: 'https://forms.gle/2MFQPneApCZ8AYDV6'
				},
				{
					name: 'ລົດຍົນ',
					link: 'https://forms.gle/V7UaQDfdcy2z82cr5'
				},
				{
					name: 'ໄອທີ / ການສື່ສານໂທລະຄົມມະນາຄົມ',
					link: 'https://forms.gle/nrZ3UjWLMEf9MeKq7'
				},
				{
					name: 'ປະກັນໄພ',
					link: 'https://forms.gle/VMhB8DPbn7EEizLy6'
				},
				{
					name: 'ການກໍ່ສ້າງ / ສະຖາປັດຕະຍະກໍາ',
					link: 'https://forms.gle/sMRMQYesKrFLszAz7'
				},
				{
					name: 'ອື່ນໆ',
					link: 'https://forms.gle/pWJrWeRHn1Bhobkb8'
				}
				]
			}
		}
	}
</script>
<style>
@font-face {
    font-family: "noto-medium";
    src: url(assets/NotoSansLao-Medium.ttf) format("truetype");
}
body{
	font-family: 'noto-medium', sans-serif;
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