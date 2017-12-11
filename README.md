# Resume 
---
This is a single page application project for Udacity Front-end Nonodegree using HTML, CSS, and Javasript to accomplish and jQuery to manipulating and traversing the DOM. I will store my resume data in four javaScript objects and display them. Also use Google Maps API to display a map at the end.

## Sections
There are 6 parts in this resume showing as follow.
#### header
This section include a js object which store my biography information. Following is the object schema.
 * `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: string url
            display: function taking no parameters
![headerSreenShot](https://github.com/weekendchow/fend-Resume/blob/master/images/headerSS.png)

### work experience
This section include a js object which store my work experience information. Following is the object schema.
* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (Can be 'in progress')
                 description: string 
            display: function taking no parameters

![workSreenShot](https://github.com/weekendchow/fend-Resume/blob/master/images/workSS.png)

### projects
This section include a js object which store my projects information. Following is the object schema.
 * `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

![projectSreenShot](https://github.com/weekendchow/fend-Resume/blob/master/images/projectSS.png)

### educations
This section include a js object which store my educations information. Following is the object schema.

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

![eduSreenShot](https://github.com/weekendchow/fend-Resume/blob/master/images/workSS.png)

### map
In this section, I append a google map with pins which are the places I worked and studied. 
![mapSreenShot](https://github.com/weekendchow/fend-Resume/blob/master/images/mapSS.png)

### footer
This is the last section include all my contact information.
![footerSreenShot](https://github.com/weekendchow/fend-Resume/blob/master/images/footerSS.png)

## Running
Clone or download this repo and open the index.html file. Or open it [live](https://weekendchow.github.io/fend-Resume/).

## Reference

1. [Google Maps API Doc](https://developers.google.com/maps/documentation/)
2. [jQuery API Doc](http://api.jquery.com/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


