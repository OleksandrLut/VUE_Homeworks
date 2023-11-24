<template>
  <div class="main page">
    <div class="main__container">
      <div class="main__body">
        <h1 class="main__title">
          Welcome to the website of <span>HorizonHaven Transit</span>, your passenger transportation company!
        </h1>
        <p>
          We are delighted to welcome you to the online space where every journey becomes a significant adventure, and
          every customer is our esteemed passenger.
        </p>
        <p>
          Our mission is to provide reliable, comfortable, and safe transportation, creating unforgettable experiences for
          each traveler. We strive for high standards of quality and service excellence, aiming to make your travels
          enjoyable and convenient.
        </p>
        <p>
          Join us on our journey, where every moment is an opportunity to discover something new, feel comfort, and trust
          in every kilometer. Thank you for choosing us, and we are confident that together we will make your journeys
          unparalleled!
        </p>
        <p>
          Welcome to our community of passengers, where everyone is a part of a large family of travelers.
        </p>
    </div>
      <div class="main__picture">
        <img src="https://www.autocentre.ua/wp-content/uploads/2022/07/maxresdefault-1-edit-974452781137765.jpg" alt="image">
      </div>
  </div>
</div></template>

<script>
// @ is an alias to /src

export default {
  name: "MainView",
  components: {
  },
};
</script>

<style lang="scss" scoped>
.main {
		// .main__container
		&__container {
    }
		// .main__title
		&__title {
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 40px;
      span{
        color: rgb(17, 79, 179);
      }
    }
    p{
      text-indent: 30px;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    &__body{
      margin-bottom: 30px;
    }
    // .main__picture
    &__picture {
      width: 100%;
      img{
        width: 100%;
        object-fit: contain;
      }
    }
}
.page {
}

</style>
