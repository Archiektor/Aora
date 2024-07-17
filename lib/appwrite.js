import {Account, Avatars, Client, Databases, ID} from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.js.aora',
    projectId: '66969fb00033c070ed56',
    databaseId: '6696a8ce003d529500a5',
    userCollectionId: '6696a90b001736d24e0a',
    videoCollectionId: '6696a94d0019be284e7e',
    storageId: '6696abcf00096c23ffb5'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, ID.unique(), {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        })

        return newUser;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}

export async function signIn(email, password) {
    try {
        const sessions = await account.createEmailPasswordSession(email, password);

        return sessions;
    } catch (e) {

    }
}