import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Demo = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

module.exports = mongoose.model('Demo', Demo);