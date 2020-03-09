# FriendFinder (Frinder)

* App : https://frinder-hw-382020.herokuapp.com/

### Description
* This is a compatibility-based "FriendFinder" application. It will ask user to fill a survey which contians 10 questions and each questions are scale-based. The user also needs to enter a name and a picture url (for now).
* This app is not using any database (for now), instead, it uses a array variable as a "dummy database" to store all the user's information. So every time the server closed, the data will be deleted. But it is also not too difficult to implement it on a real database (i.e. mySQL).
* Once the user submit the survey, the server will use a simple algorithm to find the person in the database that has the minimum score difference and show it to the user. Then the users' infomation will be saved for future matching.
* It also provide a api to get all the current users's data. As long as it is not a production level app, such dangerous api acces should be fine :).

### Note
* The server will perform a input data validation in case of modified form values from the client side and incomplete form. It will not validate the url for simplicity and practical reasons. If using database to store user's infomation, one can consider storing the actual image instead of a url, which seems more reasonable and practical.

### Demo

* Note: for testing purpose, you can use this url [https://picsum.photos/200/300](https://picsum.photos/200/300) to generate random picture. 

[!demo](demo/demo.gif)


* server side validation in case some form value are modified on the client side.

[!demo-server-side-validatoin](demo/demo-server-side-validation.gif)

