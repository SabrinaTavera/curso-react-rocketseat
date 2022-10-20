import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'

import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react"


interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: "paragraph" | "link",
    content: string
}

interface PostProps {
    author: Author,
    publishedAt: Date,
    content: Content[]
}
//estado = variáveis que eu quero que o component monitore

export function Post({ author, publishedAt, content }: PostProps) {

    /**
     * publishedAt.toISOString()
     * A função toISOString() também é nativa do javascript 
     */

    /**
     * Intl api que vem por padrão no javascript sem instalação 
     * Ele permite fazer a formatação de datas, números, puralização, listas  e etc 
     */
    // const publishedAtDateFormat = new Intl.DateTimeFormat('pt-BR',{
    //     day: "2-digit",
    //     month: "long",
    //     hour: "2-digit",
    //     minute: "2-digit",
    // }).format(publishedAt)

    /**
     * Também temos a opção de trabalhar com o date-fns, mas é necessário a instalação 
     * npm i date-fns 
     */

    const [comments, setComments] = useState(['Post muito bacana']);

    const [newCommentText, setNewCommentText] = useState('')


    const publishedAtDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComent(event: FormEvent) {

        event.preventDefault();


        // const newText = event.target.comment.value;
        //imutabilidade 

        setComments([...comments, newCommentText])

        //Exemplo de programação imperativa 
        //console.log(event.target.comment.value)
        //event.target.comment.value = ""

        //Exemplo de programação declarativa 
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {

        //imutabilidade as coisas não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)


        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
        console.log(`Deletar comentário ${commentToDelete}`)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        console.log(event)
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a>{line.content}</a></p>;
                    }
                })}



            </div>
            <form onSubmit={handleCreateNewComent} className={styles.comentForm}>
                <strong>Deixe seu cometário</strong>
                <textarea
                    placeholder="Deixe um cometário"
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={newCommentText.length === 0} >
                        Publicar
                    </button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}

            </div>

        </article>
    )
}












