<template>
  <div class="content">
      <h1>Default Page</h1>
      <ul>
          <li>
              <h2>test</h2>
          </li>
          <li>
              <h2><router-link to="/Login">Login</router-link></h2>
              </li>
          <li>
              <h2><router-link to="/HelloWorld">HelloWorld</router-link></h2>
              </li>
        <!-- <li>
            <h2>
                <router-link to="/Platform">Platform</router-link>
            </h2> -->
        </li>
      </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 400px;
  margin: 40px auto 40px auto;
}
</style>
