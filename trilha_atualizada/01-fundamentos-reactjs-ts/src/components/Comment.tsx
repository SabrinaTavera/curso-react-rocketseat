import styles from "./Comment.module.css"
import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}
export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {

        setLikeCount((state) => {
            return likeCount + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            {/* <img className={styles.cover} src=""></img> */}
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sabrina Tavera</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comnetário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}