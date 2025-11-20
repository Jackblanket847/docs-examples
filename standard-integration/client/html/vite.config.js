```js
            export default defineConfig({

                server: {
                    proxy: {
                        "/api": {
                            target: "http://10.0.0.53:8080", // Replace with your server URL
                            changeOrigin: true,
                        },
                    },
                },
            });
        ```