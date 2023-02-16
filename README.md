# FCM Mobile Technical Challenge

## What
FCM Digital team want to launch a new shiny travel guide app. We found that we have the chance to deliver a great product to our travelers. All best information about main world cities in their hands.

## Why
Our current app is the best business itinerary app for FCM customers and we want to offer them a good curated travel guide, without risking the usability of main app in terms of disk usage and complexity. KISS principle.

## How
As we are tech enthusiasts we want to improve our infrastructure, so we decided to implement a GraphQL API to be consumed by our frontend team. Many developers love this technology and after some research we think it fits perfectly for mobile and web apps using React. 

We need your help to build a first prototype in react native, so we can test the potential of using this technology.

## Brief
First version of the app needs to have following things:
- Home screen with cities list
- Detail city screen or embedded component in the list with some useful information as city name, currency, some monuments to visit and some restaurants

## Delivery
Final solution is up to you, there are as many solutions as developers exists. You decide how to present the MVP taking design, usability, architecture and completeness decisions.

## How to use challenge API
To run GraphQL API execute following command

````
yarn run graphql
````

It will launch a local graphql in ```http://localhost:3000/``` to use as graphql endpoint in your app.

This local server gives you all data from ```db.js``` file and you can test your graphql queries with integrated GraphiQL IDE in ```http://localhost:3000/graphql```

````
Example queries

query {
  City(id: 2) {
    name
  }
}

query {
  allCities {
    name
  }
}
````

## How to use Graphql in react native

React native community recommends Apollo Client as the best library to use GraphQL in mobile (Visit https://www.apollographql.com/docs/react/)








