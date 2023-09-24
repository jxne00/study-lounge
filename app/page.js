import dynamic from 'next/dynamic';

// dynamically import clock component
const Clock = dynamic(() => import('../components/clock'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// dynamically import notes component
const Notes = dynamic(() => import('../components/notes'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// dynamically import todo component
const Todo = dynamic(() => import('../components/todo'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// dynamically import timer component
const Timer = dynamic(() => import('../components/timer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main className='min-h-screen p-4 md:p-8 lg:p-24 flex flex-col md:relative'>
      <div className='my-4 md:absolute md:top-0 md:left-0 md:ml-4 md:mt-4 md:mb-0'>
        <Clock />
        <Todo />
      </div>

      <div className='my-4 md:absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/5'>
        <Timer />
      </div>

      <div className='my-4 md:absolute md:bottom-0 md:right-0 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3'>
        <Notes />
      </div>
    </main>
  );
}
