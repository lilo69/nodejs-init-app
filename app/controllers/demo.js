import Demo from '../model/demo';

module.exports = {
    get: (req, res) => {
        Demo.find({}, (err, data) => {
            console.log(err, data)
        })
    },

    add: (req, res) => {
        const data = new Demo({
            title: 'title',
            body: 'title'
        });
        data.save((err, result) => {
            console.log(err, result);
            res.json({
                code: 200,
                result: result
            })
        });
    }
};

