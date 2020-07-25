# Petful Server

## Sole Contributor: Jacob Poteat
link to live app:  https://petful-eta.vercel.app

This server is built using a Queue based Data Structure.

## API Endpoints 

main endpoint:  https://peftulserver.herokuapp.com/api

### Cats:  ('/cat')

Methods:  

GET('/') returns the first cat in the queue.  Example response:  

{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}



DELETE('/') deletes the first cat in the queue.


### Dogs:  ('/dog')

Methods:  

GET('/') returns the first dog in the queue. Example response:  

{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
}

DELETE('/') deletes the first dog in the queue.


### People: ('/people)

GET ('/') returns an array of all the people in line.  Example response:  

['John Smith', 'Katy Perry', Michaelangelo']



### Tech Stack 

Client: HTML, CSS, React.js

Server:  Express