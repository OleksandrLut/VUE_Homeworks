<template>
  <div class="contacts page">
    <div class="contacts__container">
      <div class="contacts__body">
        <h1 class="contacts__title">Contact Us</h1>

        <div class="contacts__address address">
          <h3 class="address__title">Address:</h3>
          <div class="address__content">
            <p>ComfortRide Express</p>
            <p>123 Main Street,</p>
            <p>Cityville, State, 12345</p>
          </div>
        </div>

        <div class="contacts__phone phone">
          <h3 class="phone__title">Phone:</h3>
          <p>General: <a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a></p>
          <p>Support: <a href="tel:+1 (555) 987-6543">+1 (555) 987-6543</a></p>
        </div>

        <div class="contacts__email email">
          <h3 class="email__title">Email:</h3>
          <p>General: <a href="mailto:info@comfort-ride.com">info@comfort-ride.com</a></p>
          <p>Support: <a href="mailto:support@comfort-ride.com">support@comfort-ride.com</a></p>
        </div>

        <div class="contacts__hours hours">
          <h3 class="hours__title">Business Hours:</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>SSaturday - Sunday: Closed</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.contacts {
		// .contacts__container
		&__container {}
		// .contacts__body
		&__body {}
		// .contacts__title
		&__title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 40px;}
		// .contacts__address
		&__address {}
		// .contacts__phone
		&__phone {}
		// .contacts__email
		&__email {}
		// .contacts__hours
    &__address,
    &__phone,
    &__email {
      margin-bottom: 30px;
    }
}
.page {
}
.address {
		// .address__title
		&__title {
      
    }
		// .address__content
		&__content {}
}
.phone {
		// .phone__title
		&__title {}
		// .phone__email
		&__email {}
		// .phone__hours
		&__hours {}
}
.email {
}
.hours {
}
.address__title,
.phone__title,
.email__title,
.hours__title{
  font-weight: 500;
  margin-bottom: 15px;
}
p{
  line-height: 1.5;
}
a{
  color: rgb(50, 50, 187);
}
</style>