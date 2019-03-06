# Software Requirements Specification for Grades AF

Version 1.0 approved

Prepared by Edwin, Heather, Kath, and Victoria
date created: 2/25/2018

## Revision History

- Name, Date, Reason For Changes, Version
- 02/25/2018 Initial Additions, low level planning.
- 02/27/2018 Met as a group, worked on functional requirements. 
- 03/06/2018 Added onto interface requirements.
## 1. Introduction

### 1.1 Purpose

The product that this document pertains to is our web application that we will be developing to calculate grades. It will have the ability to calculate overall G.P.A., semester G.P.A., course grades based on weights. This SRS describes this single project. This SRS should describe the whole project and it's requirements. 

### 1.2 Document Conventions


The lists throughout this document will be bulleted and bolded to show emphasis on some of our main points and parts of the project. Higher level or parent requirements or elements will have subelements that will shown with indentation. Note: G.P.A. or GPA stands for 'grade point average' which is an educational grading scale based on letter grades and points. 

### 1.3 Intended Audience and Reading Suggestions


This document could be seen by:
- developers
- project managers
- instructor

The remaining part of this document contains information on the project `Grades AF`. 

### 1.4 Product Scope


This project's main purpose is to be an accessible online web app where students can calculate their grades. They will be able to calculate GPA and class grades based on category weights. The goals are to make an easy to navigate interface that is clean and works for all ages. The user should also be able to add as many fields as they want. It will also use computed values to calculate the result without the user having to submit. 

### 1.5 References


Source: [VueJS Documentation] (https://vuejs.org/)
Source: [ExpressJS Documentation] (https://expressjs.com/)
Source: [NodeJS Documentation] (https://nodejs.org/en/docs/)
Source: [Vuetify] (https://vuetifyjs.com/en/getting-started/quick-start)

## 2. Overall Description

### 2.1 Product Perspective


This product is self contained and is designed to be a replacement for an existing software. 

### 2.2 Product Functions


Overview of Product Functions:
- Calculate Cummulative G.P.A.
- Calculate a letter grade 
- Calculate semester G.P.A.

### 2.3 User Classes and Characteristics


**Teenager:** 
&ndash; some education
&ndash; likely to use at end of year/end of terms

**Young Adult:**
&ndash; likely a college student
&ndash; use more frequently; spring and fall/end of semester
&ndash; more education

**Adult:**
&ndash; likely to have a degree
&ndash; uses app to check a child's grades or someone other than their own

### 2.4 Operating Environment


This software will be hosted online using a platform as a service (PaaS), likely Heroku (https://www.heroku.com/). It will have a NodeJS runtime environment and use an express server. There are not currently plans for a database, but if needed, it will use MongoDB (noSQL/schemaless). 

### 2.5 Design and Implementation Constraints


Because we are using a PaaS, we will not have control of hardware and the speeds may be slower. However, we do not plan on having a lot of users, so this should be enough CPU and memory reserved for the app. Refer to **Section 2.4** for more on specific technologies and languages. 

### 2.6 User Documentation


This software is aiming to be very easy to use and self explanatory. So the only documenation will be on the project description and within the interface. There will not be any manuals or tutorials. 

### 2.7 Assumptions and Dependencies


Depending on how different schools, districts, or institutions calculate their grades, there app would have to change. We may also have to include different middlewares in the app, like a body parser or mongoose if the app requires a database. 

## 3. External Interface Requirements

### 3.1 User Interfaces

Because we are going to place it on a website, users can click on input boxes to add infomation about their classes. The 1st box will be the name/number of the class. The second box with be for the grade, and then last box will be for the number of credits. Likely will be designed using Material Design. At minimum 1 grade entry, at maximum 10 grade entries(TBD). An enter key shortcut for user ease. 



### 3.2 Hardware Interfaces

No hardware interface, this will be hosted online using a PaaS. We will not be controlling any parts of this aspect. However, it will be supported on any device that can establish an internet connection because on the mobile friendly design. All communication done over HTTP. HTTPS?


### 3.3 Software Interfaces

- VueJS 2.6.8
- ExpressJS 4.16.4
- Vuetify 2.0.0
- NodeJS 10.15.3
- MongoDB 4.0.0

Connection through Client Server model. Using MVC. Database schema to use strings and integers. 



### 3.4 Communications Interfaces

<Describe the requirements associated with any communications functions required
by this product, including e-mail, web browser, network server communications
protocols, electronic forms, and so on. Define any pertinent message formatting.
Identify any communication standards that will be used, such as FTP or HTTP.
Specify any communication security or encryption issues, data transfer rates,
and synchronization mechanisms.>

## 4. System Features

###### System Features/Use Cases:
1. A user wants to calculate a GPA from scratch.
2. A user wants to add letter grades to a current GPA.
3. A user wants to see what letter grades it takes to boost a GPA.
4. A user wants to calculate what letter grade they will recieve based on percentages. 
5. A user wants to calculate a letter grade from weights and points. 

###### Requirements:
1. Research different ways of calculating and evaluating grades
    - weighted
    -  non-weighted
2. Algorithms to match the math required for the calculations. 


###### Undetermined System Requirements:
If this project requires a database, we will need to develop a schema to classify our data. 


### 4.1 User Interface that is Interactive and Responsive

The interface will be hosted online to allow for easy access. The user should find it easy to navigate, and the visual design should appeal to many types of people. It should work quick and use 'watchers' (or the equivalent in another language) to compute values without extra work from the user. 


### 4.1.2 Stimulus/Response Sequences


###### Note: The user is not required to log in or authenticate to use the software.

- User chooses the type of calculation they want to do. (most likely by using a button, maybe a different page/tab)
- User enters in the data they have. 
    - Note: This may be letter grades, percentages, or a cumulative GPA.
- Can add more inputs or remove inputs.
- Client will use watchers/computed values to average the grades without the user needing to hit a trigger/event.

### 4.1.3 Functional Requirements

###### Summary of Requirements
- REQ: Allow user to enter all kinds of data, but limit the unwanted data, possibly using regular expressions. Calculate accurately based on if they choose weighted or unweighted. Fast calculations and friendly interface.

###### Possible Validation Errors:
- User enters letters not A-F
- User uses symbols other than +/-
- User enters multiple letters or numbers in one input
- User enters invalid GPA
- User enters invalid decimal place of GPA


### 4.2 System Feature 2 (and so on)
- TBD

## 5. Other Nonfunctional Requirements

### 5.1 Performance Requirements
The main requirements are for the software to calculate the users input and give them back a gpa. It also needs to be able to calculate many different grades, from 1 to 10. 
Also, users can add already calculated gpas. Because these calculations are simple, time shouldn't be a problem. We will add a time out feature just in case. 

### 5.2 Safety Requirements
There is no real need for safety because there is no data base, no user login, and no saved information. 

### 5.3 Security Requirements

The only security requirements is that people cannot copy our code and use it as their own. Because there is no database we will not need to much security. 

### 5.4 Software Quality Attributes
Adaptability, to be able to adapt to many different gpas and lines of information.
availability, to be able to be used on the internet. 
correctness, the math must be right in order to have the calculation right.
reliability, as said above, reliable calculation and reliable availably. 
reusability, can be reused as many times as needed, add a restart button.
usability, easy user interface and clear instruction. 

### 5.5 Business Rules
N/A, because we are not selling it.

## 6. Other Requirements
No Database Requirements as information will not be stored. A disclaimer will 
be placed stating that these are not official transcripts or grades provided by 
any institution but instead purely based on user's input. The calculations will
be displayed in English(USA).


## Appendix A: Glossary

<Define all the terms necessary to properly interpret the SRS, including
acronyms and abbreviations. You may wish to build a separate glossary that spans
multiple projects or the entire organization, and just include terms specific to
a single project in each SRS.>

## Appendix B: Analysis Models

<Optionally, include any pertinent analysis models, such as data flow diagrams,
class diagrams, state-transition diagrams, or entity-relationship diagrams.>

## Appendix C: To Be Determined List

<Collect a numbered list of the TBD (to be determined) references that remain in
the SRS so they can be tracked to closure.>

- 4.2 Other System Features
- 3.1 User Interface Requirements
    * do we want to limit the max entries?
- 3.2 Hardware Interface Requirements
    * currently no plans to use HTTPS. Is there a need? Maybe in the future. 
