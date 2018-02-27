var fs = require('fs');
var faker = require("faker");
var lodash = require("lodash");

function generateUsers(amount) {
    return lodash.times(amount, () => {
        return {
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "username": faker.internet.userName(),
            "email": faker.internet.email(),
            "password": faker.internet.password(),
            "phone": faker.phone.phoneNumber(),
            "birthday": faker.date.past(),
            "gender": "Male",
            "photo": faker.internet.avatar(),
            "city": {
                "ref": "city",
                "id": "ObjectId(\"5a92e2e90e6ce5d387f6a83a\")"
            }
        }
    });
}

fs.writeFile('users.json', JSON.stringify(generateUsers(10)), 'utf8', () => {});


