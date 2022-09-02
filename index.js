const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.TOKEN,
  socketMode: true, // enable the following to use socket mode
  appToken: process.env.APP_TOKEN,
});

// app.event("app_mention", async ({ event, client }) => {
//   const mention = event.text.split(" ");
//   console.log(mention);
//   try {
//     await client.chat.postMessage({
//       channel: event.channel,
//       text: `Thanks for mentioning <@${event.user}>`,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// api
app.event("app_mention", async ({ event, client }) => {
  const mention = event.text.split(" ");
  if (mention.length === 1) {
    return client.chat.postMessage({
      channel: event.channel,
      text: "*ask valid question like:* *@bot Show me api list*, or  *@bot api*",
    });
  }

  if (mention.includes("api")) {
    await client.chat.postMessage({
      channel: event.channel,
      text: "something",
      blocks: [
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Here Are Some Useful APIs for Developers. <@${event.user}>*`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/apidojo/api/imdb8/|IMDb API for movies data>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/weatherapi/api/weatherapi-com/|Weather API>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/googlecloud/api/google-translate1/|Google Translate API>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/spoonacular/api/recipe-food-nutrition/|Recipe - Food - Nutrition>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/meme-generator-api-meme-generator-api-default/api/meme-generator/|Meme Generator>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/apidojo/api/hotels4/|Hotels API>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/mashvisor-team/api/mashvisor/|Mashvisor Hotels API>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/apidojo/api/hm-hennes-mauritz/pricing|ECommerce API>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/ApiKeyHunter/api/fake-valid-cc-data-generator/|Fake Valid CC Data Generator>*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*<https://rapidapi.com/apigeek/api/google-search3/|Google Search API>*",
          },
        },
      ],
    });
  }
});

(async () => {
  // Start the app
  await app.start(5000);

  console.log("⚡️ Bolt app is running!");
})();
