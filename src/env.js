let botToken;
let mongoUrl;
let adminid;
let channel;
let chkchan;
let support = "@sexy_aman";
let winstant = "5";// instant account
let wmail = "20";// Nf on mail
let wpmail = "20"; //Prime on mail
let proof = '@DailyHitsZ';
let refer = '1'//Reward Pool Of Your Bot in Usdt
let paych = "@DailyHitsZ";
let curr = 'Point'
let maxchnl = '6'
let heading = ['Main Channel'];
if(!process.env.channel){
    channel = ['DailyHitsZ'] //Put Telegram Channel here
}else{
    channel = process.env.channel
}
if(!process.env.chkchan){
    chkchan = ['@DailyHitsZ'] //put channel to add check like '@rest516','test'
}else{
  chkchan = process.env.chkchan
}
if(!process.env.admin){
    adminid = '5296067851' //Put Telegram User ID of Admin of the Bot
}else{
    adminid = process.env.admin
}

if(!process.env.bot_token){
    botToken = '5815565391:AAEN6s6VrgI7ioNx_IQOUsX7L7vxu01ki40' //Replace Bot token
}else{
    botToken = process.env.bot_token
}

if(!process.env.mongoLink){
    mongoUrl = 'mongodb+srv://abhishek71599:dora1emon@cluster0.qvx9s93.mongodb.net/?retryWrites=true&w=majority' //Put MongoDB URL you can get it from https://mongodb.com/
}else{
    mongoUrl = process.env.mongoLink
}


module.exports = {
mongoLink: mongoUrl,
bot_token: botToken,
admin: adminid,
channel:channel,
chkchan:chkchan,
refer,
curr,
maxchnl,
winstant,
wmail,
wpmail,
heading,
  paych,
proof,
support
}
