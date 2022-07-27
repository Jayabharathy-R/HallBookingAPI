// const {MongoClient}=require('mongodb');

// module.exports={
//     slectedDb:{},
//     async connect(){
//         try{
//            const client=await MongoClient.connect('mongodb+srv://Jayabharathy:Jai151991@cluster0.tzkph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//          this.slectedDb=client.db("hallBooking");
//          console.log(this.slectedDb);
//         }
//         catch(err){
//             console.log(err)
//         }
//     }
// }
const {MongoClient}=require('mongodb');

module.exports={
    slectedDb:{},
    async connect(){
        try{
           const client=await MongoClient.connect('mongodb+srv://Jayabharathy:Jai151991@cluster0.tzkph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
         this.slectedDb=client.db("hallBooking");
         console.log(this.slectedDb);
        }
        catch(err){
            console.log(err)
        }
    }
}