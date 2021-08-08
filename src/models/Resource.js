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

const reqUniqueString = {
    type: String,
    required:true,
    unique:true,
    minlength:3,
    maxlength:155
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
// const reqUniqueNumber = {
//     type: Number,
//     index:true,
//     required:true
// };


const resourceSchema = mongoose.Schema({

        duuid: duuidString,                        //doctor Id
        approve: {type: Boolean, default: false},  // doctor can auto approve appointments or disable this option to manually approve
        Fee: reqNumber,                            // consultation fee of the doctor
        timeslots: [                               // list of places the doctor works in and their respective available timeslots
            {
                _id: false,
                // oganisationId:reqUniqueNumber,
                organisationName: reqUniqueString,      // hospital or clinic name
                // location:reqString,                  // coordinates of the location to find by nearest location filter
                // duration: reqNumber, or number of patients
                schedule:[
                    {
                        // _id: false,
                        dayOfTheWeek: reqDayString,
                        startTime: reqString,
                        endTime: reqString,
                        noOfPatient: reqNumber
                        // interval: [reqString]
                    },
                ]              
            }
        ],
},{
    timestamps:true
});

// resourceSchema.pre('save', async function (next) {
//     let start = moment(this.startTime, 'HH:mm a');
//     let end = moment(this.endTime, 'HH:mm a');
    
//     if( end.isBefore(start) ){
//         end.add(1, 'day');
//       }
    
//     let timeStops = [];

//     while (start <= end) {
//         timeStops.push(new moment(start).format('HH:mm a'));
//         start.add(resourceSchema.attendTime, 'minutes');
//     }
//     return timeStops;
// });


export const ResourceModel = mongoose.model('Resource',resourceSchema);



