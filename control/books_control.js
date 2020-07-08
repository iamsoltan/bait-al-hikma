const Devbooks = require("../model/books_model");


module.exports = {

    get_all: async (req, res, next) => {
        Devbooks
            .find()
            .then(x => res.send(x))
            .catch(r => res.send(r.message))

    },

    get_one_by_id: async (req, res, next) => {
        Devbooks
            .findById({
                _id: req.params.id
            })
            .then(x => res.send(x))
            .catch(r => res.send(r.message))

    },

    post_one: async (req, res, next) => {
        new Devbooks({
            title: req.body.title,
            priority: req.body.priority
        })
            .save()
            .then(x => res.send(x))
            .catch(r => res.send(r.message))



    },

    put_one_by_id: async (req, res, next) => {
        Devbooks.update(
            {
                _id: req.params.id
            },
            {
                $set:
                {
                    title: req.body.title,
                    priority: req.body.priority
                }
            })
            .exec()
            .then(x => res.send(x))
            .catch(r => res.send(r.message))


    },

    delete_one_by_id: async (req, res, next) => {
        Devbooks.findOneAndRemove(
            {
                _id: req.params.id
            })
            .exec()
            .then(x => res.send(x))
            .catch(r => res.send(r.message))


    }
}