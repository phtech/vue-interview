<template>
  <div class="about-mes">
    <div class="card">
      <div class="header">
        <div class="profile-img">
          <img src="./../assets/Avatar.png" />
        </div>
        <div class="profile-snippet">
          <h2>My name is Blake.</h2>
        </div>
      </div>
      <div class="content">
        <p>
          Hello, my name is Blake. I am a developer who develops things. I like
          to make things look good and nice. I also like to make music and go
          outside when the world isn't falling apart.
        </p>
      </div>
    </div>
    <div class="card" id="cool-card">
      <div class="header">
        <div class="profile-img">
          <img src="./../assets/Avatar.png" />
        </div>
      </div>
      <div class="content">
        <div class="profile-snippet">
            <h2>My name is Blake.</h2> 
        </div>
        <p>
          Hello, my name is Blake. I am a developer who develops things. I like
          to make things look good and nice. I also like to make music and go
          outside when the world isn't falling apart.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutMe",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.card {
  width: 57%;
  background: white;
  border-radius: 30px;
  padding: 50px;
  display: inline-block;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}
#cool-card {
  display: inline-flex;
  flex-direction: row;
  h2 {
    margin: 0 0 10px 0;
  }
  .content {
    text-align: left;
    margin:0 0 0 25px;
    p {
        width: 100%;
        display: inline-block;
        margin: 20px auto 0;
    }
  }
}
.profile-img {
  img {
    width: 150px;
    height: 150px;
    border-radius: 300px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
  }
}
.content {
  p {
    width: 100%;
    display: inline-block;
    margin: 20px auto 0;
  }
}
</style>
