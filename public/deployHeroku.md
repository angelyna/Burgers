Note
This is a 101 Guide about how to deploy your app on HEROKU with JawsDB MySQL. The code is slightly different if your app is coded with sequelize, and this is not discussed in this post.

You are here
So your app runs beautifully in your local browser! You managed to successfully deploy it on Heroku! And just when you pressed the 'Open app' button ... the browser thinks and states ... Application Error !!!

![Heroku Error Screen](/img/error_screen.png)

Oh no, no, no!!! Type ‘heroku logs –tail’ in your terminal and it rains with errors! What on earth is this??? Simply put, the app runs perfectly fine on your localhost at your defined port (eg.3000), but fails to run on Heroku. Why? Because Heroku runs your node.js app ‘differently’ than your local machine. Let’s untangle these errors in 5 steps, in a beginner’s guide fashion:

STEP 1: Update your Heroku account with your credit card information. 

Heroku collects this info to preclude potential inappropriate user behavior.
        Open Heroku Account Settings in your Heroku dashboard browser. Click on 'Manage Account', then select 'Billing', and then 'Billing Information'. Fill in the info and save to update your account with this information. 

![Heroku Credit Card Screen](/img/creditcard_screen.png)

STEP 2: Choose a name for your app and then create it in Heroku. 
        You can do it on your terminal by typing the following command: heroku create your_app_name. Do not use quotation marks when specifying your app name. Refresh Heroku browser to see the app name you just created. Alternatively you can create your app name directly in the browser on Heroky.

STEP 3: Obtain JawsDB MySQL settings for your app.
        In Heroku browser, select your_app_name tab, then click on Resources tab, then click on Find more 'add_ons' tab. 

![Heroku add_ons](/img/add_ons.png)

This will open the Heroku Adds_on page, which is a source of tools to operate your app. Scroll down the page to find JawsDB MySQL tab – the blue shark icon – and click on it to open the JawsDB MySQL page. Again, Scroll down to find the 'Plans and Pricing' area and select 'Kitefin Shared free'. This is the first option on their list and it is free. Carefully select it. It opens the plan details and together with it, the Install JawsDB MySQL button. 

![Heroku Install_Jaws_DB](/img/installJawsDB.png)

Install it. Once completed, Heroku will provide you with the connection settings for JawsDB MySQL. You need these settings to configure the connection in your local MySQLWorkbench, to ultimately be able to connect and perform CRUD operations in your app database through Heroku.

![Heroku config1_screen](/img/config1.png)

![Heroku config2_screen](/img/config2.png)

STEP 4: Create a MySQLWorkbench connection. Configure it with your Heroku JawsDBMySQL settings.
 
In your local machine, open MySQL Workbench to create a new connection. Once the 'Set Up a New Connection' window pops up fill in your app Heroku settings provided:
  Fill in Connection name: enter your choice 
  Connection Type: enter Standard TCP/IP
  Hostname: enter the hostname provided by JawsDB MySQL, it ends in amazonaws.com 
  PORT: enter 3306 (the MySQLWorkbench PORT)
  Username: enter the username provided by JawsDB MySQL 
  Password: enter the password provided by JawsDB MySQL 
  Default Schema: enter the Database name provided by JawsDB MySQL 

![Heroku connection.js](/img/herokuConnection.png)

If your MySQL Workbench has a field requesting the Connection String, fill it in as provided by the JawsDB MySQL. Otherwise, open this connection and create your first query. Inside it create the database table, and add in some data (INSERT INTO TABLE ... you know it!). Run your query. Once successfully created - with no errors -, you can close MySQL Workbench. In the next step you have to update your app with the newly created config.

STEP 5: Update your app connections configuartion with the JawsDB MySQL settings

This step depends upon your app structure. However, generally speaking you have to update two files: connection.js and server.js. 

Open your connection.js file (or your app connection configuration file, whatever is named) and add the code to define the Heroku connection with your specific JAWSDB url environment. Then update the server connection file (whatever or your app server configuration file, whatever is named). Your updates should look like these: 

Connection configuration
![app connection.js](/img/connection.png)

Server configuration
![app server.js](/img/server.png)

Once you complete these steps, deploy your app to Heroku. Open your app - it will run successfully.

This guide is intended to help you deploy successfully your db app on Heroku. Connect with me if you encounter any difficulties in this process, or need specific guidance. And most importantly:  'Never, never, never give up ~ Winston Churchill.


