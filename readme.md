
post:- http://localhost:3000/api/postdata

{
    "name" :"Satyam",
    "id" :420
}

getall:- http://localhost:3000/api/fetchdata


get by id:- http://localhost:3000/api/fetchdata/20

{
	"name": "JOHN",
	"id": 20
}

put:- http://localhost:3000/api/updatedata/20

{
    "name" : "qwerty"
}

delete :- http://localhost:3000/api/deletedata/20

response:-
{
	"message": "Data deleted successfully"
}