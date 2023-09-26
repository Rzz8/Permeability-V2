# Permeability-predictor

Live website: [https://perm-predict-73c262e619d2.herokuapp.com/](https://perm-predict-73c262e619d2.herokuapp.com/)   
<br/> NOTE: It may take up to 20 seconds to load the page and do the first permeability calculation due to inactivity.

The permeability predictor is used to predict coal permeability with drilling and logging data. Permeability describes how permeable certain material is and it directly affects the oil/gas production. During the initial exploration phase, the permeability value/class can also affect our strategy to complete the well construction. 

To use the app, a default user "josh@gmail.com" is put on the login page, and feel free to register as a new user. Simply input the required inputs and it will return the permeability values. Click "job history" to see all performed jobs. Click "delete" to delete the job that you do not want to keep. 

Follow the below steps to run codes in a local IDE (e.g., VS Code): <br />
1: Download the code zip files by clicking the green "Code" button next to the "Add file" button. Then click "Download ZIP" to download the files. <br />
2. Extract files from the downloaded zip files. <br />
3. Open the file folder "Permeability-predictor-master" in VS Code. <br />
4. Open a new terminal and install dependencies for the server: "npm install". <br />
5. Install dependencies for the client: "cd client" and then "npm install". <br />
6. Add an env file (.env) in the main folder with the following variables. "MONGO_URL" is url from MongoDB. JWT_SECRET can be any string (e.g., secret) and JWT_EXPIRES_IN is the expiration time of JWT token (e.g., 1d). <br />
   MONGO_URL = <br />
   JWT_SECRET= <br />
   JWT_EXPIRES_IN= <br />
7. Start the server: "npm run dev". <br />
8. Start the client server: "cd client" "npm start". <br />
9. Go to "http://localhost:3000/" to see the app. 



