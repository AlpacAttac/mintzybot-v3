module.exports = {
    name: 'args-info',
    description: 'info about arguments.',
    args: false,
    execute(message, args) {
        if(args[0]==='foo'){
            return message.channel.send('bar');
        }

        message.channel.send(`Arguments: ${args} \nArguments Length: ${args.length}`);

    }
};