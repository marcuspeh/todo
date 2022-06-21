"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = require("next/document");
function Document() {
    return (<document_1.Html>
        <document_1.Head>
            <meta name="description" content="todo App"/>
            <link rel="icon" href="/favicon.ico"/>
        </document_1.Head>
        <body>
            <document_1.Main />
            <document_1.NextScript />
        </body>
    </document_1.Html>);
}
exports.default = Document;
