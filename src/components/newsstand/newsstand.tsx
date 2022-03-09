import * as React from 'react'
import { DateTime } from 'luxon'

const NewsCard:React.FC = ({ title, subtitle, date, url, image="" }) => {
    return (
        <div className="card card-side card-bordered border-base-300 shadow">
            <div className="card-body">
                <h3 className={`card-title font-bold text-3xl`}>
                    <a href={url}>{title}</a>
                </h3>
                <div>{subtitle}</div>
                <div className="mt-auto">
                    <time datetime={date}>{DateTime.fromISO(date).setLocale('id').toLocaleString(DateTime.DATE_FULL)}</time>
                </div>
            </div>
            {image ? (
            <figure>
                <a href={url}><img src={image} width={200} height={150} alt={title} /></a>
            </figure>
            ) : null }
        </div>
    )
}

const NewsStandComponent:React.FC = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 gap-8">
            {posts.map((post, i) => {
                return (
                    <NewsCard
                        title={post.title}
                        subtitle={post.description}
                        date={post.date}
                        image={post.image}
                        url={post.url}
                        key={i}
                    /> 
            )})}
        </div>
    )
}

export default NewsStandComponent