<template>
  <div class="section">

    <div class="columns is-multiline">
      <div class="column is-half is-offset-one-quarter">
        <div class="mt-30 has-text-centered">
          <img class="logo" src="https://108.jobs/images/logo.svg" alt="">
        </div>
        <hr>
        <form action="">
          <div class="field">
            <label class="label">ຊື່ ແລະນາມສະກຸນ</label>
            <div class="control">
              <input :class="{'input is-primary': true, 'is-danger': errors.has('name')}" v-validate="'required'" name="name" type="text" v-model="name" placeholder="ຊື່ ແລະນາມສະກຸນ">
            </div>
            <span style="color: red;">{{ errors.first('name') }}</span>
          </div>
          <div class="field">
            <label class="label">ເບີໂທ</label>
            <div class="control has-icons-left">
              <input :class="{'input is-primary': true, 'is-danger': errors.has('phone')}" v-validate="'required|min:7|max:8'" name="phone" type="number" v-model="phone">
          <span class="icon is-small is-left">020</span>
            </div>
            <span style="color: red;">{{ errors.first('phone') }}</span>
          </div>
          <div class="field">
            <label class="label">ທີ່ຢູ່ອີເມວ</label>
            <div class="control">
              <input :class="{'input is-primary': true, 'is-danger': errors.has('email')}" v-validate="'required|email'" name="email" v-model="email" placeholder="ອີເມວ">
            </div>
            <span style="color: red;">{{ errors.first('email') }}</span>
          </div>
          <div class="field">
            <label class="label">ຕໍາແໜ່ງ</label>
            
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option selected="" disabled="">ເລືອກຕໍາແໜ່ງ</option>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
            
          </div>
          <div class="field">
            <label class="label">ເງິນເດືອນປັດຈຸບັນ (ເງິນກີບ)</label>
            <div class="control">
             <!-- <p style="font-weight: bold; margin-bottom: 5px;">ຈໍານວນເງິນ: {{ salary | currency(' ກີບ', 0, { symbolOnLeft: false }) }}</p>  -->
             <VueAutonumeric :options="{

            currencySymbol: ' ₭'

          }" :class="{'input is-primary': true, 'is-danger': errors.has('salary')}" v-validate="'required|min:7|max:8'" name="salary" v-model="salary" :placeholder="'ເງິນເດືອນ'"></VueAutonumeric>
           </div>

           <span style="color: red;">{{ errors.first('salary') }}</span>
         </div>
         <div class="field">
          <label class="label">ເງິນເດືອນທີ່ຕ້ອງການໃນອະນາຄົດ (ເງິນກີບ)</label>
          <div class="control">
           <!-- <p style="font-weight: bold; margin-bottom: 5px;">ຈໍານວນເງິນ: {{ futureSalary | currency(' ກີບ', 0, { symbolOnLeft: false }) }}</p>  -->
           <VueAutonumeric :options="{

            currencySymbol: ' ₭'

          }" :class="{'input is-primary': true, 'is-danger': errors.has('futureSalary')}" v-validate="'required|min:7|max:8'" name="futureSalary" v-model="futureSalary" :placeholder="'ເງິນເດືອນທີ່ຕ້ອງການໃນອະນາຄົດ'"></VueAutonumeric>
         </div>

         <span style="color: red;">{{ errors.first('futureSalary') }}</span>
       </div>
       <div class="field">
        <div class="control">
         
        </div>
      </div>
    </form>
  </div>
</div>
</div>
</template>

<script>
  import VueAutonumeric  from 'vue-autonumeric';
  import {Validator} from 'vee-validate';
  const dict = {
    custom: {
      email: {
        required: 'ກະລຸນາປ້ອນອີເມວຂອງທ່ານ',
        email: 'ອີເມວບໍ່ຖືກຕ້ອງ'
      },
      name: {
        required: 'ກະລຸນາປ້ອນຊື່ ແລະນາມສະກຸນ'
      },
      salary: {
        required: 'ກະລຸນາປ້ອນເງິນເດືອນ',
        min: 'ກະລຸນາປ້ອນສະກຸນເງິນກີບ 7 ຕົວເລກຂື້ນໄປ',
        max: 'ຈໍານວນເງິນທີ່ທ່ານປ້ອນຫຼາຍເກີນໄປ ກະລຸນາກວດຄືນ'
      },
      futureSalary: {
        required: 'ກະລຸນາປ້ອນເງິນເດືອນ',
        min: 'ກະລຸນາປ້ອນສະກຸນເງິນກີບ 7 ຕົວເລກຂື້ນໄປ',
        max: 'ຈໍານວນເງິນທີ່ທ່ານປ້ອນຫຼາຍເກີນໄປ ກະລຸນາກວດຄືນ'
      },
      phone: {
        required: 'ກະລຸນາປ້ອນ ເບີໂທລະສັບຂອງທ່ານ',
        min: 'ເບີໂທບໍ່ຖືກຕ້ອງ ກະລຸນາກວດຄືນອີກຄັ້ງ',
        max: 'ເບີໂທບໍ່ຖືກຕ້ອງ ກະລຸນາກວດຄືນອີກຄັ້ງ'
      },
    }
  }

  Validator.localize('en', dict);
  export default {
    name: 'app',
    data () {
      return {
        name: '',
        email: '',
        salary: '',
        futureSalary: '',
        phone:''
      }
    },
    created(){
      this.$validator.localize('en', dict);
    },
    components: {
        VueAutonumeric
    },
    methods:{
      
    }
  }
</script>
<style>
@font-face {
  font-family: "noto-medium";
  src: url(assets/NotoSansLao-Medium.ttf) format("truetype");
}
body .section{
  font-family: 'noto-medium', sans-serif;
}
input{
  font-family: 'noto-medium', sans-serif;
}
select{
  font-family: 'noto-medium', sans-serif;
}
.mt-30{
  margin-top: 30px;
}
.logo{
  max-height: 120px;
}
</style>