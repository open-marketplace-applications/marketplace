const { channelRoot, createChannel, createMessage, parseMessage, mamAttach, mamFetch, mamFetchAll } = require('@iota/mam.js');
import { asciiToTrytes, trytesToAscii } from '@iota/converter'

import { composeAPI } from '@iota/core'

// Setup the details for the channel.
const mode = 'restricted';
const sideKey = 'OMA';

// Create a new channel using the details
// You could also load the state from persistence.

export const generateSeed = () => {
    if (window.crypto && window.crypto.getRandomValues) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
        let result = '';
        let values = new Uint32Array(81);
        window.crypto.getRandomValues(values);
        values.forEach(value => (result += charset[value % charset.length]));
        return result;
    } else throw new Error('Your browser is outdated and cant generate secure random numbers');
};

export const createShop = (
    data
) => {

    const promise = new Promise(async (resolve, reject) => {
        try {
            let shop_seed = generateSeed()

            // Create a new channel using the details
            // You could also load the state from persistence.
            // const channelState = createChannel(shop_seed, 2, mode, sideKey);
            const channelState = createChannel(shop_seed, 2, mode, sideKey);
            console.log("channelState", channelState)
            const initialRoot = channelRoot(channelState);
            console.log("initialRoot", initialRoot)

            // Create a MAM message using the channel state.
            // The returned mamMessage will contain address, root, nextRoot and payload.
            // The channel state is also updated, so you should persist it if you want
            // to add further messages in the same channel.
            

            // The payload should be attached to the tangle.

            
            const trytesMessage = asciiToTrytes(JSON.stringify(data))

            const mamMessage = createMessage(channelState, trytesMessage);
        
            // Decode the message using the root and sideKey.
            // The decodedMessage will contain nextRoot and message.
            const decodedMessage = parseMessage(mamMessage.payload, mamMessage.root, sideKey);
            console.log("decodedMessage", decodedMessage)
            // If we want to attach the message to the tangle we first compose the API
            const api = composeAPI({ provider: "https://comnet.einfachiota.de" });
            // And then attach the message, tagging it if required.
            // Attaching will return the actual transactions attached to the tangle if you need them.
            let test = await mamAttach(api, mamMessage, 3, 10, "MY9MAM");
            console.log("test", test)
            return resolve(initialRoot);

        } catch (error) {
            console.log('createMAMChannel error', error);
            return reject(error);
        }
    });

    return promise;

};