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

## Possible improvements



