# Data-Dictionary-Dynamic

This Project was created to design a Meta Data Definitions page with Google Spreadsheet as a Back-end. 
Data for this page is hosted on a Google Spreadsheet which is queried during load time to generate viewable content for target users.

URL:http://wwwdev.csueastbay.edu/pioneer-data-warehouse/data-dictionary-dynamic.html
![image](https://cloud.githubusercontent.com/assets/7992156/24019227/79161f6e-0a54-11e7-9490-cc51081545c6.png)


GoogleSpreadsheet method in JQuery is used to query the Backend(Google Spreadsheet) for each record as a JSON object.
![image](https://cloud.githubusercontent.com/assets/7992156/24019484/6212300e-0a55-11e7-830c-9566fa900876.png)

The Parsed JSON Obejct is then passed to partitionJson method(located in jquery-json-divide.js file) for sorting and classification.

google_spreadsheet
![image](https://cloud.githubusercontent.com/assets/7992156/24019378/f7aee8ba-0a54-11e7-9578-4ed98216145b.png)

The Resultant JSON Data is then parsed and looped through to display via Table tags. 
JQuery methods like hide() and show() are used to create a toggle effect better Data Representation along with Page length management.

Data Organized as shelves using JQuery
![image](https://cloud.githubusercontent.com/assets/7992156/24019722/6e907f2e-0a56-11e7-8e80-60c5c7bbc8ca.png)

These Rows are auto generated which :

Get Updated on Load
New rows are added automatically
The List View UI remains consistent
Identifies links and assigns <a> tag to make them clickable and redirect user to the specified URL.

![image](https://cloud.githubusercontent.com/assets/7992156/24019823/dafd394a-0a56-11e7-9f25-588e430e9500.png)
