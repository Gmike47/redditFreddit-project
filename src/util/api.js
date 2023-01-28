export const redditApi = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${redditApi}${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data)
};

export const getSubreddits = async () => {
    const response = await fetch(`${redditApi}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
    const response = await fetch(`${redditApi}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data);
};