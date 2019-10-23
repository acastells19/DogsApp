# Dogs App

Dogs App is a web application to display a top10 dog breeds pie chart based on the amount of images that the [Dog API](https://dog.ceo/dog-api/documentation/) returns for those breeds.

## Project structure

1. _public_: Base _index.html_ file with a single _root_ element and the generic _styles.css_ file.

2. _src_: Main code folder:

* _actions_: Set of Redux actions is defined here.
* _api_: API calls are placed here and separated by domain issue. 
* _components_: The core app implementation, the React components. 
* _reducers_: Set of Redux stores is defined here.
* _resources_: Basically the set of images used by the app. 

3. _.gitignore_: List of files/folders not to be included in the shared repo.

4. _package.json_: Manifest file where all the project specs, dependencies and scrips are defined.

5. _README.md_: This explaining file.

## To run

Clone the repo:
```bash
git clone #repositoryName#
```
Enter the repo folder created:
```bash
cd #repositoryName#
```
Install dependencies:
```bash
npm install
```
Run the project:
```bash
npm run start
```

## Taken decisions

- [React](https://reactjs.org/) & [Redux](https://redux.js.org/) as support/interface building frameworks/libraries: Previous knowledge + personal taste + company preferences.
- [React Google Charts](https://www.npmjs.com/package/react-google-charts) as charts support library: Previous knowledge + good integration with React app.
- [React Scripts](https://www.npmjs.com/package/react-scripts) as project builder library: Previous knowledge + simplicity.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) and [Redux Hooks](https://react-redux.js.org/next/api/hooks): New and better ways to work (needed some little training).
- Including an spinner to make the user understand that some task is being processed: Always give feedback to the user if something is being performed in background, maybe this case wasn't completely necessary because the API responded quite fast but in case of network bad latency a delay on results desplaying may cause confusion. 

## Possible improvements

- Add some unit testing.
- Add some errors handling behavior (based on Dogs API possible error response codes; 404, 500...).
- As suggestions to extensive features; two pages web app with a new page for displaying images based on user input (introducing the breed), encapsulating the Chart in an own component to have a more defined hierarchy (Main component wrapping ChartComponent and Spinner) ...



