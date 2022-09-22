
import express, { response } from 'express'
import modelName from '../model/User.js'
import User from '../model/User.js'
import Channel from '../model/Channel.js'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import Videos from '../model/Videos.js'
import { dbController } from './dbController.js'


const youtubeApiKey = 'AIzaSyD6VNsx-vJFfwLH8az3ibod973-C1BlkYE'
const url = 'https://www.googleapis.com/youtube/v3'
const empty = {}



export const controller = {

    register: async (req, res) => {
        try {
            console.log("........................................", req.body)
            if (req.body.name === "" || req.body.email === "" || req.body.password == "" || req.body.password != req.body.rpass ) {
                res.send('invalid credentials')
                // res.status(500).json('invalid credentials')
                console.log('invalid credentials')
            } else {
                const user = new User(req.body)
                await user.save() //user details saved in database
                console.log('user Created')
                res.send('userCreated')

                // if (req.body.channelName) {
                //     const channelname = req.body.channelName
                //     const options = {
                //         method: 'GET',
                //         url: 'https://youtube138.p.rapidapi.com/search/',
                //         params: { q: `${channelname}`, hl: 'en', gl: 'US' },
                //         headers: {
                //             'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
                //             'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
                //         }
                //     };
                //     axios.request(options).then(async function (response) {
                //         let data = await response.data
                //         // console.log(data.contents[0].channel.channelId) //channel id here
                //         let channelid = (data.contents[0].channel.channelId) //channel id here


                //         const stats = {
                //             method: 'GET',
                //             url: 'https://youtube-v31.p.rapidapi.com/channels',
                //             params: { part: 'statistics', id: `${channelid}` },
                //             headers: {
                //                 'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
                //                 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                //             }
                //         };
                //         axios.request(stats).then(async function (response) {

                //             console.log("response here ......................", response.data);
                //             console.log(response.data.items[0].id)
                //             console.log("title :", response.data.items[0].snippet.title)
                //             console.log("description :", response.data.items[0].snippet.description)
                //             console.log("subs :", response.data.items[0].statistics.subscriberCount)



                //             const userid = await user.collection.findOne({ email: req.body.email })
                //             console.log("returned user details after saving :", userid)
                //             if (userid) {
                //                 const channelDetails = {
                //                     userId: userid._id,
                //                     channelId: response.data.items[0].id,
                //                     channelTitle: response.data.items[0].snippet.title,
                //                     channelDescription: response.data.items[0].snippet.description,
                //                     subscriberCount: response.data.items[0].statistics.subscriberCount,
                //                     dp: response.data.items[0].snippet.thumbnails.high.url
                //                 }
                //                 const channel = new Channel(channelDetails)
                //                 await channel.save()
                //                 res.status(201).json('user created successfully')
                //                 const options2 = {
                //                     method: 'GET',
                //                     url: 'https://youtube-v31.p.rapidapi.com/search',
                //                     params: {
                //                         channelId: response.data.items[0].id,
                //                         part: 'snippet,id',
                //                         order: 'date',
                //                         maxResults: '50'
                //                     },
                //                     headers: {
                //                         'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
                //                         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                //                     }
                //                 };

                //                 await axios.request(options2).then(async function (response) {
                //                     console.log('_______________________', response.data.items);
                //                     let channelVideos = {
                //                         channelId: response.data.items[0].snippet.channelId,
                //                         videos: response.data.items
                //                     }
                //                     const video = new Videos(channelVideos) //video collection
                //                     await video.save()
                //                     console.log('video saved in collection')

                //                 }).catch(function (error) {
                //                     console.error(error);
                //                 });
                //             }

                //         }).catch(function (error) {
                //             console.error(error);
                //         });

                //     }).catch(function (error) {
                //         console.error(error);
                //     });

                // }
            }
        } catch (error) {
            console.log('error')
        }
    },
    login: async (req, res) => {
        console.log(req.body)
        try {
            console.log("...................login details", req.body)
            if (req.body.email === "") {
                res.status(401).json('Invalid Email')
                console.log('Invalid Email')
            } else {
                console.log('im here')
                const user = await User.findOne({ email: req.body.email })
                if (user) {
                    if (user.password == req.body.password) {
                        console.log("correct credentials")
                        const accessToken = jwt.sign({ id: user._id }, 'mySecretKey')
                        res.json({
                            id: user._id, username: user.name, email: user.email, accessToken
                        })
                    } else {
                        res.send('Invalid Password')
                    }
                } else {
                    res.send('Invalid Email')
                }


            }
        } catch (error) {
            console.log(error)
        }
    },


    getYoutube: async (req, res) => {
        console.log("got youtube request")
        let channeldetails = await Channel.find().sort({ subscriberCount: -1 })

        console.log("channeldetails : ................", channeldetails)
        res.status(200).json(channeldetails)
    },
    profile: async (req, res) => {
        console.log(req.params.id)
        let profileDetails = await Channel.findOne({ userId: req.params.id })
        console.log("profile details : ", profileDetails)

        let videoDetails = await Videos.findOne({ channelId: profileDetails.channelId })
        let details = {
            profileDetails: profileDetails,
            videos: videoDetails
        }

        res.status(200).json(details)
    },
    getChannelVideos: async (req, res) => {
        console.log(req.params.channelId)
        let videoDetails = await Videos.findOne({ channelId: req.params.channelId })


        res.status(200).json(videoDetails)
    },
    getChats: async (req, res) => {
       console.log('chats route')

        res.send("chats")
    },
    getUser:async(req,res) =>{
        if(req.params.id===""){
            res.status(404).json("user id missing")
        }else{

            dbController.findUser(req.params.id).then((response)=>{
            console.log("database controller working",response)
            res.status(200).json(response)
           })
        }
    },

    verifyChannel: async (req, res) => {
        console.log(req.body)


        const userid = await User.findOne({ _id: req.params.id })
        try {
            console.log('verifying youtube channel')

            const stats = {
                method: 'GET',
                url: 'https://youtube-v31.p.rapidapi.com/channels',
                params: { part: 'statistics', id: `${req.params.id}` },
                headers: {
                    'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            };
            axios.request(stats).then((response) => {
                console.log(response.data.items)


                // console.log("returned user details after saving :", userid)

                const channelDetails = {
                    userId: userid._id,
                    channelId: response.data.items[0].id,
                    channelTitle: response.data.items[0].snippet.title,
                    channelDescription: response.data.items[0].snippet.description,
                    subscriberCount: response.data.items[0].statistics.subscriberCount,
                    dp: response.data.items[0].snippet.thumbnails.high.url
                }
                dbController.saveChannel(channelDetails).then((res) => {
                    console.log(res)
                })
                res.status(201).json('user created successfully')
                res.send(response.data.items)
            })



        } catch (error) {
            res.send("no channel id")
        }


    },
    updateUser:(req,res) =>{
        console.log(req.body)
        dbController.findAndUpdate(req.params.id,req.body).then(()=>{

            res.status(200).json('user updated')
        })
        console.log(".....request received.......")

    }



}



