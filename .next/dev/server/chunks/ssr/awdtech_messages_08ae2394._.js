module.exports = [
  "[project]/awdtech/messages/en.json (json, async loader)",
  (__turbopack_context__) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        ["server/chunks/ssr/awdtech_messages_en_json_e90a18b9._.js"].map(
          (chunk) => __turbopack_context__.l(chunk),
        ),
      ).then(() => {
        return parentImport("[project]/awdtech/messages/en.json (json)");
      });
    });
  },
  "[project]/awdtech/messages/es.json (json, async loader)",
  (__turbopack_context__) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        ["server/chunks/ssr/awdtech_messages_es_json_8b9cc00b._.js"].map(
          (chunk) => __turbopack_context__.l(chunk),
        ),
      ).then(() => {
        return parentImport("[project]/awdtech/messages/es.json (json)");
      });
    });
  },
  "[project]/awdtech/messages/fr.json (json, async loader)",
  (__turbopack_context__) => {
    __turbopack_context__.v((parentImport) => {
      return Promise.all(
        ["server/chunks/ssr/awdtech_messages_fr_json_d2af5ead._.js"].map(
          (chunk) => __turbopack_context__.l(chunk),
        ),
      ).then(() => {
        return parentImport("[project]/awdtech/messages/fr.json (json)");
      });
    });
  },
];
