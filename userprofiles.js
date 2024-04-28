const profiles =[
    {   username:"mohammed7",
        email:"mohammed7@gmail.com",
        avatar:"https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2019/10/mozilla-youtube-algorithms-horror-stories-campaign-ai-artificial-intelligence-recommendations.jpg"
    }
]
function findByUserName(userName){
    //Q1 Vous pouvez utiliser un boucle
    // ou une autre méthode d'ordre suppérieur
    return profiles.find(
        user=>user.username==userName
        )
}
module.exports = {profiles,findByUserName}