const { App, CustomRouteInitializationError } = require("@slack/bolt");
const { default: axios } = require("axios");
require("dotenv").config();

const app = new App({
  signingSecret: "a73c34ca7549dfdf1c8419dcdb798393",
  token: "xoxb-3829491414657-4016230755814-QG3pev5Jr2XrFjSdZuwLBEnS",
  socketMode: true, // enable the following to use socket mode
  appToken:
    "xapp-1-A040FT4677Y-4027422208483-7574cedc1f2b046b1fa690052bddfa4917d795e10139bda2c006da92aca56443",
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

// app.event("app_mention", async ({ event, say, client }) => {
//   const mention = event.text.split(" ");
//   console.log(event);
//   if (mention.length === 1 || mention.length > 2) {
//     return say("**add a valid city name like:** @bot city");
//   }
//   // await client.chat.postMessage({
//   //   channel: event.channel,
//   //   text: `Thanks for mentioning <@${event.user}>`,
//   // });
//   if (mention[1] === "delhi") {
//     await say();
//   }
// });

app.message("help", async ({ message, say }) => {
  await say({
    text: `Thanks`,
    blocks: [
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

app.action("button-action1", async ({ ack, say }) => {
  await ack();
  await say(
    "*No, Any lecture/session that you will be attending using your Phones will be marked absent.*"
  );
});

app.action("button-action2", async ({ action, ack, say }) => {
  await ack();

  await say(
    "Please refer to the below sheet to see the evaluation schedule for the upcoming week: 5th September 2022 [Monday] \n No Re-evaluation will be planned for the evaluation of W35.\n Please turn off your slack notifications while appearing for evaluations."
  );
  await say(
    "*<https://docs.google.com/spreadsheets/d/e/2PACX-1vTRh0cXTM5RJ0q_EnWjLyhsRghli4QTzPTe94wXIPOTFl-XB5rXhqNPzsR2rJf-wakZlgyxbBnjYncH/pubhtml?gid=1899637468&single=true|evaluation schedule>*"
  );
});
app.action("button-action3", async ({ action, ack, say }) => {
  await ack();

  await say(
    "Dear Students \n please find the pair programming booking procedure for this block ."
  );
  await say(
    "<https://ft-web-17.slack.com/files/U02TES3AQ9M/F040LQT6Y8J/pp_block19_students.pdf|Block Plan>"
  );
});
app.action("button-action4", async ({ action, ack, say }) => {
  await ack();

  await say(
    "Dear Students, \n <https://datastudio.google.com/u/0/reporting/7c681f02-0270-4797-8ec4-ac0edba13c21/page/CnmvC?s=kGJ4bAEewnE|Please find the sprint plan for this week > "
  );
});
app.action("button-action5", async ({ action, ack, say }) => {
  await ack();

  await say("@botname-query- *write your query here*");
});

app.event("app_mention", async ({ event, say, client }) => {
  const mention = event.text.split("-");
  console.log(event);


  if (mention[1] === "query") {
    await say(`Thanks for Writing us. We will get back you soon <@${event.user}>`)
    axios.post(
      "https://hooks.slack.com/services/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",
      {
        text: `*Query from <@${event.user}>* \n ${mention[2]}`,
      }
    );
    
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
