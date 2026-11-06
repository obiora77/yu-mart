<template>
   <section class="register">
      <div class="form-containet">
         <div class="col col-1">
            <div class="image-layer">
               <img src="../assets/shopping-bag-cart.jpg" alt="">
            </div>
         </div>

         <div class="col col-2">
            <div class="login-form" :style="loginStyle">
            <h1>welcome back</h1>
               <div class="form-title">
                  <span>Sign in to your account to continue</span>
               </div>
               <div class="form-inputs">
                  <div class="input-box">
                     <input type="email" class="input-field" placeholder="Email" required>
                     <Icon icon="line-md:account-small" width="24" height="24" class="icon"/>
                  </div>
                  <div class="input-box">
                     <input type="password" class="input-field" placeholder="Password" required>
                  </div>
                  <div class="forget-pass">
                     <a href="#">forgot password</a>
                  </div>
                  <div class="input-box">
                     <button class="input-submit" :disabled="isSubmitting">
                        <span v-if="!isSubmitting">Sign In</span>
                        <span v-else>Signing In...</span>
                        <Icon icon="line-md:arrow-small-right" width="24" height="24" />
                     </button>
                  </div>
               </div>
               <div class="google-btn">
                  <a href="" class="google-icon">
                     <img src="../assets/google_g_icon.svg" alt="google-icon">
                     <span>Sign up with Google</span>
                  </a>
               </div>
               <div class="sign">Don't have an account? 
                  <button class="tosignup" @click="showRegister">Sign up</button>
               </div>
            </div>

            <div class="register-form" id="signup" :style="registerStyle">
               <h1>create account</h1>
               <div class="form-title">
                  <span>Sign in to your account to continue</span>
               </div>
               <div class="form-inputs">
                  <div class="input-box">
                     <input type="text" class="input-field" placeholder="User Name" required>
                     <Icon icon="line-md:account-small" width="24" height="24" class="icon"/>
                  </div>
                  <div class="input-box">
                     <input type="email" class="input-field" placeholder="Email" required>
                     <Icon icon="line-md:email-opened-twotone" width="24" height="24" class="icon" />
                  </div>
                  <div class="input-box">
                     <input type="password" class="input-field" placeholder="Password" required>
                     <i class='bx bx-lock-alt icon'></i>
                  </div>
                  <div class="input-box">
                     <button class="input-submit">
                        <span>Sign Up</span>
                        <Icon icon="line-md:arrow-small-right" width="24" height="24" />
                     </button>
                  </div>
               </div>
               <div class="google-btn">
                  <a href="" class="google-icon">
                     <img src="../assets/google_g_icon.svg" alt="google-icon">
                     <span>Sign up with Google</span>
                  </a>
               </div>
               <div class="sign">Already have an account?
                  <button @click="showLogin" class="login" id="login">Sign in</button>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const isSubmitting = ref(false)
const isRegistering = ref(false)

const showRegister = () => {
   isRegistering.value = true
}

const showLogin = () => {
   isRegistering.value = false
}

const loginStyle = computed(() => ({
   left: isRegistering.value ? '-50%' : '50%',
   transform: 'translateX(-50%)',
   opacity: isRegistering.value ? 0 : 1,
   transition: '.3s'
}))

const registerStyle = computed(() => ({
   left: isRegistering.value ? '50%' : '-50%',
   transform: 'translateX(-50%)',
   opacity: isRegistering.value ? 1 : 0,
   transition: '.3s'
}))

const signIn = () => {
   isSubmitting.value = true
   setTimeout(() => {
      isSubmitting.value = false
   }, 2000)
}
</script>

<style scoped>

.register {
   background-position: center;
   background-size: cover;
   background-attachment: fixed;
   background-repeat: no-repeat;
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   padding: 0 20px;
}
.form-containet {
   display: flex;
   width: 1000px;
   height: 600px;
   border: 3px solid rgba(14, 235, 99, 0.507);
   border-radius: 30px;
   backdrop-filter: blur(8px);
   overflow: hidden;
}
.col-1 {
   width: 55%;
   transition: border-radius .3s;
   overflow: hidden;
}
.image-layer {
   position: relative;
   height: 100vh;
}
.image-layer img {
   width: 100%;
   height: 100%;
}
.col-2 {
   position: relative;
   width: 45%;
   padding: 20px;
   overflow: hidden;

}
.col-2 h1 {
   display: flex;
   align-items: center;
   justify-content: center;
   text-transform: uppercase;
}
.login-form {
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 100%;
   padding: 0 4vw;
   transition: .3s;
}
.register-form {
   position: absolute;
   left: -50%;
   transform: translateX(-50%);
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 100%;
   padding: 0 4vw;
   transition: .3s;
}
.register-form .form-title {
   margin-block: 40px 20px;
}

.form-title {
   margin: 20px 0;
   font-size: 20px;
   font-weight: 600;
}
.form-inputs {
   width: 100%;
}
.input-box {
   position: relative;
} 
.input-field {
   width: 100%;
   height: 55px;
   padding: 0 15px;
   margin: 10px 0;
   background: rgba(255, 255, 255, 0.466);
   border: none;
   border-radius: 10px;
   outline: none;
   backdrop-filter: blur(20px);
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
::placeholder {
   font-size: 15px;
}
.input-box .icon {
   position: absolute;
   top: 50%;
   right: 15px;
   transform: translateY(-50%);
   color: var(--text);
}
.forget-pass {
   display: flex;
   justify-content: right;
   gap: 14px;
}
.forget-pass a {
   text-decoration: none;
   font-size: 14px;
}
.forget-pass a:hover {
   text-decoration: underline;
}

.input-submit {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   width: 100%;
   height: 55px;
   padding: 0 15px;
   margin: 10px 0;
   font-size: var(--font-size-lg);
   color: var(--primary-50);
   background: var(--primary-600);
   border: none;
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   cursor: pointer;
   transition: .3s;
}
.input-submit:hover {
   gap: 15px;
}
.google-btn {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   width: 100%;
   height: 55px;
   padding: 0 15px;
   margin: 10px 0;
   color: var(--text);
   background: var(--text);
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   cursor: pointer;
   transition: .3s;
}

.google-icon {
   display: flex;
   text-decoration: none;
   color: black;
   font-size: 18px;
}
.google-icon img {
   width: 30px;
   height: 30px;
}
.sign {
   color: var(--gray-900);
   font-size: 14px;
}
.sign button {
   color: black;
   font-weight: 800;
   border: none;
   background: transparent;
   cursor: pointer;
}
@media(max-width: 892px) {
   .form-containet {
       width: 97%;
       margin: 3% 0;
   }
   .col-1 {
       display: none;
   }
   .col-2 {
       width: 100%;
   }
   .btn {
         width: 90%;
   }
}
</style>