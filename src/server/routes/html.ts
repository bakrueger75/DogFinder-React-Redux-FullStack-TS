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
        `
};

export default (req: any, res: any) => {
    res.send(renderApp());
}