# Command to run the specs files:
npx wdio run wdio.conf.js

#Commands to install the Environment for the existing project:
1.Please have installed Node.js and Java Development Kit (JDK) (Selenium Server is a Java application).
2.Install IDE (for ex. WebStorm)
3.Open the existing project
4.Run npm install
5.Use command to run spec files: npx wdio run wdio.conf.js

#Commands to install the Environment for the new project:
1.Please install Node.js and Java Development Kit (JDK) (Selenium Server is a Java application).
2.Create a directory for your project mkdir project-name && cd project-name
3.Install IDE (for ex. WebStorm)
4.Run npm init
5.Run npm i --save-dev @wdio/cli
6.Run npx wdio config to configure Webdriverio manually:
? Where is your automation backend located? (Use arrow keys)
❯ On my local machine
? Which framework do you want to use? (Use arrow keys)
❯ mocha
? Do you want to run WebdriverIO commands synchronous or asynchronous? (Use arrow keys)
❯ sync
? Are you using a compiler? (Use arrow keys)
❯ Babel (https://babeljs.io/)
? Which reporter do you want to use?
❯◉ allure
? Do you want to add a service to your test setup?
◉ chromedriver
7.Run npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
8.Run npm i @wdio/sync
9. Create files for your project



