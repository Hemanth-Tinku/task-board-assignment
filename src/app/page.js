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
      <TaskBoard />
    </>
  );
}
