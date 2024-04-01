export const pattern = {
	"[pattern]: Generate credentials pattern": {
		prefix: "amp-pattern-credentials",
		body: [
			"@ampalibe.command(${1:'/route'})",
			"def ${2:func_name}(sender_id, cmd, **ext):",
			"    chat.send_message(sender_id, ${3:'Enter your mail'})",
			"    query.set_action(sender_id, ${4:'/get_mail'})",
			"",
			"@ampalibe.action(${4:'/get_mail'})",
			"def ${5:get_mail}(sender_id, cmd, **ext):",
			"    query.set_temp(sender_id, 'mail', cmd)",
			"    chat.send_message(sender_id, ${6:'Enter your password'})",
			"    query.set_action(sender_id, ${7:'/get_password'})",
			"",
			"@ampalibe.action(${7:'/get_password'})",
			"def ${8:get_password}(sender_id, cmd, **ext):",
			"    query.set_action(sender_id, None)  ",
			"    ${9:'mail'} = query.get_temp(sender_id, ${9:'mail'})",
			"    ${10:'password'} = cmd",
		],
		description: "[pattern]: Generate credentials pattern",
	},
};
