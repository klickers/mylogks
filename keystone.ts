import { BaseKeystoneTypeInfo } from "@keystone-6/core/types"
import { config, list } from "@keystone-6/core"
import { allowAll } from "@keystone-6/core/access"
import {
	calendarDay,
	checkbox,
	relationship,
	text,
	timestamp,
} from "@keystone-6/core/fields"
import { document } from "@keystone-6/fields-document"

export default config<BaseKeystoneTypeInfo>({
	db: {
		provider: "mysql",
		url: "mysql://root:@localhost:3306/mylogks",
		onConnect: async (context) => {
			/* ... */
		},
		// Optional advanced configuration
		enableLogging: true,
		idField: { kind: "uuid" },
	},
	server: {
		cors: { origin: ["http://localhost:4321"] },
	},
	lists: {
		LogEntry: list({
			access: allowAll,
			fields: {
				group: relationship({
					ref: "LogGroup",
					many: false,
				}),
				content: document({
					formatting: true,
					dividers: true,
					links: true,
				}),
				createdAt: timestamp({
					defaultValue: { kind: "now" },
					validation: { isRequired: true },
					isIndexed: "unique",
				}),
			},
		}),
		LogType: list({
			access: allowAll,
			fields: {
				name: text({
					validation: { isRequired: true },
					isIndexed: "unique",
				}),
				slug: text({
					validation: { isRequired: true },
					isIndexed: "unique",
				}),
			},
		}),
		LogCategory: list({
			access: allowAll,
			fields: {
				name: text({
					validation: { isRequired: true },
					isIndexed: "unique",
				}),
				slug: text({
					validation: { isRequired: true },
					isIndexed: "unique",
				}),
			},
		}),
		LogGroup: list({
			access: allowAll,
			fields: {
				name: text({
					validation: { isRequired: true },
					isIndexed: "unique",
				}),
				slug: text({
					validation: { isRequired: true },
					isIndexed: "unique",
				}),
				type: relationship({
					ref: "LogType",
					many: false,
				}),
				category: relationship({
					ref: "LogCategory",
					many: true,
				}),
				startDate: calendarDay({}),
				endDate: calendarDay({}),
				completed: checkbox({}),
			},
		}),
	},
})
