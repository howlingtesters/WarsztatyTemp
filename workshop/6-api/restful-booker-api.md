[⬅️ Go back to API testing](./api-testing.md)

## Restful Booker API

Restful Booker API is a simple API for testing purposes. It allows you to create, update, and delete bookings. You can also get booking details by ID or get a list of booking IDs.

[Create booking](#create-booking)\
[Get booking details by ID](#get-booking-details-by-id)\
[Get list of booking IDs](#get-list-of-booking-ids)\
[Get auth token](#get-auth-token)\
[Update booking](#update-booking)\
[Partially update booking](#partially-update-booking)\
[Remove booking](#remove-booking)

### Create booking

```sh
curl -X POST https://restful-booker.herokuapp.com/booking -H 'Content-Type: application/json' -d '{
    "firstname" : "Anna",
    "lastname" : "Kowalska",
    "totalprice" : 120.30,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2024-12-12",
        "checkout" : "2024-12-15"
    },
    "additionalneeds" : "Breakfast"
}'
```

Example response:

```json
{
  "bookingid": 8221,
  "booking": {
    "firstname": "Anna",
    "lastname": "Kowalska",
    "totalprice": 120,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2024-12-12",
      "checkout": "2024-12-15"
    },
    "additionalneeds": "Breakfast"
  }
}
```

### Get booking details by ID

```sh
curl -i https://restful-booker.herokuapp.com/booking/1
```

Example response:

```json
{
  "firstname": "Anna",
  "lastname": "Kowalska",
  "totalprice": 120,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2024-12-12",
    "checkout": "2024-12-15"
  },
  "additionalneeds": "Breakfast"
}
```

### Get list of booking IDs

```sh
curl -i https://restful-booker.herokuapp.com/booking
```

Example response:

```json
[
  { "bookingid": 4808 },
  { "bookingid": 4537 },
  { "bookingid": 4072 },
  ...
]
```

### Get auth token

```sh
curl -X POST https://restful-booker.herokuapp.com/auth -H 'Content-Type: application/json' -d '{
    "username" : "admin",
    "password" : "password123"
}'
```

Example response:

```json
{
  "token": "a52481ec4f62076"
}
```

### Update booking

```sh
curl -X PUT https://restful-booker.herokuapp.com/booking/1 -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Basic YWRtaW46cGFzc3dvcmQxMjM=' -d '{
    "firstname" : "Jan",
    "lastname" : "Szczecina",
    "totalprice" : 150.00,
    "depositpaid" : true,
    "bookingdates" : {
      "checkin": "2024-12-12",
      "checkout": "2024-12-16"
    },
    "additionalneeds" : "Flowers"
}'
```

Example response:

```json
{
  "firstname": "Jan",
  "lastname": "Szczecina",
  "totalprice": 150,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2024-12-12",
    "checkout": "2024-12-16"
  },
  "additionalneeds": "Flowers"
}
```

### Partially update booking

```sh
curl -X PATCH https://restful-booker.herokuapp.com/booking/1 -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Authorization: Basic YWRtaW46cGFzc3dvcmQxMjM=' -d '{
    "firstname" : "Andrzej",
    "lastname" : "Duda"
}'
```

Example response:

```json
{
  "firstname": "Andrzej",
  "lastname": "Duda",
  "totalprice": 150,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2024-12-12",
    "checkout": "2024-12-16"
  },
  "additionalneeds": "Flowers"
}
```

### Remove booking

```sh
curl -X DELETE https://restful-booker.herokuapp.com/booking/1 -H 'Content-Type: application/json' -H 'Authorization: Basic YWRtaW46cGFzc3dvcmQxMjM='
```
