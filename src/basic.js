const basic = {
  "[basic]: Default function for ampalibe": {
		"prefix": "amp-def",
		"body": [
			"def ${1:func_name}(sender_id, cmd, **extends):",
			"  ${2:code...}"
		],
		"description": "[basic]: Default function for ampalibe"
	},
	"[basic]: Create ampalibe command": {
		"prefix": "amp-cmd",
		"body": [
			"@ampalibe.command(${1:'/route'})",
			"def ${2:func_name}(sender_id, cmd, **extends):",
			"  ${3:code...}"
		],
		"description": "[basic]: Create ampalibe command"
	},
	"[basic]: Create ampalibe action": {
		"prefix": "amp-act",
		"body": [
			"@ampalibe.action(${1:'/route'})",
			"def ${2:func_name}(sender_id, cmd, **extends):",
			"  ${3:code...}"
		],
		"description": "[basic]: Create ampalibe action"
	},
}