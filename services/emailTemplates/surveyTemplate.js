const keys = require('../../configs/keys');

module.exports = (survey) => {
    return `    
    <html>
        <body>
            <diV style="text-align: center;">
                <h3>I'd like your input</h3>
                <p>Please answer the following question</p>
                <p>${survey.body}</p>
                <div><a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a></div>
                <div><a href="${keys.redirectDomain}/api/surveys/thanks">No</a></div>
            </diV>
        </body>
    </html>
    `

}