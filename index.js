const { App } = require("@slack/bolt");
const { default: axios } = require("axios");
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
      text: "ask valid question like: \n *@bot Show me api list*, \n *@bot api* \n *@bot help*",
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

// FAQ section
app.message("help", async ({ say }) => {
  await say({
    text: `Thanks`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Frequently asked questions by Students.*",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Can Student join Sessions from Mobile?",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "button-action1",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Evalation Sprint Plan",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "button-action2",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "What is Pair Programming?",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "button-action3",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Masai Sprint Plan block 19",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "button-action4",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Other",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "button-action5",
        },
      },
    ],
  });
});

// button 1
app.action("button-action1", async ({ ack, say }) => {
  await ack();
  await say(
    "*No, Any lecture/session that you will be attending using your Phones will be marked absent.*"
  );
});

// button 2
app.action("button-action2", async ({ ack, say }) => {
  await ack();

  await say(
    "Please refer to the below sheet to see the evaluation schedule for the upcoming week: 5th September 2022 [Monday] \n No Re-evaluation will be planned for the evaluation of W35.\n Please turn off your slack notifications while appearing for evaluations. \n *<https://docs.google.com/spreadsheets/d/e/2PACX-1vTRh0cXTM5RJ0q_EnWjLyhsRghli4QTzPTe94wXIPOTFl-XB5rXhqNPzsR2rJf-wakZlgyxbBnjYncH/pubhtml?gid=1899637468&single=true|evaluation schedule>*"
  );
});

// buttoon 3
app.action("button-action3", async ({ ack, say }) => {
  await ack();

  await say(
    "Dear Students \n please find the pair programming booking procedure for this block. \n *<https://ft-web-17.slack.com/files/U02TES3AQ9M/F040LQT6Y8J/pp_block19_students.pdf|Block Plan>*"
  );
});

// button 4
app.action("button-action4", async ({ ack, say }) => {
  await ack();

  await say(
    "Dear Students, \n <https://datastudio.google.com/u/0/reporting/7c681f02-0270-4797-8ec4-ac0edba13c21/page/CnmvC?s=kGJ4bAEewnE|Please find the sprint plan for this week > "
  );
});

// button 5
app.action("button-action5", async ({ ack, say }) => {
  await ack();

  await say("@botname-query- *write your query here*");
});

// api calling
app.event("app_mention", async ({ event, say }) => {
  const mention = event.text.split("-");

  if (mention[1] === "query") {
    await say(
      `Thanks for Writing us. We will get back you soon <@${event.user}>`
    );
    axios.post(
      "https://hooks.slack.com/services/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",
      {
        text: `*Query from <@${event.user}>* \n ${mention[2]}`,
      }
    );
  }
});

// port
(async () => {
  // Start the app
  await app.start(process.env.PORT || 8080);

  console.log("⚡️ Bolt app is running!");
})();
