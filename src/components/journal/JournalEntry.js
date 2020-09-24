import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={
                    {
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU)'
                    }
                }
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Titulo</p>
                <p className="journal__entry-content">Dolore dolor adipisicing in anim veniam enim amet irure laborum occaecat eiusmod dolore proident sit.</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
