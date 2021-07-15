import React from 'react'
import ChatDemo from './ChatDemo'
import './Conversations.css'

function Conversations() {
    return (
        <div className='conversations'>
            <ChatDemo 
                name='Haley & Atlas'
                message='Hey!'
                timestamp='just now'
                dogPic='https://i.imgur.com/NofaRy8.jpg'
                profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtnTcfzD1zMtyOuNPMRTGPNZcFbHOD5VhMQ&usqp=CAU'
            />
            <ChatDemo 
                name='Anna & Cooper'
                message='See you then'
                timestamp='12:17 PM'
                dogPic='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
                profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcq37viCpKeAfQazaZ_43B8AVY66IAuLZNg&usqp=CAU'
            />
            <ChatDemo 
                name='Kristy & Ryder'
                message='So cute'
                timestamp='11:05 AM'
                dogPic='https://highlandcanine.com/wp-content/uploads/2021/01/siberian-husky-in-the-snow.jpg'
                profilePic='https://image.flaticon.com/icons/png/512/146/146005.png'
            />
            <ChatDemo 
                name='Laura & Angel'
                message="that's close to me"
                timestamp='yesterday'
                dogPic='https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg'
                profilePic='https://st2.depositphotos.com/3557671/11465/v/950/depositphotos_114656902-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg'
            />
            <ChatDemo
                name='Becca & Koda'
                message='What a long hike'
                timestamp='1w'
                dogPic='https://pheasantsforever.org/getattachment/94f12408-c8fe-483f-9358-61f9c2af3ae7/Bird-Dogs-American-Labs-vs-British-Labs.aspx?maxsidesize=740&width=450&height=500'
                profilePic='https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/girl.png'
            />
        </div>
    )
}

export default Conversations
