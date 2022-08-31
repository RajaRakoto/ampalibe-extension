export const query = {
  "[query]: Point to a specific route according to the argument": {
		"prefix": "amp-query-setact",
		"body": ["query.set_action(sender_id, ${1:'/route'})"],
		"description": "[query]: Points to a specific route according to the argument"
	},
	"[query]: Point action to null": {
		"prefix": "amp-query-nullact",
		"body": ["query.set_action(sender_id, None)"],
		"description": "[query]: Point action to null"
	},
}