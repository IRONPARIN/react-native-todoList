# ModularKit

## How to setup

- Change the name at src/app.js file which is given as a parameter to AppRegistry.
- Change the name at src/config/project.js file which is given as a project name.
- Change the name and version accordingly on package.json.
- run ```$npm install``` for install all dependency.
- run ```$react-native upgrade``` to generate /ios and /android folders again.
- run ```$react-native link``` for any external dependency.
- finally run ```$react-native run-ios``` or anything you want.

## Json server

- Install json-server ```npm install -g json-server```
- Create file db.json
- Start json-server ```json-server --watch db.json```