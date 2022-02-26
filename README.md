# Form builder

This is a form builder application, By using this, users can create dynamic forms like google forms.

## Tech/Framework used
- React with Javascript
- Redux and Redux-saga
- Node with Express

## Features

* On Create form page, there is a **Add Question** button and textbox to fill form name/title
* On Click of **Add Question** button, the modal popup opens with the below fields
    - Enter question (Textbox)
    - Select the answer type (Dropdown with options - Text, Checkbox and Radio)
        * If answer type is either Checkbox or Radio, then the text area will appear to enter each choice in
separate lines.
    - Add and Cancel button
   
![add_question_popup](https://user-images.githubusercontent.com/22043817/155842884-30a60eee-7a1b-45fb-b7f3-2c6bed0c06f4.png)

- On click of Add Button, the question is added to the form.
- After **saving the form**, the slug or unique URL for the form is generated
- On **Listing Page**, there are list of all the forms created with below fields
    - Form Name
    - Form URL
    - Created At (Date and Time)
    - Total Responses
    
![listing_page](https://user-images.githubusercontent.com/22043817/155842912-00809eb6-2722-4f0c-9524-7ef6a16eaaae.png)

- On the click of the URL, user can submit their response

![submit_response](https://user-images.githubusercontent.com/22043817/155842983-0c701ca0-11a4-4478-aadb-6d6c596f2306.png)

- Form data and Responses are stored in the `forms.json` and `responses.json` files respectively, located inside `/backend/data` folder

## Installation

To install dependencies for frontend and backend, follow below steps.

#### backend
```
cd backend
npm install
```

#### frontend
```
cd frontend
npm install
```

## How to start

To start the project, you need to start `backend` as well as `frontend`.

**Open Terminal:**

In first tab (backend):
```sh
cd backend
npm start
```

In second tab (frontend):
```sh
cd frontend
npm start
```
