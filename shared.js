const {MongoClient}=require('mongodb');

module.exports={
    slectedDb:{},
    async connect(){
        try{
           const client=await MongoClient.connect("mongodb://localhost:27017")
         this.slectedDb=client.db("hallBooking");
         console.log(this.slectedDb);
        }
        catch(err){
            console.log(err)
        }
    }
}