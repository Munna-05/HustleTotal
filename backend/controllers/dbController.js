import User from '../model/User.js'
import Channel from '../model/Channel.js'
import mongoose from "mongoose"

export const dbController = {

    FindAllUsers: async () => {
        const allUsers = await User.find()
        return allUsers

    },
    saveUser: async (userDetails) => {
        const user = await User.save(userDetails)
        user.save()
        console.log('userSaved')
        return true
    },
    findUser: async (details) => {
        const userDetails = await User.findOne({ _id: details })
        console.log("..............", userDetails)
        return userDetails
    },
    saveChannel: async (channelDetails) => {
        const channel = new Channel(channelDetails)
        await channel.save()
        console.log('channel saved')
        return true
    },
    findChannel: async (data) => {
        const channelDetails = await Channel.findOne({ _id: data })
        return channelDetails
    },
    findAllChannel: async () => {
        const channels = await Channel.find()
        return channels
    },
    findAndUpdate:async (id,data) =>{
        await User.findByIdAndUpdate(id,data).then(()=>{
            console.log('user updated....')
        })
    }


} 