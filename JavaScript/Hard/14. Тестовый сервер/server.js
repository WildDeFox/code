export default {
	'/page1/': function() {
        return 'This is page №1';
    },
    '/page2/': function() {
        return 'This is page №2';
    },
    '/page3/': function() {
        return 'This is page №3';
    },
    '/list/': function() {
        let arr = [1, 2, 3, 4, 5];
        let str = '';
        for (let elem of arr) {
            str += '<p>' + elem + '</p>';
        }
        return str;
    },
    '/handler/': function(data, resp) {
        resp.setHeader('Content-Type', 'text/plain');
        return 'Hello World!';
    }
}