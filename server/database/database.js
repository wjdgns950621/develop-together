import mongoose from "mongoose";
import { config } from '../config/config.js';

export async function connectDB() {
    return mongoose.connect(config.db.host);
};

export function userVirtualId(schema) {
    schema.virtual('id').get(function() {
        return this._id.toString();
    })
    schema.set('toJSON', { virtuals: true });
    schema.set('toObject', { virtuals: true });
};