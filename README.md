# giraffe_vue_cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

本地存储

```
// Store current user
this.$localStore.set('user', { name:'Marcus' })

// Get current user
this.$localStore.get('user')

// Remove current user
this.$localStore.remove('user')

// Clear all keys
this.$localStore.clearAll()

// Loop over all stored values
this.$localStore.each(function(value, key) {
	console.log(key, '==', value)
})
```