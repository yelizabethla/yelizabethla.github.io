import blogEntries from '../entries/blogEntries';
import ReactMarkdown from 'react-markdown';

function BlogTiles() {
  return (
    blogEntries.map((blog, index) => {
      const jobs = blog.jobs.join(' | ');
      return (
        <div key={index} className='blog-tile col-12 md:col-6 lg2:col-4'>
          <a tabIndex={10 + index} className='flex flex-col bg-ellie-white m-4' href={blog.pathname}>
            <img className='w-full rounded-lg' src={blog.tileImage?.uri || '/assets/default-fallback-image.png'} alt={`${blog.tileImage?.alt || blog.name + " Blog Tile" || "Blog Tile " + index}`} />
            <div className='grid place-items-center gap-2 p-4'>
              <div className='h3 text-center'>{blog.description}</div>
              <em>{jobs}</em>
            </div>
          </a>
        </div>
      );
    })
  );
} 

export function BlogsDisplay() {
  return (
    <div className='flex flex-wrap justify-center p-4 max-w-[96rem] mx-auto'>
      <BlogTiles />
    </div>
  );
}

// -- BLOCKS ----------------------------------

function Padding() {
  return <div className='padding-block w-full pt-8'></div>
}

function TitleBlock({ data }) {
  return <h2 className='title-block w-full pb-2'>{data}</h2>
}

function TextColumn({ title, body, weight, midWeight }) {
  return (
    <div className={`text-column flex flex-col col-12 sm:col${midWeight ? '-' + midWeight : weight ? '-' + parseInt(weight)*2 : '' } lg:col${weight ? '-' + weight : '' }`}>
      <div className=' pb-4 pr-4'>
        <h5 className='pb-2'>{title}</h5>
        <ReactMarkdown className='markdown whitespace-pre-line'>{body}</ReactMarkdown>
      </div>
    </div>
  )
}

function TextColumns({ data }) {
  return (
    <div className='text-column-block flex flex-wrap w-full pb-4'>
      {data.map((column, index) => {
        return <TextColumn title={column.title} body={column.body} midWeight={column.midWeight} weight={column.weight} key={index} />
      })}
    </div>
  )
}

function Body({ data }) {
  return <ReactMarkdown className='body-block markdown whitespace-pre-line pb-4'>{data}</ReactMarkdown>
}

function Image({ data, customClasses }) {
  return (
    <div className={`image-block py-2${customClasses ? ' ' + customClasses : ''}`}>
      <img src={data.src} alt={data.alt} className='pb-2 max-w-3xl w-full mx-auto' loading='lazy' />
      {data.body ? <ReactMarkdown className='markdown whitespace-pre-line'>{data.body}</ReactMarkdown> : null}
    </div>
  )
}

function ImageRow({ data }) {
  return (
    <div className='image-row flex flex-wrap'>
      {data.map((image, index) => {
        return (
          <div className={`col-12 sm:col${image.midWeight ? '-' + image.midWeight : image.weight ? '-' + parseInt(image.weight)*2 : '' } lg:col${image.weight ? '-' + image.weight : '' }`}>
            <Image key={index} data={image} customClasses='px-2'/>
          </div>
        )
      })}
    </div>
  );
}

function ImageColumns2({ data }) {
  return (
    <div className='image-columns flex gap-8 flex-col sm:flex-row'>
      {data.map((column, index) => {
        return (
          <div key={index} className='image-column flex flex-col col'>
            {column.map((image, index) => {
              return <Image key={index} data={image}/>
            })}
          </div>
        )
      })}
    </div>
  );
}

function Video({ data }) {
  return (
    <div className='video-block px-2 pb-2 w-full aspect-video max-w-5xl mx-auto'>
      <iframe src={data.src} allowFullScreen={data.allowFullScreen} title={data.title} width="100%" height="100%"/>
    </div>
  )
}

export function BlogPageSections({ blog }) {
  return (blog.map((block, index) => {
    let item;
    switch (block.type) {
      case 'title':
        item = <TitleBlock key={index} data={block.data} />
        break;
      case 'text columns':
        item = <TextColumns key={index} data={block.data} />
        break;
      case 'body':
        item = <Body key={index} data={block.data} />
        break;
      case 'padding':
        item = <Padding key={index} />
        break;
      case 'image':
        item = <Image key={index} data={block.data} />
        break;
      case 'image row':
        item = <ImageRow key={index} data={block.data} />
        break;
      case 'image columns 2':
        item = <ImageColumns2 key={index} data={block.data} />
        break;
      case 'video':
        item = <Video key={index} data={block.data} />
        break;
      default:
        break;
    }
    return item;
  }))
}