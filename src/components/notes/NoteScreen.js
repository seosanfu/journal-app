import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main">
            <NotesAppBar />
            <div className="notes__content">
                <form>
                    <input type="text" placeholder="Título" className="notes__title-input" autoComplete="off" />
                    <textarea placeholder="¿Qué paso hoy?" className="notes__textarea"></textarea>
                    <div className="notes__image">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAU"
                            alt="Imagen"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
