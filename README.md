# PCC_HS_UI_project.

This is a project for a simple blog post

## Instructions to set up project
1. Open terminal from VScode inside your project folder (Click View -> Terminal)
2. Ensure you have nodeJS installed, You can type  `node --version` and `npm --version` in the terminal to make sure you have everything installed correctly, you should see output like to following (Version does not matter):
>node --version\
v22.4.1 \
npm --version \
10.8.1
3. Once you check for node installation, run the following (This will install all dependant libraries for the backend application):
> cd backend \
npm install
4. You can start the backend to the application by running `npm run start`. if it starts successfully you will see something like this: `Server is Successfully Running, and App is listening on port 3001`
5. Open another terminal from VScode, there will be a small + (plus) on the top right of the existing terminal which will open a new terminal
6. In the new terminal enter te following: 
> cd blog-metrics-app \
npm install
7. You can start the frontend  application by running `npm run start`. if it starts successfully you will see something like this: 
> Compiled successfully!\
\
You can now view blog-metrics-app in the browser.\
\
  Local:            http://localhost:3000        \
  On Your Network:  http://172.30.34.179:3000    \
  \
Note that the development build is not optimized.\
To create a production build, use npm run build. \
\
webpack compiled successfully
8. The app should open on your brower already if it does not you can navigaet to the application by searching for `http://localhost:3000` on your browser
9. When you make changes to the UI all you need to do is save the file and refresh the browser no need to restart the application