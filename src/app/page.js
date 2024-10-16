import Head from 'next/head';
import TaskBoard from './modules/organisms/TaskBoard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Board</title>
        <meta name="description" content="Task management board for organizing tasks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header style={{ textAlign: 'center', padding: '20px 0', fontSize: '2rem', fontWeight: 'bold' }}>
          Task Board
        </header>
        <main style={{ padding: '20px', textAlign: 'center' }}>
          <TaskBoard />
        </main>
      </div>
    </>
  );
}
