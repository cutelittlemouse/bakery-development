# Development

### Link to Deployed Website
`https://cutelittlemouse.github.io/mouse/`

### Goal and Value of the Application
The application is designed for a pet owner with many mice who is trying to figure out how many cheese to prepare in order to feed selected mice. 

### Usability Principles Considered
The user can sort mice alphabetically or by age, filter by type and favorite activites to select mice easily.

### Organization of Components
There're a total of four components: App, Bar, Aggregator, and Mouse.
Under the main App component, there's a Bar component containing all the sorting options and filters. Below the bar is the Aggregator component. Then there's a list of mice, which are all Mouse components. 

### How Data is Passed Down Through Components
Props is used to pass down data through components. In App, two states called cheese and cartNames are shared between Aggregator and Mouse, so these two states and their set functions are passed down accordingly. The Bar component inherits data and its set function, because that's the data displayed in App. I use destructed props in the child components. 

### How the User Triggers State Changes
For sort and filter: users click on the respective button and trigger a handle function in Bar, which changes the state variables sortType (a string), filters (a two-element list recording sort type), and data. 
For add and remove from cart: users click on the button, changes the button from, changes the states cartName and cheese, and the item is added (or removed) from the aggregator. 