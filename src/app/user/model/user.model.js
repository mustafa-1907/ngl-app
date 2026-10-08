import {model, Schema} from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 20
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                value.includes('@') && value.includes('.')
            }, message: 'Invalid email address'
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,

    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    age :{
        type: Number,

    },
    provider: {
        type: String,
        required: true,
        enum: ['local', 'google'],
        default: 'local'
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true,
    }
});

export const User = model('User', UserSchema)