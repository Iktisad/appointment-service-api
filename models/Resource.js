import mongoose from 'mongoose'

const reqString = {
    type: String,
    required:true,
};

const reqDate = {
    type:Date,
    required:true
};

const reqNumber = {
    type: Number,
    required:true
};
// const doctorFkId = {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'employee',
//     required:true,
// };

const resourceSchema = mongoose.Schema({

        resourceId: reqString,               //doctor Id
        resourceName: reqString,             // doctor name
        specialist: reqString,               // Med / Card / Neuro
        title:reqString,                     // profession title eg. surgeon, professor
        bio:String,
        contact: reqString,
        rating: Number,                      // trust vote of the doctor
        autoApprove: {                       // doctor can auto approve appointments or disable this option to manually approve
            type: Boolean,
            default: true
        },
        Fee: reqNumber,                      // consultation fee of the doctor
        verifiedBy: reqString,               // Either BMDC verified or other system or icarus verified
        affiliations: [                      // list of places the doctor works in and their respective available timeslots
            {
                // oganisationId:reqNumber,
                organisationName: reqString,     // hospital or clinic name
                location:reqString,              // coordinates of the location to find by nearest location filter
                timeslot:[
                    {day:String, time:[String]},
                ]              
            }
        ],
},{
    timestamps:true
});

export const ResourceModel = mongoose.model('Resource',resourceSchema);
