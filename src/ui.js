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
	"[ui]: create quickreply": {
		"prefix": "amp-ui-quickreply",
		"body": [
			"${1:quick_rep_name} = [",
			"    QuickReply(",
			"        title=${2:'Angela'},",
			"        payload=Payload(${3:'/route'}, name=${2:'Angela'}, ref=${4:'id'})",
			"    ),",
			"    QuickReply(",
			"        title=${5:'Rivo'},",
			"        payload=Payload(${6:'/route'}, name=${5:'Rivo'}, ref=${7:'id'})",
			"    )",
			"]",
			"chat.send_quick_reply(sender_id, ${1:quick_rep_name}, ${8:'Question?'})"
		],
		"description": "[ui]: create quickreply"
	}
}