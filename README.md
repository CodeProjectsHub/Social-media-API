# Social-media-API
API to expose users and their blogs from mongoDB database. Written in node.js

HTTP status codes used:

200 :successful response

404 : not found

500: internal server error

400: Authorization error for wrong passwords.

Routes/endpoints and Payloads:


1) New user signup - http://localhost:8080/api/user/signup

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/0e8beb9b-635f-4612-abe0-4df220811834)

2) Login user - http://localhost:8080/api/user/login

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/8928e668-0614-4251-b424-cfd259ae5763)

3) Get all users from user collection - http://localhost:8080/api/user/

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/ceebfade-fc3e-46d9-b26b-478276903c4d)

4) Adding a new blog for given user - http://localhost:8080/api/blogs/add

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/1cbf0112-faf8-4ad7-ac48-88552efb3c43)

5) Update blog by id - http://localhost:8080/api/blogs/update/6473a979d3f60546f3aa9255

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/c50f4bee-9e42-47ae-8a60-caca88ff07a9)






