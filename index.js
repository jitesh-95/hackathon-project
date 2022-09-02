const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.TOKEN,
  socketMode: true, // enable the following to use socket mode
  appToken: process.env.APP_TOKEN,
});

// app.event("app_mention", async ({ event, client }) => {
//   console.log(event);
//   try {
//     await client.chat.postMessage({
//       channel: event.channel,
//       text: `Thanks for mentioning <@${event.user}>`,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

app.event("app_mention", async ({ event, say, client }) => {
  const mention = event.text.split(" ");
  if (mention.length === 1 || mention.length > 2) {
    return say("add a valid city name like @bot city");
  }
  await client.chat.postMessage({
    channel: event.channel,
    text: `Thanks for mentioning <@${event.user}>`,
  });
  if (mention[1] === "delhi") {
    await say("weather is this.");
  }
});

(async () => {
  // Start the app
  await app.start(5000);

  console.log("⚡️ Bolt app is running!");
})();

// {
// 	"type": "modal",
// 	"title": {
// 		"type": "plain_text",
// 		"text": "HELP"
// 	},
// 	"submit": {
// 		"type": "plain_text",
// 		"text": "Send"
// 	},
// 	"close": {
// 		"type": "plain_text",
// 		"text": "Cancel",
// 		"emoji": true
// 	},
// 	"blocks": [
// 		{
// 			"type": "divider"
// 		},
// 		{
// 			"type": "input",
// 			"element": {
// 				"type": "multi_users_select",
// 				"placeholder": {
// 					"type": "plain_text",
// 					"text": "Select users",
// 					"emoji": true
// 				},
// 				"action_id": "multi_users_select-action"
// 			},
// 			"label": {
// 				"type": "plain_text",
// 				"text": "Ask your query to"
// 			}
// 		},
// 		{
// 			"type": "input",
// 			"element": {
// 				"type": "plain_text_input",
// 				"multiline": true,
// 				"action_id": "plain_text_input-action"
// 			},
// 			"label": {
// 				"type": "plain_text",
// 				"text": "Your query ?"
// 			}
// 		}
// 	]
// }

// {
// 	"type": "modal",
// 	"title": {
// 		"type": "plain_text",
// 		"text": "HELP"
// 	},
// 	"submit": {
// 		"type": "plain_text",
// 		"text": "Submit"
// 	},
// 	"close": {
// 		"type": "plain_text",
// 		"text": "Cancel"
// 	},
// 	"blocks": [
// 		{
// 			"type": "section",
// 			"text": {
// 				"type": "mrkdwn",
// 				"text": "Ask your query to"
// 			},
// 			"accessory": {
// 				"type": "users_select",
// 				"placeholder": {
// 					"type": "plain_text",
// 					"text": "Select a user"
// 				},
// 				"action_id": "users_select-action"
// 			}
// 		}
// 	]
// }
