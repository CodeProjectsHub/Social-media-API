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

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/5105934e-7c4f-465e-8b51-3ef9e2515500)


5) Update blog by id (blog id) - http://localhost:8080/api/blogs/update/id

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/c50f4bee-9e42-47ae-8a60-caca88ff07a9)

6) Get blog by id (blog id) - http://localhost:8080/api/blogs/id

 ![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/8ec671c4-848a-4959-953d-c8ba7ea6e435)
 
 7) Get all blogs - http://localhost:8080/api/blogs/

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/b85a2a05-7919-4284-8550-c4ea569ddadf)

8) Get all blogs of user by user id - http://localhost:8080/api/blogs/user/id

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/d920ca9e-392d-4fdb-b63e-58c29ee8a2e5)

9) Delete bog by blog id - http://localhost:8080/api/blogs/id

![image](https://github.com/CodeProjectsHub/Social-media-API/assets/126147374/12477916-f633-4b2d-ac77-eea871ada159)







