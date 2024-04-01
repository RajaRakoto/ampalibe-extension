export const chat = {
	"[chat]: Sends an SMS to the specified recipient": {
		prefix: "amp-chat-sms",
		body: ["chat.send_message(sender_id, ${1:sms})"],
		description: "[chat]: Sends an SMS to the specified recipient",
	},
	"[chat]: Sends an SMS to the specified recipient (format)": {
		prefix: "amp-chat-sms-format",
		body: ["chat.send_message(sender_id, f'${1:sms_format}')"],
		description: "[chat]: Sends an SMS to the specified recipient (format)",
	},
	"[chat]: create quick reply submit": {
		prefix: "amp-chat-qckreply",
		body: [
			"chat.send_quick_reply(sender_id, ${1:responses_buttons}, ${2:question})",
		],
		description: "[chat]: create quick reply submit",
	},
	"[chat]: send local file to user": {
		prefix: "amp-chat-sendlocal",
		body: [
			"chat.send_file(sender_id, ${1:local_path}, filetype=${2:audio|video|file})",
		],
		description: "[chat]: send local file to user",
	},
	"[chat]: send URL file to user": {
		prefix: "amp-chat-sendurl",
		body: [
			"chat.send_file_url(sender_id, ${1:url}, filetype=${2:audio|video|file})",
		],
		description: "[chat]: send URL file to user",
	},
	"[chat]: send facebook file to user": {
		prefix: "amp-chat-sendfb",
		body: ["chat.send_media(sender_id, ${1:fb_url}, ${2:audio|video|file})"],
		description: "[chat]: send facebook file to user",
	},
};
