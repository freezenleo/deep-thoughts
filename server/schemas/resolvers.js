const resolvers = {
    Query: {
        helloWord: () => {
            return 'Hello world!';
        }
    }
};

module.exports = resolvers;