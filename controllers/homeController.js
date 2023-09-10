//rendering a json in home oage
module.exports.home = function(req,res){
    return res.json(200,{
        message:"This is Home page"
    });
}