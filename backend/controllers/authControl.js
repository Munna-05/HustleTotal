
import express, { response } from 'express'
import modelName from '../model/User.js'
import User from '../model/User.js'
import Channel from '../model/Channel.js'
import jwt from 'jsonwebtoken'
import fetch from 'node-fetch'
import axios from 'axios'

const youtubeApiKey = 'AIzaSyD6VNsx-vJFfwLH8az3ibod973-C1BlkYE'
const url = 'https://www.googleapis.com/youtube/v3'
const empty = {}


  


export const controller = {

    register: async (req, res) => {
        try {
            console.log("........................................", req.body)
            if (req.body.name === "" || req.body.email === "" || req.body.password == "" || req.body.password != req.body.rpass || req.body.channelName === "") {
                res.send('invalid credentials')
                // res.status(500).json('invalid credentials')
                console.log('invalid credentials')
            } else {

                if (req.body.channelName) {
                    const channelname = req.body.channelName
                    const options = {
                        method: 'GET',
                        url: 'https://youtube138.p.rapidapi.com/search/',
                        params: {q: `${channelname}`, hl: 'en', gl: 'US'},
                        headers: {
                          'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
                          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
                        }
                      };
                    axios.request(options).then(function (response) {
                        let data = response.data
                        // console.log(data.contents[0].channel.channelId) //channel id here
                        let channelid =(data.contents[0].channel.channelId) //channel id here


                        const stats = {
                            method: 'GET',
                            url: 'https://youtube-v31.p.rapidapi.com/channels',
                            params: {part: 'statistics', id: `${channelid}`},
                            headers: {
                              'X-RapidAPI-Key': '98708987a5mshacfd574ef4cff3ap12c3c7jsn52d952a577b0',
                              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                            }
                          };
                        axios.request(stats).then(async function (response) {
                            
                            console.log(response.data);
                            console.log("title :",response.data.items[0].snippet.title)
                            console.log("description :",response.data.items[0].snippet.description)
                            console.log("subs :",response.data.items[0].statistics.subscriberCount)
                            const user = new User(req.body)
                            await user.save() 
                            const userid = await user.collection.findOne({email:req.body.email})
                            console.log("returned user details after saving :",userid)
                            if(userid){
                                const channelDetails ={
                                    userId:userid._id,
                                    channelTitle:response.data.items[0].snippet.title,
                                    channelDescription:response.data.items[0].snippet.description,
                                    subscriberCount:response.data.items[0].statistics.subscriberCount,
                                    dp:response.data.items[0].snippet.thumbnails.medium.url
                                }
                                const channel = new Channel(channelDetails)
                                await channel.save()
                                res.status(201).json('user created successfully')
                            }
                            
                        }).catch(function (error) {
                            console.error(error);
                        });

                    }).catch(function (error) {
                        console.error(error);
                    });
                  

                   

                }
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


//     getYoutube: async (req, res) => {
//         console.log("got youtube request")
//         await fetch(`${url}` + '/search?part=snippet&q=BrototypeMalayalam&key=' + `${youtubeApiKey}`).then((response) => {
//             return response.json()
//         }).then((data => {
//             console.log(data)
//             const channel_id = data.items[0].id.channelId
//             const title = data.items[0].snippet.title
//             const description = data.items[0].snippet.description
//             console.log('channel id :', channel_id, title, description)
//             console.log('snippet :', data.items[0].snippet.thumbnails)

//             const channelDetails = {
//                 title: title,
//                 description: description,

//             }

//             fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + `${channel_id}` + '&key=AIzaSyC87sI8sEK3S7YP9smCG1EhWihdUh4fJCs').then((response) => {
//                 // console.log(response)
//                 return response.json()
//             }).then((res) => {
//                 console.log(res)
//                 const subs = res.items[0].statistics.subscriberCount
//                 const viewCount = res.items[0].statistics.viewCount
//                 const videoCount = res.items[0].statistics.videoCount
//                 console.log(subs, viewCount, videoCount)

//                 let statistics = {
//                     subscribers: subs,
//                     views: viewCount,
//                     videos: videoCount
//                 }
//                 sendData(channelDetails, statistics)
//             })
//             function sendData(channel, stat) {

//                 res.send({ channel, stat })
//             }


//         }))
//     }

getYoutube: async (req, res) => {
    console.log("got youtube request")
     let channeldetails = await Channel.find().sort({subscriberCount: -1 })
     
     console.log("channeldetails : ................", channeldetails )
     res.status(200).json(channeldetails)
 
   
},
profile: async (req,res)=>{
    console.log(req.params.id)
    let profileDetails = await Channel.findOne({userId:req.params.id})
    console.log("profile details : ",profileDetails)
    res.status(200).json(profileDetails)
}
}



