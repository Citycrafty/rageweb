// src/appwrite.js
import { Client, Account, OAuthProvider } from 'appwrite'

const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1')// The Appwrite API endpoint
  .setProject('project-id')// Your Appwrite project IDexport const account = new Account(client)
export { OAuthProvider }
