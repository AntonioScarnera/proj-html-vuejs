<template>
  <div class="form-style d-flex flex-wrap justify-content-center py-4">
    <div>
      <img src="../assets/images/marketing-consultant-expert.jpg">
    </div>
    <span class="w-100 text-center">Richard Madsen</span>
    <p>Marketing Consulting Expert</p>
    <span>
      <i class="fa-solid fa-phone"></i>
      <span class="phone">(555)802-1234</span>
    </span>
    <form class="d-flex flex-wrap justify-content-center gap-2">
      <input type="text" name="name" placeholder="Your Name*" required>
      <input type="text" name="email" placeholder="Ypur Email*" required>
      <input type=" tel" name="phone-number" placeholder="Your Phone Number*" required>
      <button class="callback">Get a Callback</button>
    </form>
  </div>
</template>

<script>
export default {
name: 'InputsForm'
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.form-style{
  width: 280px;
  background-color: $white;
  border-radius: 7px;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.212);
  img{
    width: 40px;
    border-radius: 50%;
  }
  .phone{
    color: $ecstasy;
    margin-left: 5px;
  }
  input{
    padding: 10px;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 10px;
  }

  .callback{
    background-color: $ecstasy;
    color: $white;
    border: 0;
    width: 215px;
    border-radius: 10px;
    padding: 5px 15px;
  }
}


</style>