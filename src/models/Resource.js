import mongoose from 'mongoose'

const duuidString = {
    type:String,
    required:true,
    minlength:9,
    maxlength:9
};
const reqString = {
    type: String,
    required:true,
    minlength:3,
    maxlength:255
};
const reqDayString = {
    type: String,
    required:true,
    minlength:6,
    maxlength:9,
};

const reqDate = {
    type:Date,
    required:true
};

const reqNumber = {
    type: Number,
    required:true
};


const resourceSchema = mongoose.Schema({

        duuid: duuidString,                        //doctor Id
        approve: {type: Boolean, default: false},  // doctor can auto approve appointments or disable this option to manually approve
        Fee: reqNumber,                            // consultation fee of the doctor
        timeslots: [                               // list of places the doctor works in and their respective available timeslots
            {
                _id: false,
                oganisationId:reqNumber,
                organisationName: reqString,       // hospital or clinic name
                // location:reqString,                // coordinates of the location to find by nearest location filter
                schedule:[
                    {
                        _id: false,
                        days:[reqDayString],
                        startTime:reqString,
                        endTime: reqString,
                    },
                ]              
            }
        ],
},{
    timestamps:true
});

export const ResourceModel = mongoose.model('Resource',resourceSchema);
