touconst fs = require("fs");
const login = require("face-api-lnw");

var credentials = {email: "rahadhossain518@gmail.com", password: "#SakibinMei8907"}; // credential information

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // login
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //create appstate
});
