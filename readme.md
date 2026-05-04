
post:- http://localhost:3000/postdata

{
    "name" :"Satyam",
    "id" :420
}

getall:- http://localhost:3000/fetchdata


get by id:- http://localhost:3000/fetchdata/20

{
	"name": "JOHN",
	"id": 20
}

put:- http://localhost:3000/updatedata/20

{
    "name" : "qwerty"
}

delete :- http://localhost:3000/deletedata/20

response:-
{
	"message": "Data deleted successfully"
}