export const deps = {
	"[deps]: version>=1.1.4 - Import the native module for ampalibe": {
		prefix: "amp-import-nat-latest",
		body: [
			"import ampalibe",
			"from ampalibe import Model, Messenger",
			"",
			"chat = Messenger()",
			"query = Model()",
			"",
			"chat.get_started()",
		],
		description:
			"[deps]: version>=1.1.4 - Import the native module for ampalibe",
	},
	"[deps]: version<=1.0.7 - Import the native module for ampalibe": {
		prefix: "amp-import-nat",
		body: [
			"import ampalibe",
			"from conf import Configuration",
			"",
			"bot = ampalibe.init(Configuration())",
			"chat = bot.chat",
			"query = bot.query",
			"",
			"chat.get_started()",
		],
		description:
			"[deps]: version<=1.0.7 - Import the native module for ampalibe",
	},
	"[deps]: Import config": {
		prefix: "amp-import-config",
		body: ["from conf import Configuration as config"],
		description: "[deps]: Import config",
	},
	"[deps]: import quick_reply deps": {
		prefix: "amp-import-quickreply",
		body: ["from ampalibe.ui import QuickReply"],
		description: "[deps]: import quick reply deps",
	},
	"[deps]: import button deps": {
		prefix: "amp-import-button",
		body: ["from ampalibe.ui import Button"],
		description: "[deps]: import button deps",
	},
	"[deps]: import send_template deps": {
		prefix: "amp-import-sendtemplate",
		body: [
			"from ampalibe import Payload",
			"from ampalibe.ui import Element, Button",
		],
		description: "[deps]: import send_template deps",
	},
};
