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
	"[query]: Create/Modify temporary data": {
		"prefix": "amp-query-settemp",
		"body": [
			"query.set_temp(sender_id, ${1:'data_key'}, cmd)",
			""
		],
		"description": "[query]: Create/Modify temporary data"
	},
	"[query]: Get temporary data": {
		"prefix": "amp-query-gettemp",
		"body": [
			"query.get_temp(sender_id, ${1:'data_key'})",
			""
		],
		"description": "[query]: Get temporary data"
	},
	"[query]: Delete temporary data": {
		"prefix": "amp-query-deltemp",
		"body": [
			"query.del_temp(sender_id, ${1:'data_key'},)",
			""
		],
		"description": "[query]: Delete temporary data"
	}
}