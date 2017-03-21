export function ContentSnippet(str) {
    return str
        .split(/\s+/)
        .slice(0, 50)
        .join(" ") + "...";
}

export function GetImage(content) {
    var myRegexp = new RegExp(/<img.*?src="(.*?)"/);
    var match = myRegexp.exec(content);
    if (match) {
        return match[1];
    }
}