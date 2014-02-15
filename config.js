exports.Expires = {
    fileMatch: /^(gif|png|jpg|js|css|html)$/ig,
    maxAge: 60*60*24*365
};
exports.Compress = {
    match: /css/ig
};
exports.Welcome = {
    file: "index.html"
};
exports.Timeout = 20 * 60 * 1000;
exports.Secure = null;
