export const ui = {
  "[ui]: create button ": {
		"prefix": "amp-ui-button",
		"body": [
			"${1:button_name} = [",
			"    Button(",
			"        type='postback',",
			"        title=${2:titleValue},",
			"        payload=${3:route}",
			"    )",
			"]",
			"",
			"chat.send_button(sender_id, buttons, ${3:question})"
		],
		"description": "[ui]: create button "
	},
	"[ui]: create persistent menu": {
		"prefix": "amp-ui-persistent",
		"body": [
			"persistent_menu = [",
			"    Button(type='postback', title=${1:title_value}, payload=${2:route})",
			"]",
			"",
			"chat.persistent_menu(sender_id, persistent_menu)"
		],
		"description": "[ui]: create persistent menu"
	},
}