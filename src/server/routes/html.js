"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderApp = () => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Dog Finder</title>
        </head>
        <body>
          <div id="dog-finder-app"></div>
        </body>
        </html>
        `;
};
exports.default = (req, res) => {
    res.send(renderApp());
};
//# sourceMappingURL=html.js.map