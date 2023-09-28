import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Igzc6AbImEnWcXkeIurcNaxJKx72okmfmjhJybKGQUqLCmdK-9Hsje6f3gy98ntMuVe6Skym0zwyd-eK0Lkitc5Yyihp5tS8rdhu0d2E89--sFdy0EnGwJGpS1EGZXYx'
    }
})