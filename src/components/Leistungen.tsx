import type { WP_REST_API_Post, WP_REST_API_Posts } from 'wp-types';
import Slider from './Slider';

const Leistungen = ({ leistungsData }: { leistungsData: WP_REST_API_Posts }) => {
    return (
        <div>
            <div className="flex w-4/5 flex-col items-center justify-start gap-y-12">
                <Slider />
                {leistungsData && leistungsData.map((resultElement, idx) => <Post key={resultElement.id + idx} postData={resultElement} />)}
            </div>
        </div>
    );
};

export default Leistungen;

const Post = ({ postData }: { postData: WP_REST_API_Post }) => {
    const {
        id,
        date,
        date_gmt,
        guid,
        modified,
        modified_gmt,
        slug,
        status,
        type,
        link,
        title,
        content,
        excerpt,
        author,
        featured_media,
        comment_status,
        ping_status,
        sticky,
        template,
        format,
        meta,
        categories,
        tags,
        class_list,
        _links,
    } = postData;

    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div>id: {id}</div>
            <div>date: {date}</div>
            <div>date_gmt: {date_gmt}</div>
            <div>modified: {modified}</div>
            <div>modified_gmt: {modified_gmt}</div>
            <div>slug: {slug}</div>
            <div>status: {status}</div>
            <div>type: {type}</div>
            <div>link: {link}</div>
            <div>author: {author}</div>
            <div>featured_media: {featured_media}</div>
            <div>comment_status: {comment_status}</div>
            <div>ping_status: {ping_status}</div>
            <div>sticky: {sticky}</div>
            <div>template: {template}</div>
            <div>format: {format}</div>
            <div>categories: {categories}</div>
            <div>tags: {tags}</div>
            <div>class_list: {class_list.join(', ')}</div>

            {/* 
            <div>guid: {guid}</div>
            <div>title: {title}</div>
            <div>content: {content}</div>
            <div>excerpt: {excerpt}</div>
            <div>meta: {meta}</div>
            <div>_links: {_links}</div> 
            */}
        </div>
    );
};
