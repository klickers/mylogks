var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var keystone_default = (0, import_core.config)({
  db: {
    provider: "mysql",
    url: "mysql://root:@localhost:3306/mylogks",
    onConnect: async (context) => {
    },
    // Optional advanced configuration
    enableLogging: true,
    idField: { kind: "uuid" }
  },
  lists: {
    LogEntry: (0, import_core.list)({
      access: import_access.allowAll,
      fields: {
        group: (0, import_fields.relationship)({
          ref: "LogGroup",
          many: false
        }),
        content: (0, import_fields_document.document)({
          formatting: true,
          dividers: true,
          links: true
        }),
        createdAt: (0, import_fields.timestamp)({
          defaultValue: { kind: "now" },
          validation: { isRequired: true },
          isIndexed: "unique"
        })
      }
    }),
    LogType: (0, import_core.list)({
      access: import_access.allowAll,
      fields: {
        name: (0, import_fields.text)({
          validation: { isRequired: true },
          isIndexed: "unique"
        }),
        slug: (0, import_fields.text)({
          validation: { isRequired: true },
          isIndexed: "unique"
        })
      }
    }),
    LogCategory: (0, import_core.list)({
      access: import_access.allowAll,
      fields: {
        name: (0, import_fields.text)({
          validation: { isRequired: true },
          isIndexed: "unique"
        }),
        slug: (0, import_fields.text)({
          validation: { isRequired: true },
          isIndexed: "unique"
        })
      }
    }),
    LogGroup: (0, import_core.list)({
      access: import_access.allowAll,
      fields: {
        name: (0, import_fields.text)({
          validation: { isRequired: true },
          isIndexed: "unique"
        }),
        slug: (0, import_fields.text)({
          validation: { isRequired: true },
          isIndexed: "unique"
        }),
        type: (0, import_fields.relationship)({
          ref: "LogType",
          many: false
        }),
        category: (0, import_fields.relationship)({
          ref: "LogCategory",
          many: false
        }),
        startDate: (0, import_fields.calendarDay)({}),
        endDate: (0, import_fields.calendarDay)({}),
        completed: (0, import_fields.checkbox)({})
      }
    })
  }
});
//# sourceMappingURL=config.js.map
