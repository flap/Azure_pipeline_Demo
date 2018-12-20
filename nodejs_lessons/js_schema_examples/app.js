/**
 * Created by zhengjin on 2016/12/21.
 *
 * Json schema validate demo.
 * tv4 reference: https://github.com/geraintluff/tv4
 * Json schema reference: https://spacetelescope.github.io/understanding-json-schema/
 */

var tv4 = require('tv4');
var path = require('path');

var testJsonObject = {
    firstName: 'Zheng',
    lastName: 'Jin',
    age: 30,
    high: "173 cm",
    status: 'ok',
    skill: ['Java', 'C#', 'Python', 'JS'],
    job: {
        company: 'Fun',
        role: 'tester'
    }
};

var testJsonSchema = {
    '$schema': 'http://json-schema.org/draft-04/schema#',
    'title': 'JavaScript schema validate demo.',
    'type': 'object',
    'properties': {
        'firstName': {
            'type': 'string'
        },
        'lastName': {
            'type': 'string'
        },
        'status': {
            'type': 'string',
            'pattern': '(o|O)(k|K)'
        },
        'high': {
            'type': 'string',
            'pattern': '[0-9]{3}'
        },
        'age': {
            'type': 'integer',
            'minimum': 0,
            'maximum': 150
        },
        'skill': {
            'type': 'array',
            'items': {
                'type': 'string'
            },
            'minItems': 3
        },
        'job': {
            'type': 'object',
            'properties': {
                'company': {
                    'type': 'string'
                },
                'role': {
                    'type': 'string'
                }
            },
            'required': ['company', 'role']
        }
    },
    'required': ['firstName', 'lastName', 'status', 'high', 'age', 'skill']
};


if (require.main === module) {
    if (!tv4.validate(testJsonObject, testJsonSchema)) {
        console.log(tv4.error);
    } else {
        console.log('JS schema validate pass.');
    }

    console.log('\n', path.basename(__filename), 'DONE!');
}
